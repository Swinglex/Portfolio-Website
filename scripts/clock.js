/*
This clock was pretty simple to make, simple accumulators and working with them. had to look up documentation for
some of the syntax tho. 
*/


let minutes = 0;
let seconds = 0;

    function Counter() {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
        let fMin = minutes.toString().padStart(2, '0');
        let fSec = seconds.toString().padStart(2, '0');

        document.getElementById('clock').innerText = `${fMin}:${fSec}`;
    }
//https://developer.mozilla.org/en-US/docs/Web/API/setInterval
setInterval(Counter, 1000);

Counter();