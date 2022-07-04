const gameTimer = document.getElementById('timer');
const gameNumbers = document.getElementById('numbers');
const gameRandomNumber = [];
const userNumber = [];
let randomNumber = '';
let correct = '';

function numberRequest() {
    for (let i = 0; i < 5; i++) {
        userNumber[i] = prompt("INSERISCI UN NUMERO");
        console.log(userNumber[i], userNumber);
        if (gameRandomNumber.includes(userNumber[i])) {
            correct++;
            console.log(correct)
        }
    }
}

function alertCorrect() {
    alert("HAI INDOVINATO!!: " + correct);
}

for (let i = 0; i < 5; i++) {
    do {
        randomNumber = Math.floor((Math.random() * 100) + 1);
        console.log(randomNumber);
    } while (gameRandomNumber.includes(randomNumber));
    gameRandomNumber.push(randomNumber);
    console.log(gameRandomNumber);
}

gameNumbers.innerText = gameRandomNumber;

let count = 30;

gameTimer.innerText = count;

const timer = setInterval(() => {
    gameTimer.innerText = --count;

    if (count == 0) {
        clearInterval(timer);
        gameNumbers.classList.add('d-none');
    }
}, 100);


