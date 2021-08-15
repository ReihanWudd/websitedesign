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


var fullimagebox = document.getElementById("fullimagebox")
var fullimage = document.getElementById("fullimage")

function openfullimage(pic){
    fullimagebox.style.display = "flex"
    fullimage.src= pic;
}

function closefullimage(){
    fullimagebox.style.display = "none";
}
