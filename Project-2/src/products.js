function generateProductsPage() {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Products - Wine & Liquor Store</title>
    <link rel="stylesheet" href="css/Pstyle.css">
</head>

<body>
    <header>
        <nav class="minimal-nav">
            <ul class="navbar">
                <li><a href="hm" class="nav-link">Home</a></li>
                <li><a href="products" class="nav-link">Products</a></li>
                <li><a href="login" class="nav-link">Login</a></li>
                <li><a href="fqa" class="nav-link">FQA</a></li>
            </ul>
        </nav>
        <h1>Products - Wine & Liquor Store</h1>
    </header>
    <main>
        <section class="inventory">
            <h2>Explore Our Inventory</h2>
            <div class="inventory-grid">
                <div class="inventory-item">
                    <a href="wine"><img
                            src="https://www.stettyncellar.co.za/wp-content/uploads/2024/01/promo-21.png"
                            alt="Wine"></a>
                    <p>Wines</p>
                </div>
                <div class="inventory-item">
                    <a href="rum"><img
                            src="https://www.finewineandgoodspirits.com/ccstore/v1/images/?source=/file/v7191917997686942028/products/000005409_1001442_F1.jpg&height=475&width=475"
                            alt="Rum"></a>
                    <p>Rum</p>
                </div>
                <div class="inventory-item">
                    <a href="scotch"><img
                            src="https://crownwineandspirits.com/cdn/shop/products/glenfiddich-scotch-glenfiddich-18-year-single-malt-scotch-whisky-750ml-31515746238557.jpg?v=1664303964"
                            alt="Scotch"></a>
                    <p>Scotch</p>
                </div>
                <div class="inventory-item">
                    <a href="Whiskey"><img
                            src="https://crownwineandspirits.com/cdn/shop/products/johnnie-walker-scotch-johnnie-walker-black-label-blended-scotch-whisky-750ml-31515738865757.jpg?v=1664303798&width=900"
                            alt="Whiskey"></a>
                    <p>Whiskey</p>
                </div>
                <div class="inventory-item">
                    <a href="vodka"><img
                            src="https://www.finewineandgoodspirits.com/ccstore/v1/images/?source=/file/v6521856860642915980/products/000005722_1006780_F1.jpg&height=475&width=475"
                            alt="Vodka"></a>
                    <p>Vodka</p>
                </div>
                <div class="inventory-item">
                    <a href="gin"><img
                            src="https://crownwineandspirits.com/cdn/shop/products/bombay-gin-bombay-sapphire-gin-750ml-31515633942621.jpg?v=1664302236"
                            alt="Gin"></a>
                    <p>Gin</p>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Wine & Liquor Store</p>
    </footer>
</body>

</html>
    `;
}   
module.exports = generateProductsPage;