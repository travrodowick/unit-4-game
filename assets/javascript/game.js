$(document).ready(function(){
console.log('ready!');

// declare variables
var currentGuess = 0;
// target randomly generated between 19 - 120
var targetNum = 0;
var wins = 0;
var loses = 0;
var directions = ['play this game if you aint lame'];
// crystal values randomly generated between 1 - 12
var redCrystal = 0
var blueCrystal = 0
var yellowCrystal = 0
var greenCrystal = 0

//define functions
    //generate target number
    function getTargetNum(min, max) {
        min = Math.ceil(19);
        max = Math.floor(120);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
      }

    



//closing $(document).ready(function(){})    
})