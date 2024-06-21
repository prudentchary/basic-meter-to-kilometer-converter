(function(){
    'use strict';


    document.getElementById('convert').addEventListener('submit', function(event){
        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);
        const  conversion = (distance * 1.609344).toFixed(3);
        const answer = document.getElementById('answer');


        if ((distance)){
            
        
        answer.innerHTML = `<h2> the ${distance} miles is converted to ${conversion} kilometer</h2>`
        }
        else {
            
            answer.innerHTML = "<h2> please provide a Number</h2>"
        }

    })
})()