window.onscroll = function() {navbarScroll()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function navbarScroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
