window.onload = function(){


    if(!sessionStorage.getItem('siteAlreadyLoaded')) {
        const bodyTag = document.querySelectorAll('body');
        
        let animation = anime({
            targets: bodyTag,
            scale: [
                {value: 0, easing: 'easeOutSine', duration: -100},
                {value: 1, easing: 'easeInOutQuad', duration: 2000}
              ],
              delay: anime.stagger(0, {grid: [1, 10], from: 'center'})
        })
        
        
    }

    sessionStorage.setItem('siteAlreadyLoaded', 'true')


  

    
   
}