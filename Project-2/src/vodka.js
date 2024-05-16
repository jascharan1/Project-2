function generateVodkaPage() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Vodka - Wine & Liquor Store</title>
        <link rel="stylesheet" href="css/WineStyle.css">
        <script defer src="wine.js"></script>
    </head>
    
    <body>
        <header>
            <nav class="minimal-nav">
                <ul class="navbar">
                    <li><a href="hm" class="nav-link">Home</a></li>
                    <li><a href="wine" class="nav-link">Wines</a></li>
                    <li><a href="rum" class="nav-link">Rum</a></li>
                    <li><a href="scotch" class="nav-link">Scotch</a></li>
                    <li><a href="Whiskey" class="nav-link">Whiskey</a></li>
                    <li><a href="vodka" class="nav-link active">Vodka</a></li>
                    <li><a href="gin.html" class="nav-link">Gin</a></li>
                </ul>
            </nav>
            <h1>Explore Our Fine Selection of Vodka</h1>
        </header>
    
        <main>
            <div class="product-container">
                <div class="product">
                    <div class="product-image">
                        <img src="images/vodka1.webp" alt="Grey Goose Vodka">
                    </div>
                    <h3>Grey Goose Vodka</h3>
                    <p>Price: $45.00</p>
                    <button class="add-to-cart" data-product="Grey Goose Vodka" data-price="45.00">Add to Cart</button>
                </div>
                <div class="product">
                    <div class="product-image">
                        <img src="images/vodka2.avif" alt="Absolut Vodka">
                    </div>
                    <h3>Absolut Vodka</h3>
                    <p>Price: $25.00</p>
                    <button class="add-to-cart" data-product="Absolut Vodka" data-price="25.00">Add to Cart</button>
                </div>
                <div class="product">
                    <div class="product-image">
                        <img src="images/vodka3.webp" alt="Belvedere Vodka">
                    </div>
                    <h3>Belvedere Vodka</h3>
                    <p>Price: $38.00</p>
                    <button class="add-to-cart" data-product="Belvedere Vodka" data-price="38.00">Add to Cart</button>
                </div>
                <div class="product">
                    <div class="product-image">
                        <img src="images/vodka4.png" alt="Smirnoff No. 21">
                    </div>
                    <h3>Smirnoff No. 21</h3>
                    <p>Price: $18.00</p>
                    <button class="add-to-cart" data-product="Smirnoff No. 21" data-price="18.00">Add to Cart</button>
                </div>
                <div class="product">
                    <div class="product-image">
                        <img src="images/vodka5.png" alt="Stolichnaya Vodka">
                    </div>
                    <h3>Stolichnaya Vodka</h3>
                    <p>Price: $20.00</p>
                    <button class="add-to-cart" data-product="Stolichnaya Vodka" data-price="20.00">Add to Cart</button>
                </div>
                <div class="product">
                    <div class="product-image">
                        <img src="images/vodka6.webp" alt="Ketel One Vodka">
                    </div>
                    <h3>Ketel One Vodka</h3>
                    <p>Price: $30.00</p>
                    <button class="add-to-cart" data-product="Ketel One Vodka" data-price="30.00">Add to Cart</button>
                </div>
            </div>
        </main>
    
        <footer>
            <p>&copy; 2024 Wine & Liquor Store</p>
        </footer>
    </body>
    <div class="cart">
        <h2>Shopping Cart</h2>
        <ul id="cart-items"></ul>
        <div class="cart-footer">
            <p>Total: $<span id="total-price">0</span></p>
            <button id="checkout-button">Checkout</button>
        </div>
    </div>
    
    <div id="checkout-modal" class="modal">
        <div class="modal-content">
            <span id="close-modal" class="close">&times;</span>
            <h2>Checkout Form</h2>
            <form id="checkout-form" action="https://docs.google.com/forms/d/e/your-google-form-id/formResponse"
                method="POST">
                <label for="customer-name">Name:</label>
                <input type="text" id="customer-name" name="entry.your-name-field-id" placeholder="Enter your name">
                <label for="customer-address">Address:</label>
                <input type="text" id="customer-address" name="entry.your-address-field-id"
                    placeholder="Enter your address">
                <label for="billing-address">Billing Address:</label>
                <input type="text" id="billing-address" name="entry.your-billing-address-field-id"
                    placeholder="Enter your billing address">
                <label for="customer-email">Email:</label>
                <input type="email" id="customer-email" name="entry.your-email-field-id" placeholder="Enter your email">
                <h3>Payment Details</h3>
                <label for="payment-card">Card Number:</label>
                <input type="text" id="payment-card" placeholder="1234-5678-9012-3456">
                <label for="payment-expiry">Expiry Date:</label>
                <input type="month" id="payment-expiry">
                <label for="payment-cvv">CVV:</label>
                <input type="text" id="payment-cvv" placeholder="123">
                <button id="submit-order">Pay Now</button>
            </form>
        </div>
    </div>
    </main>
    
    <footer>
        <p>&copy; 2024 Wine & Liquor Store</p>
    </footer>
    </body>
    
    </html>



    `;
}   
module.exports = generateVodkaPage;