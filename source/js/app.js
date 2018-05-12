// Mobile View Slide out menu
let navbarButton = document.querySelector(".mobile-nav");
let navMenu = document.querySelector(".mobile-navbar");
let topHam = 
document.querySelector(".top");
let middleHam =
document.querySelector(".middle");
let bottomHam =
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

let dropAcc = document.getElementsByClassName("category__title");

for (var i = 0; i < dropAcc.length; i++) {
    dropAcc[i].addEventListener("click", function() {
      this.classList.toggle("display");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
            this.classList.remove("open");
        } else {
            panel.style.display = "block";
            this.classList.toggle("open");
        }
    });
}    


openNav();