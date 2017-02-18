$(document).ready( function(){

// $('img').attr('src', 'img/cat2.jpg'); // changes photo
  $('img').hide(); // this hides the kitty

  $('#butTest').click(function(){ // When the button is clicked the image shows
  $( 'img' ).toggle( 'slow');
  });

$('h1').click(function(){
$('h1').toggleClass('special');
});

$('#kitty').click(function(){
$('#kitty').toggleClass('kitty');
});

  // NAV
  $( 'li' ).hover(function() {
  $(this).toggleClass('transparent');

  });


$('.boo').hide();
  $('li').click(function(){
  $(this).toggleClass('color');
  $('span').toggleClass('.boo');
  $( 'span' ).toggle( 'slow');
  });



} ); // overall wrapping function is selecting document and converting to Jquery
