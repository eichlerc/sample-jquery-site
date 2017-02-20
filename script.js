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
//   $( 'li' ).hover(function() {
//   $(this).toggleClass('transparent');
//
//   });
//
//
// $('.boo').hide();
//   $('li').click(function(){
//   $(this).toggleClass('color');
//   $('span').toggleClass('.boo');
//   $( 'span' ).toggle( 'slow');
//   });


$('a').on('click', function(){
  $(this).text('Clicked!');
});

$('li').on('mouseenter', function(){
  $(this).toggleClass('transparent');
})
.on('mouseleave', function(){
  $(this).toggleClass('transparent');
})
.on('click', function(event){
  var a = event.target.children;

  $(a).css('color', 'green');
  $(this).toggleClass('color');
})

;





} ); // overall wrapping function is selecting document and converting to Jquery
