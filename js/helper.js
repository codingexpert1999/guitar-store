const computeSalePercentage = (price, newPrice) => parseInt(Math.floor(((price - newPrice) / price) * 100))

const getProductById = (id) => products.find(product => product.id === id)

const getCategoryById = (id) => categories.find(category => category.id === id)

const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

const getTotalCartPrice = () => cart.reduce((acc, cartItem) => {
    let price = cartItem.newPrice > 0 ? cartItem.newPrice : cartItem.price;

    return acc + cartItem.quantity * price;
}, 0)

const setProductListeners = () => {
    document.querySelectorAll("button").forEach(button => {
        let productId = parseInt(button.parentNode.id.split("-")[1])

        let addToCart = button.querySelector(".add-to-cart")

        addToCart.addEventListener("click", () => {
            cart.push({...getProductById(productId), quantity: 1})

            localStorage.setItem("cart", JSON.stringify(cart))
            
            addToCart.classList.add("hidden")
            removeFromCart.classList.remove("hidden")

            setCartItemsInNavbar();
        })

        let removeFromCart = button.querySelector(".remove-from-cart")

        removeFromCart.addEventListener("click", () => {
            cart = cart.filter(product => product.id !== productId);

            if(cart.length === 0){
                localStorage.removeItem("cart")
            }else{
                localStorage.setItem("cart", JSON.stringify(cart))
            }
            
            addToCart.classList.remove("hidden")
            removeFromCart.classList.add("hidden")

            setCartItemsInNavbar();
        })
    })
}

const filterProducts = (priceFilter) => {
    switch(priceFilter){
        case "ascending":
            filteredProducts = products.filter(
                product => {
                    let productInFilteredBrands
                    = brandsToFilterBy.find(brand => brand.id === product.brand_id) ? true : false

                    let productInFitleredCategories 
                        = categoriesToFilterBy.find(category => category.id === product.category_id) ? true : false

                    return productInFilteredBrands && productInFitleredCategories
                }).sort((a, b) => a.price - b.price)
            break;
        case "descending":
            filteredProducts = products.filter(
                product => {
                    let productInFilteredBrands
                    = brandsToFilterBy.find(brand => brand.id === product.brand_id) ? true : false

                    let productInFitleredCategories 
                        = categoriesToFilterBy.find(category => category.id === product.category_id) ? true : false

                    return productInFilteredBrands && productInFitleredCategories
                }).sort((a, b) => b.price - a.price)
            break;
        case "30-200":
            filteredProducts = products.filter(
                product => {
                    let productInFilteredBrands
                    = brandsToFilterBy.find(brand => brand.id === product.brand_id) ? true : false

                    let productInFitleredCategories 
                        = categoriesToFilterBy.find(category => category.id === product.category_id) ? true : false

                    return productInFilteredBrands && productInFitleredCategories && product.price >= 30 && product.price <= 200
                })
            break;
        case "200-500":
            filteredProducts = products.filter(
                product => {
                    let productInFilteredBrands
                    = brandsToFilterBy.find(brand => brand.id === product.brand_id) ? true : false

                    let productInFitleredCategories 
                        = categoriesToFilterBy.find(category => category.id === product.category_id) ? true : false

                    return productInFilteredBrands && productInFitleredCategories && product.price > 200 && product.price <= 500
                })
            break;
        case "+500":
            filteredProducts = products.filter(
                product => {
                    let productInFilteredBrands
                    = brandsToFilterBy.find(brand => brand.id === product.brand_id) ? true : false

                    let productInFitleredCategories 
                        = categoriesToFilterBy.find(category => category.id === product.category_id) ? true : false

                    return productInFilteredBrands && productInFitleredCategories && product.price > 500
                })
            break;
        default:
            break;
    }
}

const changeBrandsToFilter = (brand) => () => {
    let brandAlreadyInFilteredBrands = brandsToFilterBy.find(b => b.title === brand) ? true : false

    if(brandAlreadyInFilteredBrands){
        brandsToFilterBy = brandsToFilterBy.filter(b => b.title !== brand)
    }else{
        let brandToAdd = brands.find(b => b.title === brand)

        brandsToFilterBy.push(brandToAdd)
    }

    filterProducts(currentPriceFilter);
}

const changeCategoriesToFilter = (category) => () => {
    let categoryAlreadyInFilteredCategories = categoriesToFilterBy.find(c => c.title === category) ? true : false

    if(categoryAlreadyInFilteredCategories){
        categoriesToFilterBy = categoriesToFilterBy.filter(c => c.title !== category)
    }else{
        let categoryToAdd = categories.find(c => c.title === category)

        categoriesToFilterBy.push(categoryToAdd)
    }

    filterProducts(currentPriceFilter);
}

const callbacks = {
    "ascending": () => {
        currentPriceFilter = "ascending";

        filterProducts(currentPriceFilter)
    },
    "descending": () => {
        currentPriceFilter = "descending";

        filterProducts(currentPriceFilter)
    },
    "30-200": () => {
        currentPriceFilter = "30-200";

        filterProducts(currentPriceFilter)
    },
    "200-500": () => {
        currentPriceFilter = "200-500";

        filterProducts(currentPriceFilter)
    },
    "+500": () => {
        currentPriceFilter = "+500";

        filterProducts(currentPriceFilter)
    }
}

brands.forEach(brand => {
    callbacks[brand.title] = changeBrandsToFilter(brand.title)
})

categories.forEach(category => {
    callbacks[category.title.toLocaleLowerCase().split(" ").join("-")] = changeCategoriesToFilter(category.title)
})