// DOM Elements
const productElement = document.querySelector(".product");

// Variables
const productId = parseInt(window.location.search.split("=")[1])

// Functions
const initializeProductDetails = () => {
    productElement.innerHTML = "";

    const product = getProductById(productId);

    let salePercentage = `<div class="sale flex-center-row">-${computeSalePercentage(product.price, product.newPrice)}%</div>`

    if(product){
        productElement.innerHTML += `
            <div class="product-image flex-center-row">
                <img src="${product.image}" alt="Guitar">

                ${product.newPrice > 0 ? salePercentage : ""}
            </div>

            <div class="product-details" id="product-${product.id}">
                <h1>${product.name}</h1>

                <h5>${getCategoryById(product.category_id).title}</h5>

                <p>${product.description}</p>

                <strong>
                    ${product.newPrice > 0 ? "<span class='prev-price'>"+product.newPrice+"$</span>" : ""} ${product.price}$
                </strong>

                <button>
                    Add To Cart
                    <span class="bg-success flex-center-row add-to-cart ${isInCart(product.id) ? "hidden" : ""}">Add Item</span>
                    <span class="bg-danger flex-center-row remove-from-cart ${!isInCart(product.id) ? "hidden" : ""}">Remove Item</span>
                </button>
            </div>
        `
    }else{
        productElement.innerHTML += "<p class='no-result'>Product Not Found</p>"
    }
    
    setProductListeners();
}

initializeProductDetails()