$( "#na_butt" ).on( "click", function( event ) {
    $("nav.show").toggleClass('open');
    $(this).toggleClass('push');
    event.stopPropagation();
  });