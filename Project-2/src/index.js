const express = require("express")
const path = require("path")
const app = express()
const { bottles } = require("./bottleData");
const session = require('express-session');
const bcrypt = require('bcryptjs');
const generateHmPage = require("./hm");
const generateProductsPage = require("./products");
const generateHowCanImprove = require("./HowCanImprove");
const generateLoginPage = require("./login");
const generateFqaPage = require("./fqa");
const generatewinePage = require("./wine");
const generateRumPage = require("./rum");
const generateScotchPage = require("./scotch");
const generateWhiskeyPage = require("./Whiskey");
const generateVodkaPage = require("./vodka");
const generateGinPage = require("./gin");
const generateBotPage = require("./bot");
// const hbs = require("hbs")
const LogInCollection = require("./mongo")
const port = process.env.PORT || 3000
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))


// hbs.registerPartials(partialPath)

app.use(session({
    secret: 'secret', 
    resave: false,
    saveUninitialized: true
}));


// for Authentication
const requireAuth = (req, res, next) => {
    // Check if user is authenticated
    if (req.session && req.session.userId) {
        next(); // User is authenticated and  proceed 
    } else {
        res.status(401).send("Unauthorized"); // User is not authenticated, return 401 Unauthorized
    }
};
app.get('/signup', (req, res) => {
    res.render('signup')
})
// app.get('/login', (req, res) => {
//     res.render('login')
// })
app.get('/', (req, res) => {
    res.send(generateLoginPage());
})
app.get('/hm', (req, res) => {
    res.send(generateHmPage());
});
app.get('/products', (req, res) => {
    res.send(generateProductsPage());
});

app.get('/HowCanImprove', (req, res) => {
    res.send(generateHowCanImprove());
});
app.get("/login", (req, res) => {
    
    if (req.session && req.session.userId) {
     
        return res.redirect("/hm");
    }
    // User is not logged in, render the login page
    res.send(generateLoginPage());
});

app.get('/fqa', (req, res) => {
    res.send(generateFqaPage());
});
app.get('/wine', (req, res) => {
    res.send(generatewinePage());
});
app.get('/rum', (req, res) => {
    res.send(generateRumPage());
});
app.get('/scotch', (req, res) => {
    res.send(generateScotchPage());
});


app.get('/Whiskey', (req, res) => {
    res.send(generateWhiskeyPage());
});

app.get('/vodka', (req, res) => {
    res.send(generateVodkaPage());
});

app.get('/gin', (req, res) => {
    res.send(generateGinPage());
});

app.get('/bot', (req, res) => {
    res.send(generateBotPage());
});

app.get('/home', (req, res) => {
    // Get username from URL parameter
    const username = req.query.username;
    res.render('home', { username: username }); // Pass username to home template
});


app.get('/search/:id', (req, res) => {
    const { id } = req.params;
    const bottle = bottles.find(bottles => bottles.id === parseInt(id));
    if (!bottle) {
        res.status(404).send("T-shirt not found");
    } else {
        res.status(200).send(bottle);
    }
});


app.post('/search/create', (req, res) => {
    const { name, price } = req.body;

    
    if (!name || !price) {
        return res.status(400).send("Name and price are required");
    }


    const id = bottles.length > 0 ? bottles[bottles.length - 1].id + 1 : 1;

   
    const newBottle = { id, name, price };

    bottles.push(newBottle);
    console.log("Current T-shirts:", bottles);

    res.status(201).send(newBottle);
});

// Route to handle user signup
app.post('/signup', async (req, res) => {
    const { name, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if user already exists
    const checking = await LogInCollection.findOne({ name });

    try {
        if (checking) {
            return res.send("User details already exist");
        } else {
            await LogInCollection.insertMany([{ name, password: hashedPassword }]);
            // Redirect to hm page after signup
            req.session.userId = name; // Set userId in session to indicate user is logged in
            res.redirect(`/hm?username=${name}`);
        }
    } catch (err) {
        return res.status(500).send("An error occurred");
    }
});

// Route to handle user login
app.post("/login", async (req, res) => {
    const { name, password } = req.body;
    try {
        const user = await LogInCollection.findOne({ name });

        if (user && (await bcrypt.compare(password, user.password))) {
            // Set userId in session to indicate user is logged in
            req.session.userId = user._id;
            // Redirect to home page after login
            res.redirect(`/hm?username=${name}`);
        } else {
            res.send("Incorrect username or password");
        }
    } catch (error) {
        res.status(500).send("Error: " + error.message);
    }
});

app.get("/logout", (req, res) => {
    // Destroy the session
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("Error occurred during logout");
        }
        // Redirect the user to the login page after logout
        res.redirect("/login");
    });
});




app.listen(port, () => {
    console.log('port connected');
})