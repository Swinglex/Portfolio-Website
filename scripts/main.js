const nav = document.querySelector('nav');
  
var animation = anime({
    targets: nav, 
    opacity: [0, 1], 
    duration: 2000, 
    easing: 'linear', 
    direction: 'alternate', 
    loop: false
    });   