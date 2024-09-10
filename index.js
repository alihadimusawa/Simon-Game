$(document).ready(function(){

    var buttonColours = ["red", "blue", "green", "yellow"];

    var randomChosenColour= buttonColours[Math.round((Math.random() * 10)) % 4];

    var gamePattern = [];
    gamePattern.push(randomChosenColour);

    



})

function nextSequence(){
    
    var randomNumber = Math.round((Math.random() * 10)) % 4;
    
}