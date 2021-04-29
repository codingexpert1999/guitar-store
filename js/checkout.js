if(cart.length === 0){
    window.location.href = "products.html"
}

// DOM Elements
const form = document.querySelector("form");
const cartTotal = document.querySelector("#cart-total span")
const shipping = document.querySelector("#shipping span")
const totalPrice = document.querySelector("#total-price strong")
const homeDeliveryRadio = document.getElementById("home-delivery")
const receiveFromStoreRadio = document.getElementById("receive-from-store")

// Variables
const shippingPrice = 50;

// Functions
const onSubmit = (e) => {
    e.preventDefault();

    let order = {}

    order.firstName = document.getElementById("first-name").value
    order.lastName = document.getElementById("last-name").value
    order.email = document.getElementById("email").value
    order.country = document.getElementById("country").value
    order.address = document.getElementById("address").value
    order.zipcode = document.getElementById("zip-code").value
    order.orderDetails = document.getElementById("order-details").value

    if(homeDeliveryRadio.checked){
        order.delivery = "home delivery"
    }else{
        order.delivery = "receive from store"
    }

    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    localStorage.setItem("show-toast", true);
    cart = []
    localStorage.removeItem("cart");
    window.location.href = "/"
}

const initializePaymentDetails = () => {
    cartTotal.innerText = getTotalCartPrice() + "$"
    shipping.innerText = shippingPrice + "$"

    totalPrice.innerText = getTotalCartPrice() + shippingPrice + "$"
}

initializePaymentDetails()

// Listeners
form.addEventListener("submit", onSubmit);

homeDeliveryRadio.addEventListener("click", () => {
    receiveFromStoreRadio.checked = false

    cartTotal.innerText = getTotalCartPrice() + "$"
    shipping.innerText = shippingPrice + "$"

    totalPrice.innerText = getTotalCartPrice() + shippingPrice + "$"
})

receiveFromStoreRadio.addEventListener("click", () => {
    homeDeliveryRadio.checked = false;

    cartTotal.innerText = getTotalCartPrice() + "$"
    shipping.innerText = "0$"

    totalPrice.innerText = getTotalCartPrice() + "$"
})