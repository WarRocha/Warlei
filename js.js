 jQuery(document).ready(function($) {
            $(".scroll").click(function(event){        
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500 );});
            
 
    function menu() {
            var  pegarMenu = document.getElementById("menu");
            if (pegarMenu.className === "nav") {
            pegarMenu.className += " responsivo";
            } else {
            pegarMenu.className = "nav";
            }}
