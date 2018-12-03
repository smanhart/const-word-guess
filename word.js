var Letter = require("./letter.js");
var letter = new Letter();
var letterArray = [];


function Word(randWord) {

    this.randWord = randWord;
    var letters = randWord.split("");
    letters.forEach(function(element) {
        var letter = new Letter(element, false)
        letterArray.push(letter);
    });

    console.log(letterArray);
    
    
}

Word.prototype.toString = function() {
    var returnedArray = [];
    
    letterArray.forEach(function(){
        var string = letter.returnLetter()
        returnedArray.push(string);
    })

    var currentString = returnedArray.join("")
    console.log(currentString);
}

var word = new Word("hello");

word.toString()

