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



//slideshow for client testimony

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
