$(document).ready(function(){
console.log('ready!');

// declare variables
var currentGuess = 0;
// target = randomly generated between 19 - 120
var targetNum = 0;
var wins = 0;
var loses = 0;
var directions = ['play this game if you aint lame'];
// crystal values randomly generated between 1 - 12
var crystalValue = [];
var crystals = {
    redCrystal:0,
    blueCrystal: 0,
    yellowCrystal: 0,
    greenCrystal: 0
};

//define functions
    //generate target number between 
    function getTargetNum() {
        targetNum = Math.floor(Math.random() * 102) + 19;
        console.log(targetNum)
    }

    //generate 1 - 12 values for crystals
    function crystalGenerator() {
        for (var i = 0; i < crystals.length; i++ ){
            crystals[i] = [Math.floor(Math.random() * 12) + 1];
        }
        console.log (crystals)
    };


getTargetNum()
crystalGenerator()

//closing $(document).ready(function(){})    
})