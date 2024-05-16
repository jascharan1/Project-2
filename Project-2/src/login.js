function generateLoginPage() {
    return `


    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="css/login.css">
        
    </head>
    <body>
         <header>
        <nav class="minimal-nav">
          <ul class="navbar">
            <li><a href="hm" class="nav-link">Home</a></li>
            <li><a href="products" class="nav-link">Products</a></li>
            <li><a href="login" class="nav-link">Login</a></li>
            <li><a href="HowCanImprove" class="nav-link"> How We Can Improve / Feedback </a></li>
            <li><a href="fqa" class="nav-link"> FQA</a>
          </ul>
        </nav>
        <h1>Wine & Liquor Store</h1>
      </header>
        <h1>Login Form</h1>
    <div class="container1">
        <form action="/login" method="post" >
        <div class="form-control">
            <input placeholder="Name" name="name" type="text">
        </div>
            <br>
        <div class="form-control">
            <input placeholder="Password" name="password" type="password">
        </div>
            <br>
    
            <input class="btn" type="submit">
         <h3 >Dont have a account ?</h3>
        <a class="text" href="/signup">Create a new account</a>
        </form>
    
    </div>
        
    </body>
    </html>


    `;
}

module.exports = generateLoginPage;