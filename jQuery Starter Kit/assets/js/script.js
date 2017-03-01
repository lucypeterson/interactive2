$('.go').click(function() {
    $('.announcement').toggle();
});
$('.red-circle').mouseenter(function() {
     $('.blue-square').fadeOut();
});

$('.red-circle').mouseleave(function() {
     $('.blue-square').fadeIn();
});
$('.hellow').click(function() {
  $('p').toggle();
});