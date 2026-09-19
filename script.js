const btn1 = document.querySelector(".start");
const btn2 = document.querySelector(".stop");
const btn3 = document.querySelector(".reset");

const display = document.querySelector(".display");

let hours = 0;
let minutes = 0;
let seconds = 0;

let timer;


function startTimer() {

    console.log("Timer Started...");

    timer = setInterval(() => {

        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        display.innerText =
            String(hours).padStart(2, "0") + ":" +
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0");

    }, 1000);
}


function stopTimer() {

    clearInterval(timer);
}


function resetTimer() {

    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    display.innerText = "00:00:00";
}


btn1.addEventListener("click", startTimer);
btn2.addEventListener("click", stopTimer);
btn3.addEventListener("click", resetTimer);