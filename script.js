$().ready(function() {
//Function to animate letters individually on a delay

window.addEventListener('load', function(event) {
  console.log('Hi');

  setTimeout(function() {
    $('#logo-b').addClass('pulseIn');
  }, 340);
  setTimeout(function() {
    $('#logo-o').addClass('pulseIn');
  }, 440);
  setTimeout(function() {
    $('#logo-l-1').addClass('pulseIn');
  }, 540);
  setTimeout(function() {
    $('#logo-d').addClass('pulseIn');
  }, 640);
  setTimeout(function() {
    $('#logo-l-2').addClass('pulseIn');
  }, 740);
  setTimeout(function() {
    $('#logo-y').addClass('pulseIn');
  }, 840);

});


$('.nav').hover(function() {
  var $end = $('#nav-2');
  var endWidth = $end.width();
  $('.navline').css( 'width', endWidth);
  var endOffset = $end.offset();
  var posString = endOffset.left + 'px';
  $('.navline').css( 'left', posString);

});

$('.nav-item').hover(function() {
  var $this = $(this);
  var offset = $this.offset();
  var width = $this.width();
  var height = $this.height();

  var $end = $('#nav-2');
  var endOffset = $end.offset();
  var endWidth = $end.width();
  var endHeight = $end.height();

  var centerX = offset.left + width / 2;
  var endCenterX = endOffset.left + endWidth / 2;
  var widthDifference = width - endWidth;

  var distance = centerX - endCenterX - widthDifference/2;
  var translateString = "translateX(" + distance + 'px)';
  var posString = endOffset + 'px';


  $('.navline').css( 'right', posString);
  $('.navline').css( 'transform', translateString);
  $('.navline').css( 'width', width);
  $('.navline').css( 'opacity', 1);
});

$('.nav-item').mouseleave(function() {
  $('.navline').css( 'opacity', 0);
});


$('#nav-academy').click(function() {
  $('.section-1').addClass('academy-header');
  $('.logo-svg').addClass('small-logo');
});

});