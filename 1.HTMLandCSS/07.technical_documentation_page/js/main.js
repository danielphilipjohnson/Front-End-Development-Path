function hamburgerButton() {
  var x = document.getElementById("navbar");
  console.log(x)
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}