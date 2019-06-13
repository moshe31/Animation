 


// Open Modal and Carousel on ImageHover with TimeSet
document.getElementById("demo").onmouseover = function() {mouseOver()};
document.getElementById("demo").onmouseout = function() {mouseOut()};
document.getElementById("open-modal").onmouseout = function() {mouseOut()};
document.getElementById("open-modal").onmouseout = function() {mouseOut()};
document.getElementById("open-pop-up").onmouseout = function() {mouseOut()};
document.getElementById("open-pop-up").onmouseout = function() {mouseOut()};
var a;
var b;
var c;
var d;
var e;
function mouseOver() {
	a= window.setTimeout(function(){
		document.getElementById("demo").classList.add("border-left");
	}, 1100);

	b=	window.setTimeout(function(){
		document.getElementById("demo").classList.add("border-right");
	}, 1600);
	c=	window.setTimeout(function(){
		document.getElementById("demo").classList.add("border-all");
	}, 2300);
	d=window.setTimeout(function(){
		document.getElementById("open-modal").classList.add("modal");
	}, 3100);
	e=window.setTimeout(function(){
		document.getElementById("open-pop-up").classList.add("pop-up");
	}, 3100);
} 


// Destroying SetTime Session on MouseOut
function mouseOut() {

	document.getElementById("demo").classList.remove("border-left");
	document.getElementById("demo").classList.remove("border-right");	
	document.getElementById("demo").classList.remove("border-all");
	clearTimeout(a);
	clearTimeout(b);
	clearTimeout(c);
	clearTimeout(d);
	clearTimeout(e);
}


// For Carousel
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
	if (n > slides.length) {slideIndex = 1}    
		if (n < 1) {slideIndex = slides.length}
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";  
			}
			slides[slideIndex-1].style.display = "block";  
		}


// For Opening Modal and Carousel on Image Click
function ImageClick() {
	var modal = document.getElementById("open-modal").classList.add("modal");
	var popup = document.getElementById("open-pop-up").classList.add("pop-up");
	if (modal.style.display === "none") {
		modal.style.display = "block";
		popup.style.display = "block";
	} else {
		modal.style.display = "none";
		popup.style.display = "none";
	}
}


// For Closing Modal and Popup on modal click only
function ModalClick() {
	var elementmodal = document.getElementById("open-modal");
	elementmodal.classList.remove("modal");
	var elementpopup = document.getElementById("open-pop-up");
	elementpopup.classList.remove("pop-up");
}

function Close() {
	var elementmodal = document.getElementById("open-modal");
	elementmodal.classList.remove("modal");
	var elementpopup = document.getElementById("open-pop-up");
	elementpopup.classList.remove("pop-up");
}