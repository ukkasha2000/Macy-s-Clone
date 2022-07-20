(function($) {

	"use strict";

	$('nav .dropdown-hover').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	 });

})(jQuery);


// Background Blur On Hover ON MENU Bae
let mainContent = document.getElementById('main-content');
function BgBlur(){
    mainContent.style.filter="brightness(0.7)";
	mainContent.style.background="rgba(255,255,255,0.7)"
	mainContent.style.zIndex="999";
}
function BgNormal(){
    mainContent.style.background="rgb(255,255,255)";
	mainContent.style.filter="brightness(1)";
}
let dumy = document.querySelectorAll('.nav-link_top');
dumy.forEach(el => el.addEventListener('mouseover', (e) => {e.style = BgBlur()}));
dumy.forEach(el => el.addEventListener('mouseout', (e) => {e.style = BgNormal()}));




// Side Bar Mobile Screen
$(document).ready(function () {
	var trigger = $('.hamburger'),
		overlay = $('.overlay'),
	   isClosed = false;
  
	  trigger.click(function () {
		hamburger_cross();      
	  });
  
	  function hamburger_cross() {
  
		if (isClosed == true) {          
		  overlay.hide();
		  trigger.removeClass('is-open');
		  trigger.addClass('is-closed');
		  isClosed = false;
		} else {   
		  overlay.show();
		  trigger.removeClass('is-closed');
		  trigger.addClass('is-open');
		  isClosed = true;
		}
	}
	
	$('[data-toggle="offcanvas"]').click(function () {
		  $('#wrapper').toggleClass('toggled');
	});  
  });



  // Back To Top Button
  function scrollFunction(){
	let topButton = document.getElementById('button-to-go-on-top-of-page');
	if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250)
	{
		topButton.style.display = 'block';
	}
	else{
		topButton.style.display = 'none';
	}				
  }

  window.onscroll = function() {scrollFunction()};
  


  //Product1 IMAGE Change on Hover Functionality
  const product1Img = document.querySelector('#product1_image');
  let autoPlay1 = false;
  let timer1;
  let check=1;
  const product1Hover = function(){
	if (check===1){
		product1Img.src= "./assets/images/product1-img2.jpg"
		check++;
	}
	else if (check===2){
		product1Img.src= "./assets/images/product1-img3.jpg"
		check++;
	}
	else if (check===3){
		product1Img.src= "./assets/images/product1-img4.jpg"
		check=0;
	}
	else if (check===0){
		product1Img.src= "./assets/images/product1.jpg"
		check++;
	}
  }
  const product1Out = function(){
	product1Img.src= "./assets/images/product1.jpg"
	check=1;
  }

  product1Img.onmouseover 
   = () => {
	autoPlay1 = true;
	if (autoPlay1===true) {
	  timer1 = setInterval(product1Hover,1000);
	}
  }

    product1Img.onmouseout = () => {
	product1Img.src= "./assets/images/product1.jpg"
	check=1;
	seconds=500;
	clearInterval(timer1);
}

let p1c1 = document.querySelector('.colorSwatch-div1')
p1c1.onmouseover = () =>{
	product1Img.src = "./assets/images/product1-img4.jpg"
}
p1c1.onmouseout = () =>{
	product1Img.src = "./assets/images/product1.jpg"
}

let p1c2 = document.querySelector('.colorSwatch-div2')
p1c2.onmouseover = () =>{
	product1Img.src = "./assets/images/product1-img3.jpg"
}
p1c2.onmouseout = () =>{
	product1Img.src = "./assets/images/product1.jpg"
}

let p1c3 = document.querySelector('.colorSwatch-div3')
p1c3.onmouseover = () =>{
	product1Img.src = "./assets/images/product1.jpg"
}
p1c3.onmouseout = () =>{
	product1Img.src = "./assets/images/product1.jpg"
}

let p1c4 = document.querySelector('.colorSwatch-div4')
p1c4.onmouseover = () =>{
	product1Img.src = "./assets/images/product1-img2.jpg"
}
p1c4.onmouseout = () =>{
	product1Img.src = "./assets/images/product1.jpg"
}


