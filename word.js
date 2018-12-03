var Letter = require("./letter.js");
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
    letterArray.forEach(function(){
        var string = letter.returnLetter()
        return string
    })

    console.log(string);
}

var word = new Word("hello");

word.toString()

