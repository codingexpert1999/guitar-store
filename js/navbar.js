// DOM Elements
const hamburger = document.querySelector(".hamburger");
const sidenav = document.querySelector(".sidenav");
const cartItemSpans = document.querySelectorAll(".nav li span")
const navItems = document.querySelectorAll(".nav li a");

// Variables
let navIsOpen = false;

// Functions
const setCartItemsInNavbar = () => {
    cartItemSpans.forEach(span => {
        if(cart.length > 0){
            if(span.classList.contains("hidden")){
                span.classList.remove("hidden");
            }

            let totalItems = cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
            
            span.innerText = `${totalItems}`;
        }else{
            if(!span.classList.contains("hidden")){
                span.classList.add("hidden");
            }
        }
    })
}

// Listeners
hamburger.addEventListener("click", () => {
    if(navIsOpen){
        hamburger.classList.remove("close")
        sidenav.style.right = "-200px"
        navIsOpen = false
    }else{
        hamburger.classList.add("close")
        sidenav.style.right = "0px"
        navIsOpen = true
    }
})

navItems.forEach(navItem => {
    navItem.addEventListener("click", () => {
        if(localStorage.getItem("show-toast")){
            localStorage.removeItem("show-toast")
        }
    })
})

setCartItemsInNavbar();