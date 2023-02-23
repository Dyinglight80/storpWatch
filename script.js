"use strict";

let [milliseconds, seconds, minuets, hours] = [0, 0, 0, 0];

let int = null;

const timeRef = document.querySelector(".timerDisplay");
const startBtn = document.getElementById(".startTimer");
const pauseBtn = document.getElementById(".pauseTimer");
const stopBtn = document.getElementById(".stopTimer");

document.getElementById("startTimer").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(dispalyTimer, 10);
});

document.getElementById("pauseTimer").addEventListener("click", () => {
  clearInterval(int);
});

document.getElementById("resetTimer").addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minuets, hours] = [0, 0, 0, 0];
  timeRef.innerHTML = "00 : 00 : 00 : 000";
});

function dispalyTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if ((seconds = 60)) {
      seconds = 0;
      minuets++;
      if (minuets == 60) {
        minuets = 0;
        hours++;
      }
    }
  }
}
