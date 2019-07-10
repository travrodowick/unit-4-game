$(document).ready(function(){

// GLOBAL VARIABLES
//========================================================================
    var currentScore = 0;
    var updatedScore = 0;
    var targetNum = 0;
    var wins = 0;
    var loses = 0;
    var directions = ['play this game if you aint lame'];
//FUNCTION
//=========================================================================
    //generate target number between 
    function getTargetNum() {
        targetNum = Math.floor(Math.random() * 102) + 19;
        console.log ('target', targetNum);
    }

    //generate 1 - 12 values for crystals
      function crystalValueGen () {
        value = Math.floor(Math.random() * 12) + 1;
        return value;
      }

      function crystalGenerator() {
                    red = crystalValueGen()
                    console.log('red', red)
                    blue = crystalValueGen()
                    console.log ('blue', blue)
                    yellow = crystalValueGen()
                    console.log('yellow', yellow)
                    green = crystalValueGen()
                    console.log('green', green)
        };

    //reset game
    function gameReset () {
        currentScore = 0
        updatedScore = 0
        $('#crystal-count').text('Current Score:  ' + currentScore);
        crystalGenerator();
        getTargetNum();
        $('#targetNumber').text('Target Number:  ' + targetNum);
    };

    //update game stats
    function winnerLoser () {
        if (updatedScore === targetNum) {
            alert('Winner Winner Chicken Dinner!!!');
            gameReset();
            wins++;
            $('#winCounter').text('Wins:  ' + wins);
        }
        if (updatedScore > targetNum) {
            alert ('Bust!! How does it feel to lose, punk?');
            gameReset();
            loses++;
            $('#lossCounter').text('Losses:  ' + loses);
        }
    }

    //Testing / Debugging
    console.log('ready!');
    console.log (currentScore);


//MAIN PROCESS
//=====================================================================
    //start
    gameReset()

    //register crystal clicks
    $('#redCrystalTag').on('click', function() {
        updatedScore += red;
        $('#crystal-count').text('Current Score:  ' + updatedScore);
        winnerLoser();
    }); 
    $('#blueCrystalTag').on('click', function() {
        updatedScore += blue;
        $('#crystal-count').text('Current Score:  ' + updatedScore);
        winnerLoser();
    }); 
    $('#greenCrystalTag').on('click', function() {
        updatedScore += green;
        $('#crystal-count').text('Current Score:  ' + updatedScore);
        winnerLoser();
    }); 
    $('#yellowCrystalTag').on('click', function() {
        updatedScore += yellow;
        $('#crystal-count').text('Current Score:  ' + updatedScore);
        winnerLoser();
    }); 


//closing $(document).ready(function(){})    
})
