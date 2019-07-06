$(document).ready(function(){

// GLOBAL VARIABLES
//========================================================================
    var currentScore = 0;
// target = randomly generated between 19 - 120
    var targetNum = 0;
    var wins = 0;
    var loses = 0;
    var directions = ['play this game if you aint lame'];
    var crystals;
//FUNCTION
//=========================================================================
    //generate target number between 
    function getTargetNum() {
        targetNum = Math.floor(Math.random() * 102) + 19;
        console.log (targetNum);
    }

    //generate 1 - 12 values for crystals
      function crystalGenerator() {
            return {
                crystals = {
                    red: {
                        points:  Math.floor(Math.random() * 12) + 1,
                        immageURL:  
                    },
                    blue: {
                        points:  Math.floor(Math.random() * 12) + 1,
                        immageURL:
                    },
                    yellow: {
                        points:  Math.floor(Math.random() * 12) + 1,
                        immageURL:
                    },
                    green: {
                        points:  Math.floor(Math.random() * 12) + 1,
                        immageURL:
                    },
                }
            }
        };

    //reset game
    function gameReset () {
        $('#crystal-count').text('Current Score:  ' + currentScore);
        crystalGenerator();
       //$('#crystal-container')//notsureyet
        getTargetNum();
        $('#targetNumber').text(targetNum);
    };

    //update game stats
    function winnerLoser () {
        if (userScore === targetNum) {
            alert('Winner Winner Chicken Dinner!!!');
            gameReset();
            wins++;
            $('#winCounter').text('Wins:  ' + wins);
        }
        if (userScore > targetNum) {
            alert ('Bust!! How does it feel to lose, punk?');
            gameReset();
            loses++;
            $('lossCounter').text('Losses:  ' + loses);
        }
    }

    //update current score
    function updateScore () {
        var updatedScore = [currentScore += updatedScore]
        $('crystal-count').text('Current Score:  ' + updatedScore)
    };



    //Testing / Debugging
    console.log('ready!');
    getTargetNum();
    //crystalGenerator();
    console.log (crystals)
    console.log (currentScore);


//MAIN PROCESS
//=====================================================================

    //register crystal clicks
    $('#redCrystalTag').on('click', function(event) {
        console.log (crystal)
        updateScore()
        winnerLoser()
    }); 
    $('#blueCrystalTag').on('click', function(event) {
        console.log (crystal)
        updateScore()
        winnerLoser()
    }); 
    $('#greenCrystalTag').on('click', function(event) {
        console.log (crystal)
        updateScore()
        winnerLoser()
    }); 
    $('#yellowCrystalTag').on('click', function(event) {
        console.log (crystal)
        updateScore()
        winnerLoser()
    }); 
//closing $(document).ready(function(){})    
})
