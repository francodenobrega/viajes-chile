//Agregamos efecto smooth scroll al nav 
$(document).ready(function() {
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $("html, body").animate({
          scrollTop: $(hash).offset().top - 30
        }, 1190, function() {
  
          window.location.hash = hash;
        });
      }
    });
  });
  