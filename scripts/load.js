if(!sessionStorage.getItem('siteAlreadyLoaded')) {
    const bodyTag = document.querySelectorAll('body');
        
    let animation = anime({
        targets: bodyTag,
        scale: [
            {value: 0, easing: 'easeOutQuad', duration: 0},
            {value: 1, easing: 'easeInQuad', duration: 2000}
          ],
            delay: anime.stagger(-100, {grid: [1, 10], from: 'center'})
        })
        
        
    }

sessionStorage.setItem('siteAlreadyLoaded', 'true')