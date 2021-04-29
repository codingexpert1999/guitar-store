// DOM Elements
const filtersElement = document.querySelector(".filters");
const productsGrid = document.querySelector(".products-grid");

// Variables
const categoryId = parseInt(window.location.search.split("=")[1])

if(categoryId){
    categoriesToFilterBy = categories.filter(category => category.id === categoryId)
    callbacks[currentPriceFilter]();
}

// Functions
const displayFilteredProducts = () => {
    productsGrid.innerHTML = "";

    if(filteredProducts.length > 0){
        filteredProducts.forEach(product => {
            let salePercentage = `<div class="sale flex-center-row">-${computeSalePercentage(product.price, product.newPrice)}%</div>`
            let oldPrice = `<span class="prev-price">${product.price}$</span>`

            productsGrid.innerHTML += `
                <div class="product flex-center-column" id="product-${product.id}">
                    <img src="${product.image}" alt="Guitar">

                    <h4>
                        <a href="/product.html?productId=${product.id}">${product.name}</a>
                    </h4>

                    <strong>${product.newPrice > 0 ? oldPrice : ""} ${product.price}$</strong>

                    <button>
                        Add To Cart
                        <span class="bg-success flex-center-row add-to-cart ${isInCart(product.id) ? "hidden" : ""}">Add Item</span>
                        <span class="bg-danger flex-center-row remove-from-cart ${!isInCart(product.id) ? "hidden" : ""}">Remove Item</span>
                    </button>

                    ${product.newPrice > 0 ? salePercentage : ""}
                </div>
            `
        })

        setProductListeners();
    }else{
        productsGrid.innerHTML = "<p>No Results Found</p>"
    }
}

const initializeFilters = () => {
    filtersElement.innerHTML = "";

    filters.forEach((filter) => {
        let div = document.createElement("div");
        div.classList.add("filter");
        div.id = filter.id;

        div.innerHTML += `
            <h4>${filter.title}</h4>
            
        `

        let checkboxBox = document.createElement("div")
        checkboxBox.classList.add("checkbox-box");

        filter.filterValues.forEach((value, i) => {
            checkboxBox.innerHTML += `
                <div class="checkbox-group">
                    <label>${value.label}</label>
                    <input 
                        type="checkbox" 
                        data-type="${filter.title === "Prices" ? "price" : filter.title === "Brands" ? "brand" : "category"}" 
                        name="${value.inputName}"
                        ${
                            filter.title === "Brands" || 
                            (filter.title === "Categories" && !categoryId) || 
                            (filter.title === "Prices" && i === 0) || 
                            (categoryId && filter.title === "Categories" && value.id && value.id === categoryId) ?
                            "checked" : ""
                        }
                    >
                </div>
            `
        })

        div.appendChild(checkboxBox)

        filtersElement.appendChild(div)
    })

    document.querySelectorAll(".checkbox-group input").forEach(input => {
        input.addEventListener("change", () => {
            let filterType = input.dataset.type;
            let checked = input.checked;
            let name = input.name;

            if(filterType === "price"){
                if(!checked){
                    input.checked = true;
                }else{
                    document.querySelectorAll("#priceFilter input").forEach(i => {
                        i.checked = false;
                    })

                    input.checked = true
                }

                currentPriceFilter = name;
            }

            callbacks[name]();

            displayFilteredProducts();
        })
    })
}

initializeFilters();
displayFilteredProducts();