function hamburgerButton() {
  var x = document.getElementById("subnav");
  console.log(x);
  if (x.style.display === "grid") {
    x.style.display = "none";
  } else {
    x.style.display = "grid";
  }
}

const navbar = document.getElementById("navbar");
let scrolled = false;
window.onscroll = function () {
  if (window.pageYOffset > 50) {
    navbar.classList.remove("top");
    if (!scrolled) {
      navbar.style.top = "0";
    }
  } else {
    navbar.classList.add("top");
    navbar.style.top = "unset";
    scrolled = false;
  }
};
