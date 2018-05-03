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

var dropAcc = document.getElementsByClassName("category__title");

for (var i = 0; i < dropAcc.length; i++) {
    dropAcc[i].addEventListener("click", function() {
      this.classList.toggle("display");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}    


openNav();