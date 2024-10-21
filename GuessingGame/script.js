let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hints = document.getElementById("hints");
const attemptsText = document.getElementById("attempts");

submit.addEventListener("click", checkGuess);
function checkGuess(){
    const userValue = Number(guess.value);
    attempts;
    if (userValue === randomNum){
        hints.textContent = "Congratulations, you guessed it!";
    }
    else if (userValue < randomNum){
        hints.textContent = "Too low, try again";
    }
    else{
        hints.textContent = "Too high, try again";
    }
}