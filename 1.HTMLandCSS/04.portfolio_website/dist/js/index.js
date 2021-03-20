const navbar = document.getElementById('main-nav');
let scrolled = false;
  window.onscroll = function () {

      if (window.pageYOffset > 80) {

        navbar.classList.remove('top');
        if (!scrolled) {
          navbar.style.transform = 'translateY(-0px)';
        }
       
      } else {
        navbar.classList.add('top');
        scrolled = false;
      }
};
