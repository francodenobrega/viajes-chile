//Agregamos efecto smooth scroll al nav 
$(document).ready(function() {
    //Efecto smooth al hacer click en lista Navbar
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $("html, body").animate({
          scrollTop: $(hash).offset().top - 40
        }, 1200, function() {
  
          window.location.hash = hash;
        });
      }
    });
  });