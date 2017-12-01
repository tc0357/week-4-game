$(document).ready(function() {
    
        crystals = [];
    
        var counter = 0;
        var wins = 0;
        var losses = 0;
        $('#wins').text(wins);
        $('#losses').text(losses);
        
        newCrystals();
        newGame();
    
    
        function newGame() {
    
            counter = 0;
            $('#yourScore').text(counter);
    
            function randomIntFromInterval(min,max){
                   return Math.floor(Math.random()*(max-min+1)+min);
                }
    
            var numberToGuess = randomIntFromInterval(19,120);
    
            
    
    
           
               
                $('#yourScore').text(counter);
    
                if (counter == numberToGuess){
                  wins ++;
                  $('#wins').text(wins);
                  console.log(wins)
                  
                    
                } else if ( counter > numberToGuess){
                    losses ++;
                    $('#losses').text(losses);
                    console.log(losses)
                    
                }
            });
        }
    
    });