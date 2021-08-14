var menulist = document.getElementById("menulist");
menulist.style.maxHeight = "0px"

function togglemenu(){
    if(menulist.style.maxHeight == "0px"){
        menulist.style.maxHeight = "190px"
    }
    else{
        menulist.style.maxHeight = "0px"
    }
}


window.onscroll = function() {fungsinav()}
var navbar = document.getElementById("navbar")
var sticky = navbar.offsetTop

function fungsinav(){
    if(window.pageXOffset >= sticky){
        navbar.classList.add("sticky")
    }
    else{
        navbar.classList.remove("sticky")
    }
}
