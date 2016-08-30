var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 59.9387, lng: 30.3166},
		zoom: 16,
		scrollwheel: false
	});
  
	var marker = new google.maps.Marker({
		position: {lat: 59.9386, lng: 30.3230},
		map: map,
		title: 'Technomart'
	});
}



var link = document.querySelectorAll(".open-popup-btn");

var popup = document.querySelectorAll(".modal-popup");

var close = document.querySelectorAll(".close-window-btn");

var overlay = document.querySelector(".popup-overlay");

var nameField = document.getElementById("feedback-name-field");

var mailField = document.getElementById("feedback-mail-field");

var messageField = document.getElementById("feedback-message-field");

var feedbackForm = document.querySelector(".modal-content-form");

var placeholders = document.querySelectorAll(".feedback-form-placeholder");

var storage;

var buyBtn = document.querySelectorAll(".btn-buy");

var popupCart = document.querySelector(".modal-cart-popup");

var closeCartBtn = document.querySelector(".close-cart-message");

var resumeBuyBtn = document.querySelector(".resume-buy-btn");

var makeOrderBtn = document.querySelector(".make-order-btn")


if(nameField)nameField.placeholder = "Представьтесь, пожалуйста";
if(mailField)mailField.placeholder = "Для отправки ответа";
if(messageField)messageField.placeholder = "В свободной форме";

function openForm() {
	
	function listenerForI(i) {
	
		link[i].addEventListener("click", function(event){
			event.preventDefault();
			popup[i].classList.add("modal-content-show");
			if(localStorage) {
				storage = localStorage.getItem("name");
				if (storage) {
				  nameField.value = storage;
				  mailField.focus();
				} else {
				  nameField.focus();
				}
				
			}
			
			
		});
		
		close[i].addEventListener("click", function(event){
			event.preventDefault();
			popup[i].classList.remove("modal-content-show");
			popup[i].classList.remove("modal-error");
			
		});
		
		window.addEventListener("keydown", function(event) {
			if(event.keyCode === 27) {
				if(popup[i].classList.contains("modal-content-show")) {
					popup[i].classList.remove("modal-content-show");
					popup[i].classList.remove("modal-error");
				};
			}
		});
		
		feedbackForm.addEventListener("submit", function(event) {
		
			if (!nameField.value || !mailField.value) {
				event.preventDefault();
				console.log("Введите имя и почту");
				popup[i].classList.remove("modal-error");
				popup[i].offsetWidth = popup[i].offsetWidth;
				popup[i].classList.add("modal-error");
			} else {
				localStorage.setItem("name", nameField.value);
			}
		
		});
	}

	for (var i = 0; i < 2; i++) {
		listenerForI(i);
	}
}
if(feedbackForm ) {
	openForm();
}

for(var i = 0; i < buyBtn.length; i++)	{
	buyBtn[i].addEventListener("click", function(event) {
		event.preventDefault();
		popupCart.classList.add("modal-content-show");
	});	
	
	closeCartBtn.addEventListener("click", function(event) {
		event.preventDefault();
		popupCart.classList.remove("modal-content-show");
	});
	resumeBuyBtn.addEventListener("click", function(event) {
		event.preventDefault();
		popupCart.classList.remove("modal-content-show");
	});
	makeOrderBtn.addEventListener("click", function(event) {
		event.preventDefault();
		popupCart.classList.remove("modal-content-show");
		
	});	
}
	


