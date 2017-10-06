$(document).ready(function(){
  
    $('.parallax').parallax();
    
    $(".button-collapse").sideNav();
  

  
  });
  
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
  
$(window).on("scroll", function() {
    if($(window).scrollTop() > $(window).height() ) {
        $("#navigation").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("#navigation").removeClass("active");
    }
});
