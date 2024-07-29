function shuffle(array) {     
    for (let i = array.length - 1; i > 0; --i) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let words = ["environmentalist", "banana", "knowlegable"];
shuffle(words);
let displayWord = words[0];
let checkWord =  words[0];

function hideLetters() {
    for (let i = 0; i < displayWord.length; ++i) {
        displayWord = setCharAt(displayWord, i, "_");
    }
    displaysWord();
}

function displaysWord() {
    document.getElementById("wordToDisplay").innerHTML = displayWord + " " + 
    displayWord.length + " letters";
}

function setCharAt(str, index, chr) {
    if (index > str.length-1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}

window.addEventListener('load', function() {
   hideLetters();
}, false);

let life = 7;
let lettersLeft = displayWord.length;

function checkLetter() {
    let letter = document.getElementById("enterLetter").value;
    let letterGuessed = 0;       
    for (let i = 0; i < checkWord.length; ++i) {
        if (letter === checkWord[i]) {
            displayWord = setCharAt(displayWord, i, letter);
            ++letterGuessed;
            --lettersLeft;
        }
    }
    if (letterGuessed === 0) {
        --life;
        displayLivesLeft();
    }    
    if (life <= 0) {
        document.getElementById("finalMessage").innerHTML = "You LOST!";
    } else if (lettersLeft === 0) {
        document.getElementById("finalMessage").innerHTML = "You WON!";
    }
    displaysWord();
    document.getElementById("enterLetter").value = "";
}

function displayLivesLeft() {
    document.getElementById("finalMessage").innerHTML = `You only have ${life} 
        lives left`;
}