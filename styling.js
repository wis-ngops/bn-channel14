$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  margin:4,
  loop:true,
  autoWidth:true,
  nav:true,
  autoplayTimeout:4000,
  dots:true,
  navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"]
})

