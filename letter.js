//constructor to hold individual letters and boolean for if it's been guessed
function Letter(singleLetter, isGuessed, ) {

    this.singleLetter = singleLetter;
    this.isGuessed = isGuessed;

}

//function to return either the hidden letter or a placeholder based on the boolean
Letter.prototype.returnLetter = function() {
    if (this.isGuessed) {
        return(this.singleLetter)
    } else {
        return("_ ")
    }
}

//function to check if a character matches the hidden letter and changes boolean accordingly
Letter.prototype.checkLetter = function(char) {
    // console.log("checkLetter check", this.singleLetter);
    
    if (char == this.singleLetter) {
        this.isGuessed = true;
        // console.log("You guessed the letter")
    } else {
        this.isGuessed = false;
        // console.log("Sorry, try again")
    }
}

//exports file
module.exports = Letter

var a = new Letter("a", false)

console.log("returning a", a.returnLetter());

a.checkLetter("f");

console.log("return letter after failed check", a.returnLetter());

a.checkLetter("a");

console.log("returning after correct check", a.returnLetter());
