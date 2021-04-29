const cartItems = document.querySelector(".cart-items");
const totalPrice = document.querySelector(".total-price strong");

// Functions
const setTotalPrice = () => {
    totalPrice.innerText = getTotalCartPrice() + "$";
}

const setQuantityListeners = (callback) => {
    document.querySelectorAll(".increment").forEach(span => {
        span.addEventListener("click", () => {
            let cartItemId = span.parentNode.parentNode.id;

            let input = document.querySelector(`#${cartItemId} input`);

            let currentQuantity = parseInt(input.value);

            input.value = currentQuantity + 1;

            cart = cart.map(cartItem => {
                if(cartItem.id === parseInt(cartItemId.split("-")[2])){
                    cartItem.quantity = currentQuantity + 1;
                }

                return cartItem;
            })

            localStorage.setItem("cart", JSON.stringify(cart));

            setTotalPrice();

            setCartItemsInNavbar();
        })
    })

    document.querySelectorAll(".decrement").forEach(span => {
        span.addEventListener("click", () => {
            let cartItemId = span.parentNode.parentNode.id;

            let input = document.querySelector(`#${cartItemId} input`);

            let currentQuantity = parseInt(input.value);

            input.value = currentQuantity - 1;

            let currentCartLength = cart.length

            cart = cart.map(cartItem => {
                if(cartItem.id === parseInt(cartItemId.split("-")[2])){
                    cartItem.quantity = currentQuantity - 1;
                }

                return cartItem;
            }).filter(cartItem => cartItem.quantity > 0);

            localStorage.setItem("cart", JSON.stringify(cart));

            if(cart.length < currentCartLength){
                callback();
            }

            setTotalPrice();

            setCartItemsInNavbar();
        })
    })
}

const setCartItems = () => {
    cartItems.innerHTML = "";

    cartItems.innerHTML += `
        <div class="cart-items-header">
            <span>Item</span>
            <span class="flex-center-row">Quantity</span>
            <span>Total</span>
        </div>  
    `

    if(cart.length > 0){
        cart.forEach((cartItem, i) => {
            let price = cartItem.newPrice > 0 ? cartItem.newPrice : cartItem.price;

            cartItems.innerHTML += `
                <div class="cart-item" id="cart-item-${cartItem.id}">
                    <div class="item">
                        <div class="item-image">
                            <a href="/product.html?productId=${cartItem.id}">
                                <img src="${cartItem.image}" alt="Guitar">
                            </a>
                        </div>

                        <div class="item-info">
                            <h3>
                                <a href="/product.html?productId=${cartItem.id}">${cartItem.name}</a>
                            </h3>

                            <h5>${getCategoryById(cartItem.category_id).title}</h5>

                            <strong>${price}$</strong>
                        </div>
                    </div>

                    <div class="quantity flex-center-row">
                        <span class="decrement">-</span>
                        <input type="number" value="${cartItem.quantity}">
                        <span class="increment">+</span>
                    </div>

                    <div class="total">
                        <strong>${price * cartItem.quantity}$</strong>
                    </div>
                </div>
            `
        })

        setQuantityListeners(setCartItems);
    }else{
        cartItems.innerHTML += "<p>Your shopping cart is empty!</p>"
    }

    setTotalPrice();
}

setCartItems();