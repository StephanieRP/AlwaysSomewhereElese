// Mobile View Slide out menu
var navbarButton = document.querySelector(".mobile-nav");
var navMenu = document.querySelector(".mobile-navbar");



// function openSideMenu() {
//   document.getElementById('mobile-nav').style.width = '100%';
//   document.body.style.backgroundColor = "rgba(0,146,193.4)";
// }

// function closeSideMenu() {
//   document.getElementById('mobile-nav').style.width = '0';
//   document.body.style.backgroundColor = "rgba(0,146,193,0)";
// }



//// Dropdown for Categories
// var dropdown = document.querySelector('.dropdown-list');
// var dropdownArray = Array.prototype.slice.call(dropdown,0);
// dropdownArray.forEach(function(el){
//   var button = el.querySelector('i.dropdown-icon'),
// 			menu = el.querySelector('.dropdown-list'),
// 			arrow = button.querySelector('i.icon-arrow');

// 	button.onclick = function(event) {
// 		if(!menu.hasClass('dropdown-active')) {
// 			menu.classList.add('dropdown-active');
// 			menu.classList.remove('dropdown-inactive');
// 			arrow.classList.add('dropdown-open');
// 			arrow.classList.remove('dropdown-close');
// 			event.preventDefault();
// 		}
// 		else {
// 			menu.classList.remove('dropdown-active');
// 			menu.classList.add('dropdown-inactive');
// 			arrow.classList.remove('dropdown-open');
// 			arrow.classList.add('dropdown-close');
// 			event.preventDefault();
// 		}
// 	};
// })

// Element.prototype.hasClass = function(className) {
//     return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
// };