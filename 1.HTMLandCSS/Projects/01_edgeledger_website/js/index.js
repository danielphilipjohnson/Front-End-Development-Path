const navbar = document.getElementById('navbar');
let scrolled = false;


  // detect browser resize  to fix transparency issues 
  var displayWindowSize  = function(){
    var w = document.documentElement.clientWidth;
    return w;
  }

  window.addEventListener("resize", displayWindowSize);

  window.onscroll = function () {
    if (displayWindowSize() >= 779){
      if (window.pageYOffset > 100) {
        navbar.classList.remove('top');
        if (!scrolled) {
          navbar.style.transform = 'translateY(-70px)';
        }
        setTimeout(function () {
          navbar.style.transform = 'translateY(0)';
          scrolled = true;
        }, 200);
      } else {
        navbar.classList.add('top');
        scrolled = false;
      }
  }
  else {
        navbar.classList.add('top');
        scrolled = false;
  }
};



// Smooth Scrolling
$('#navbar a, .btn').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});