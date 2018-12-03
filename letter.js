function Letter(singleLetter, isGuessed, ) {

    this.singleLetter = singleLetter;
    this.isGuessed = isGuessed;

}

Letter.prototype.returnLetter = function() {
    if (this.isGuessed) {
        return(this.singleLetter)
    } else {
        return("_")
    }
}

Letter.prototype.checkLetter = function(char) {
    if (char === this.singleLetter) {
        this.isGuessed = true;
        console.log("You guessed the letter")
    } else {
        this.isGuessed = false;
        console.log("Sorry, try again")
    }
}

module.exports = Letter

// var a = new Letter("a", false)

// a.returnLetter();

// a.checkLetter("f");

// a.returnLetter();

// a.checkLetter("a");

// a.returnLetter();
