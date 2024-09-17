const imageElement = document.getElementById('image');

anime({
  targets: imageElement,
  rotate: '360deg', 
  duration: 1000, 
  easing: 'easeOutQuart',
  loop: false,
});
