const toast = document.querySelector(".toast");
const toastTimer = document.querySelector(".toast-timer");
const closeToast = document.querySelector(".close-toast")

const showToast = () => {
    let width = 100;
    
    if(document.body.getClientRects()[0].width > 340){
        toast.style.right = "5%";
    }
    
    let myInterval = setInterval(() => {
        width--;
    
        toastTimer.style.width = `${width}%`
    
        if(width === 0){
            stopTimer();
        }
    }, 50);
    
    function stopTimer(){
        toast.classList.add("hidden");
        localStorage.removeItem("show-toast")
        clearInterval(myInterval);
    }
    
    closeToast.addEventListener("click", () => {
        stopTimer();
    })
}

if(localStorage.getItem("show-toast")){
    showToast()
}else{
    toast.classList.add("hidden");
}
