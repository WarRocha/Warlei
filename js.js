 jQuery(document).ready(function($) {
            $(".scroll").click(function(event){        
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500 );});
            
  
  (function($, sr) {

     alturaImg = $('.imgTopo').height(); // altura da imagem, vai servir para sabermos a altura que o scroll tem de andar até a navbar ficar fixa
     $(window).on('scroll', function() { // cada vez de que fizer scroll o que está dentro desta função vai acontecer
          if($(window).scrollTop() >= alturaImg) { // se o que percorremos com o scroll for maior ou igual à altura da imagem adicionamos esta classe à navbar
              $('#navbar').addClass('fixed-menu');
          }
          else {
              $('#navbar').removeClass('fixed-menu');
          }
     });


    function menu() {
            var  pegarMenu = document.getElementById("menu");
            if (pegarMenu.className === "nav") {
            pegarMenu.className += " responsivo";
            } else {
            pegarMenu.className = "nav";
            }}
