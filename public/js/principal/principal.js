$(document).ready(function(){
  $('.customer-logos').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
});
function whats(){
  window.open('https://api.whatsapp.com/send?phone=5511970765606&text=Ol%C3%A1%20!%20Gostaria%20de%20Mais%20Informa%C3%A7%C3%B5es.','_blank');

}
