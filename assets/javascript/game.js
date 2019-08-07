var animals = ["wombat","rhino","cheetah","tiger","koala"]
var wins = 0
var loses = 0

var animal = animals[Math.floor(Math.random() * animals.length)];

var answerArray = [];
  for (var i = 0; i < animal.length; i++){
    answerArray[i] = "_"
  }

var remainingLetters = animal.length;