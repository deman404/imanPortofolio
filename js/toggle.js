//we call the btn
const btnToggle = document.getElementById("btntoggle")
const mobileNav = document.getElementById("mobileNav")

//variable to check open
let isOpen = false //msdod


// code to toggle

btnToggle.addEventListener("click", function(){
    if (!isOpen){
        mobileNav.style.display = "block"
        isOpen = true
    }else if (isOpen){
        mobileNav.style.display = "none"
        isOpen = false
    }
})
