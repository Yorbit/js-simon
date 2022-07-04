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
