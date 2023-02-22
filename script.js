"use strict";

const [milliseconds, seconds, minuets, hours] = [0, 0, 0, 0];
const timeRef = document.querySelector(".timerDisplay");
const startBtn = document.getElementById(".startTimer");
const pauseBtn = document.getElementById(".pauseTimer");
const stopBtn = document.getElementById(".stopTimer");

let int = null;

startBtn.addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displaytimer, 10);
});
