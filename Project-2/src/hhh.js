const express = require("express")
const path = require("path")
const app = express()
const session = require('express-session');
const generateHmPage = require("./hm");
const generateProductsPage = require("./products");
const generateHowCanImprove = require("./HowCanImprove");
const generateLoginPage = require("./login");
const generateFqaPage = require("./fqa");
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
app.get('/login', (req, res) => {
    res.send(generateLoginPage());
});

app.get('/fqa', (req, res) => {
    res.send(generateFqaPage());
});
app.get('/home', (req, res) => {
    // Get username from URL parameter
    const username = req.query.username;
    res.render('home', { username: username }); // Pass username to home template
});

app.post('/signup', async (req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password
    }

    const checking = await LogInCollection.findOne({ name: req.body.name })

    try {
        if (checking && checking.name === req.body.name && checking.password === req.body.password) {
            return res.send("user details already exists")
        } else {
            await LogInCollection.insertMany([data])
            return res.status(201).render("home", {
                naming: req.body.name
            })
        }
    } catch (err) {
        return res.status(500).send("An error occurred")
    }
})


app.post('/login', async (req, res) => {
    try {
        const check = await LogInCollection.findOne({ name: req.body.name });

        if (check.password === req.body.password) {
            // Redirect to home page with username as URL parameter
            res.redirect(`/home?username=${req.body.name}`);
        } else {
            res.send("Incorrect password");
        }
    } catch (error) {
        res.status(500).send("Error: " + error.message);
    }
});

app.get('/home', (req, res) => {
    // Get username from URL parameter
    const username = req.query.username;
    res.render('home', { username: username }); // Pass username to home template
});




app.listen(port, () => {
    console.log('port connected');
})