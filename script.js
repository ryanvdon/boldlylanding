
$().ready(function() {
//Function to animate letters individually on a delay

//window.addEventListener('load', function(event) {
  

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
  setTimeout(function() {
    $('.tagline').addClass('pulseIn');

  }, 940)

//});


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
  navItemHover($this);
});

$('.nav-item').mouseleave(function() {
  $('.navline').css( 'opacity', 0);
});


$('#nav-what').click(function() {
  $('.gradient-bg').scrollTo(0, 800, {queue:true})
});
  
$('.section-2').scroll(function() {
  $('.gradient-bg').addClass('gradient-scroll-1');
});
  
  

});

function navItemHover(element) {
  var $this = $(element);
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
}


var $animation_elements = $('.glass-pane');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    console.log(element_height);
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $('.gradient-bg').addClass('gradient-scroll-1');
      $('.logo-svg').addClass('small-logo');
      $('.tagline').addClass('fadeOut');
      
      navItemHover('#nav-what');
      setTimeout(function() {
        $('.left-2-3').addClass('pulseIn');
        $('.header-1').addClass('moveUp');
      }, 740);
      setTimeout(function() {
        $('.right-1-3').addClass('pulseInRight');
        $('.slow-in').addClass('pulseIn');
        
        
      }, 3240);
    } else {
      $('.gradient-bg').removeClass('gradient-scroll-1');
      $('.logo-svg').removeClass('small-logo');
      $('.tagline').removeClass('fadeOut');

    }
  });
}

$window.on('resize', check_if_in_view);
$('.gradient-bg').on('scroll', check_if_in_view);
$window.trigger('scroll');



