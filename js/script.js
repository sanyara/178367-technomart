function initMap(){map=new google.maps.Map(document.getElementById("map"),{center:{lat:59.9387,lng:30.3166},zoom:16,scrollwheel:!1});new google.maps.Marker({position:{lat:59.9386,lng:30.323},map:map,title:"Technomart"})}function openForm(){function a(a){link[a].addEventListener("click",function(b){b.preventDefault(),popup[a].classList.add("modal-content-show"),storage?(nameField.value=storage,mailField.focus()):nameField.focus()}),close[a].addEventListener("click",function(b){b.preventDefault(),popup[a].classList.remove("modal-content-show"),popup[a].classList.remove("modal-error")}),window.addEventListener("keydown",function(b){27===b.keyCode&&popup[a].classList.contains("modal-content-show")&&(popup[a].classList.remove("modal-content-show"),popup[a].classList.remove("modal-error"))}),feedbackForm.addEventListener("submit",function(b){nameField.value&&mailField.value?localStorage.setItem("name",nameField.value):(b.preventDefault(),console.log("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438 \u043f\u043e\u0447\u0442\u0443"),popup[a].classList.remove("modal-error"),popup[a].offsetWidth=popup[a].offsetWidth,popup[a].classList.add("modal-error"))})}for(var b=0;2>b;b++)a(b)}var map,link=document.querySelectorAll(".open-popup-btn"),popup=document.querySelectorAll(".modal-popup"),close=document.querySelectorAll(".close-window-btn"),overlay=document.querySelector(".popup-overlay"),nameField=document.getElementById("feedback-name-field"),mailField=document.getElementById("feedback-mail-field"),messageField=document.getElementById("feedback-message-field"),feedbackForm=document.querySelector(".modal-content-form"),placeholders=document.querySelectorAll(".feedback-form-placeholder"),storage=localStorage.getItem("name"),buyBtn=document.querySelectorAll(".btn-buy"),popupCart=document.querySelector(".modal-cart-popup"),closeCartBtn=document.querySelector(".close-cart-message"),resumeBuyBtn=document.querySelector(".resume-buy-btn"),makeOrderBtn=document.querySelector(".make-order-btn");nameField&&(nameField.placeholder="\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044c\u0442\u0435\u0441\u044c, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430"),mailField&&(mailField.placeholder="\u0414\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u043e\u0442\u0432\u0435\u0442\u0430"),messageField&&(messageField.placeholder="\u0412 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u0435"),feedbackForm&&openForm();for(var i=0;i<buyBtn.length;i++)buyBtn[i].addEventListener("click",function(a){a.preventDefault(),popupCart.classList.add("modal-content-show")}),closeCartBtn.addEventListener("click",function(){event.preventDefault(),popupCart.classList.remove("modal-content-show")}),resumeBuyBtn.addEventListener("click",function(){event.preventDefault(),popupCart.classList.remove("modal-content-show")}),makeOrderBtn.addEventListener("click",function(){event.preventDefault(),popupCart.classList.remove("modal-content-show")});