// button-to-go-on-top-of-page
document.getElementById('button-to-go-on-top-of-page').addEventListener('click', function(e) {
	e.preventDefault();
	window.scroll({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
});



//Modal Open/Close
var modal1 = document.getElementById("productModal1");
var openModal1 = document.getElementById("product1-img-container");
var closebtn = document.getElementsByClassName("close")[0];


closebtn.onclick = function() {
	modal1.style.display = "none";
}
openModal1.onclick = function() {
	modal1.style.display = "block";
}
window.onclick = function(event) {
	if (event.target == modal1) {
	  modal1.style.display = "none";
	}
}


//   Add To Cart Functionality
let plussign = document.getElementById("add_to_cart_plus");
let minussign = document.getElementById("add_to_cart_minus");
let totalItemsToShow = document.getElementById("add_to_cart_quantity");
let totalItems = 0;
let atc = document.getElementById("add_to_cart_btn");
let itemsInCart = document.getElementById("numberOfItemsInCart");
let deleteButton = document.getElementById("del-btn");
let cartPara = document.getElementById("cart-modal-para1");
let deleteButton2 = document.getElementById("del-btn2");

// Plus Items
plussign.onclick = function() {
	totalItems++;
	totalItemsToShow.innerHTML=totalItems;
}
// Minus Items
minussign.onclick = function() {
	if(totalItems>1){
		totalItems--;
		totalItemsToShow.innerHTML=totalItems;
	}
	
}
//Adding Items To Cart
atc.onclick = function(){
	itemsInCart.innerHTML=totalItems;
	cartPara.innerHTML = "You Have " + totalItems +" Items In Your Cart."
	alert("Items Added to Cart Successfully");
	if(totalItems>=1){
		deleteButton.disabled=false;
		deleteButton2.disabled=false;
	}
	
}
//Deleting Items From Cart
deleteButton.onclick = function(){
	totalItems=0;
	totalItemsToShow.innerHTML=totalItems;
	itemsInCart.innerHTML=totalItems;
	cartPara.innerHTML = "You Have " + totalItems +" Items In Your Cart."
	deleteButton.disabled=true;
	deleteButton2.disabled=true;
	alert("Items Deleted From Cart!!!");
}


//Proceed To Checkout Modal

let cartModal = document.getElementById("cartmodal");
let cartModalDeleteBtn  = document.getElementById("del-btn2");
let cartIcon = document.getElementById("s-cart");
let closebtn2 = document.getElementsByClassName("close2")[0];
let checkoutButton = document.getElementById("proceed_to_checkout_btn");
let checkoutPhone = document.getElementById("checkoutFormPhone");
let checkoutName = document.getElementById("checkoutFormName");
let checkoutAddress = document.getElementById("checkoutFormAddress");
let checkPhoneNumber,checkName,checkAddress;

checkoutName.addEventListener('input', () => {
	checkoutName.setCustomValidity('');
    checkName = checkoutName.checkValidity();
});
checkoutPhone.addEventListener('input', () => {
	checkoutPhone.setCustomValidity('');
    checkPhoneNumber = checkoutPhone.checkValidity();
});
checkoutAddress.addEventListener('input', () => {
	checkoutAddress.setCustomValidity('');
    checkAddress = checkoutAddress.checkValidity();
});

closebtn2.onclick = function() {
	cartModal.style.display = "none";
}
cartIcon.onclick = function() {
	cartModal.style.display = "block";
}
checkoutButton.onclick=function(){
	if(totalItems>=1 && checkName==true && checkPhoneNumber==true && checkAddress==true){
		totalItems=0;
		deleteButton.disabled=true;
		itemsInCart.innerHTML=totalItems;
		totalItemsToShow.innerHTML=totalItems;
		cartPara.innerHTML = "You Have " + totalItems +" Items In Your Cart."
		alert("Congratulations Your Order Has Been Placed!!!");
	}
	else if(totalItems==0 && checkName==true && checkPhoneNumber==true && checkAddress==true){
		alert("Please Enter Items in the Cart");
	}
}
deleteButton2.onclick=function(){
	// if(totalItems>=1){
		totalItems=0;
		deleteButton.disabled=true;
		deleteButton2.disabled=true;
		itemsInCart.innerHTML=totalItems;
		totalItemsToShow.innerHTML=totalItems;
		cartPara.innerHTML = "You Have " + totalItems +" Items In Your Cart."
		alert("Items Deleted From Cart!!!");
	// }
	// else if(totalItems==0){
	// 	alert("No Items in the Cart");
	// }
}