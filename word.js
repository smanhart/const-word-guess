var Letter = require("./letter.js");
var letter = new Letter();
var letterArray = [];
var returnedArray = [];

//constructor to split the randomly chosen work into an array of objects of the characters and booleans
function Word(randWord) {

    // this.letterArray = new Array()
    this.randWord = randWord;
    var letters = randWord.split("");
    letters.forEach(function(element) {
        var letter = new Letter(element, false)
        letterArray.push(letter);
        
    });
    console.log("letter array test", letterArray[0].singleLetter);
    console.log("letterArray", letterArray);
    
    
    
}

//function to take the returned hidden characters or placeholders and turn them into a string
Word.prototype.toString = function() {
    returnedArray = [];

    letterArray.forEach(function(character){
        var string = character.returnLetter()
        returnedArray.push(string);
    })

    var currentString = returnedArray.join("")
    console.log("current string", currentString);
}

//function to go through letter array objects and check them against the guessed letter, changing the boolean accordingly
Word.prototype.letterGuessed = function(guess) {

    letterArray.forEach(function(character){
        character.checkLetter(guess)        
    })
    console.log("guess",guess);
}

var word = new Word("hello");

word.toString()
word.letterGuessed("l")
console.log("letterArray", letterArray);
word.toString()

