function generateHowCanImprove() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
        crossorigin="anonymous" />
      <link rel="stylesheet" href="/css/h.css" />
      <title>Wine & Liquor Store</title>
    </head>
    
    <body>
      <header>
        <nav class="minimal-nav">
          <ul class="navbar">
            <li><a href="hm" class="nav-link">Home</a></li>
            <li><a href="products" class="nav-link">Products</a></li>
            <li><a href="login" class="nav-link">Login</a></li>
            <li><a href="HowCanImprove" class="nav-link">How We Can Improve / Feedback</a></li>
            <li><a href="fqa" class="nav-link">FAQ</a></li>
          </ul>
        </nav>
        <h1>Wine & Liquor Store</h1>
      </header>
    <div class = "body1">
      <button class="add" id="add">
      <i class="fas fa-plus"></i> Add note
    </button>
</div>




<div class = "body2">
<div id="panel" class="panel-container">
<strong>How satisfied are you with our <br /> customer support performance?</strong>
<div class="ratings-container">
  <div class="rating">
    <img src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png" alt="">
    <small>Unhappy</small>
  </div>

  <div class="rating">
    <img src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png" alt=""/>
    <small>Neutral</small>
  </div>

  <div class="rating active">
    <img src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png" alt=""/>
    <small>Satisfied</small>
  </div>
</div>
<button class="btn" id="send">Send Review</button>
</div>
</div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/1.2.2/marked.min.js"></script>
    <script src="script.js"></script>
      <script src="h.js" defer></script>
    </body>
    
    </html>

    `;
} 


module.exports = generateHowCanImprove;