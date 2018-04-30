// Mobile View Slide out menu
var navbarButton = document.querySelector(".mobile-nav");
var navMenu = document.querySelector(".mobile-navbar");
var topHam = 
document.querySelector(".top");
var middleHam =
document.querySelector(".middle");
var bottomHam =
document.querySelector(".bottom");

// Open Mobile Nav Bar
function openNav() {
  navbarButton.addEventListener("click", function() {
  topHam.classList.toggle("rotatedown"),
  middleHam.classList.toggle("active")
  bottomHam.classList.toggle("rotateup"),  
  navbarButton.classList.toggle("show"),
  navMenu.classList.toggle("appear")
  });
}

// Categories Dropdown

var cate = document.querySelector(".category__title")
var dropButton = 
document.querySelector(".dropdown-icon");
var dropdownList = document.querySelector(".dropdown-list");

function dropCate() {
  cate.addEventListener("click", function(){
    dropButton.classList.toggle("dropdown-open"),
    dropdownList.classList.toggle("dropdown-active")
  });
  // if(!dropdownList.hasClass('show')) {
  //   menu.classList.add('show');
  //   menu.classList.remove('hide');
  //   arrow.classList.add('open');
  //   arrow.classList.remove('close');
  // }
  // else {
  //   menu.classList.remove('show');
  //   menu.classList.add('hide');
  //   arrow.classList.remove('open');
  //   arrow.classList.add('close');
  // }
}

openNav();
dropCate();




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