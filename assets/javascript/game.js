$(document).ready(function(){
console.log('ready!');

// GLOBAL VARIABLES
//========================================================================
    var currentScore = 0;
// target = randomly generated between 19 - 120
    var targetNum = 0;
    var wins = 0;
    var loses = 0;
    var directions = ['play this game if you aint lame'];
//FUNCTIONS
//=========================================================================
    //generate target number between 
    function getTargetNum() {
        targetNum = Math.floor(Math.random() * 102) + 19;
    }

    //generate 1 - 12 values for crystals
    function crystalGenerator() {
        $.each(crystals, function(redCrystal, blueCrystal, greenCrystal, yellowCrystal){
            [Math.floor(Math.random() * 12) + 1];
        })
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

        }
        
    }

    //Testing / Debugging
    console.log (targetNum)
    console.log (crystals);
    console.log (currentGuess);


//MAIN PROCESS
//=======================================================================================



//closing $(document).ready(function(){})    
})