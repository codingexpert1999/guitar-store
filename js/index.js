// DOM Elements
const categoriesGrid = document.getElementById("categories")
const bestSellersGrid = document.getElementById("best-sellers")
const salesGrid = document.getElementById("sales")

// Functions
const initializeCategories = () => {
    categoriesGrid.innerHTML = "";

    categories.forEach(category => {
        categoriesGrid.innerHTML += `
            <a href="/products.html?categoryId=${category.id}">
                <div class="product flex-center-column" id="category-${category.id}">
                    <img src="${category.image}" alt="Guitar">

                    <h4>${category.title}</h4>
                </div>
            </a>
        `
    })
}

const initializeBestSellers = () => {
    let bestSellers = [...products].sort((a, b) => b.sold - a.sold).filter((_, i) => i < 4)

    bestSellersGrid.innerHTML = ""

    bestSellers.forEach(product => {
        bestSellersGrid.innerHTML += `
            <div class="product flex-center-column" id="bestSeller-${product.id}">
                <img src="${product.image}" alt="Guitar">

                <h4>
                    <a href="/product.html?productId=${product.id}">${product.name}</a>
                </h4>

                <strong>${product.price}$</strong>

                <button>
                    Add To Cart
                    <span class="bg-success flex-center-row add-to-cart ${isInCart(product.id) ? "hidden" : ""}">Add Item</span>
                    <span class="bg-danger flex-center-row remove-from-cart ${!isInCart(product.id) ? "hidden" : ""}">Remove Item</span>
                </button>
            </div>
        `
    })
}

const initializeSales = () => {
    let sales = [...products].filter(product => product.newPrice !== 0).filter((_, i) => i < 4)

    salesGrid.innerHTML = ""

    sales.forEach(product => {
        salesGrid.innerHTML += `
            <div class="product flex-center-column" id="sale-${product.id}">
                <img src="${product.image}" alt="Guitar">

                <h4>
                    <a href="/product.html?productId=${product.id}">${product.name}</a>
                </h4>

                <strong><span class="prev-price">${product.price}$</span> ${product.price}$</strong>

                <button>
                    Add To Cart
                    <span class="bg-success flex-center-row add-to-cart ${isInCart(product.id) ? "hidden" : ""}">Add Item</span>
                    <span class="bg-danger flex-center-row remove-from-cart ${!isInCart(product.id) ? "hidden" : ""}">Remove Item</span>
                </button>

                <div class="sale flex-center-row">-${computeSalePercentage(product.price, product.newPrice)}%</div>
            </div>
        `
    })

    setProductListeners()
}

initializeCategories()
initializeBestSellers()
initializeSales()

if(localStorage.getItem("show-toast")){
    console.log(orders);
}