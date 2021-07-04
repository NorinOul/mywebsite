$(document).ready(function() {
  $("#color_mode").on("change", function () {
      colorModePreview(this);
  })
});

function colorModePreview(ele) {
  if($(ele).prop("checked") == true){
      $('body').addClass('dark-preview');
      $('body').removeClass('white-preview');
  }
  else if($(ele).prop("checked") == false){
      $('body').addClass('white-preview');
      $('body').removeClass('dark-preview');
  }
}
anime({
  targets: '.aboutme-image',
  translateX: 700,
  translateY: 40,
  duration: 1800,
  easing: 'easeInOutSine'
});
anime({
  targets: '.aboutme-text',
  translateX: 100,
  translateY: 40,
  direction: 'reverse',
  duration: 1800,
  easing: 'easeInOutSine'
});
anime({
  targets: '.education-text',
  translateX: 500,
  translateY: 40,
  duration: 1800,
  easing: 'easeInOutSine'
});
anime({
  targets: '.education-image',
  translateX: 700,
  translateY: 60,
  direction: 'reverse',
  duration: 1800,
  easing: 'easeInOutSine'
});
anime({
  targets: '.funfacts-text',
  translateX: 100,
  translateY: 40,
  duration: 1800,
  easing: 'easeInOutSine'
});
anime({
  targets: '.funfacts-bar',
  translateX: 200,
  duration: 1800,
  easing: 'easeInOutSine'
});
anime({
  targets: '#guitarist-bar',
  width: '200%', // -> from '28px' to '100%',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
});
anime({
  targets: '#gamer-bar',
  width: '350%', // -> from '28px' to '100%',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
});
anime({
  targets: '.contact',
  translateX: 800,
  translateY: -350,
  duration: 1800,
  easing: 'easeInOutSine'
});
anime({
  targets: '.myresume',
  translateX: 800,
  translateY: -350,
  duration: 1800,
  easing: 'easeInOutSine'
});