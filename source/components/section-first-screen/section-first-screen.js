module.exports = (function(){
  new WOW().init();

  $('#learnMore').click(function(){
    $.scrollify.move("#project");
  });
  $('#scrollDown').click(function(){
    $.scrollify.move("#about");
  }); 
  

  $('#top-slider').owlCarousel({
    loop:true,
    nav: false,
    dots: false,
    animateOut: 'fadeOut',
    items: 1,
    loop: Infinity,
    autoplay: true,
    responsive:{
      0:{
        items:1
      }      
    }
  })
})();