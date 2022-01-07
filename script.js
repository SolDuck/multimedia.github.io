$(document).ready(function () {
  $(window).scrollY(function () {
    if (scrollY > 20) {
      $('.navbar').addClass('sticky');
    }
  });
});
