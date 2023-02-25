"use strict";

let [milliseconds, seconds, minuets, hours] = [0, 0, 0, 0];
let int = null;

const timerRef = document.querySelector(".timerDisplay");
const startBtn = document.getElementById("startTimer");
const pauseBtn = document.getElementById("pauseTimer");
const stopBtn = document.getElementById("resetTimer");
const splitTime = document.getElementsByClassName("timesSplit");

document.getElementById("startTimer").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(dispalyTimer, 10);
});

document.getElementById("pauseTimer").addEventListener("click", () => {
  clearInterval(int);
  // lot times to "split times' each time paused is i
  function spTimes() {
    const t = timerRef.textContent;
    console.log(t);
  }

  // function to print to splittimes contentbox
});

document.getElementById("resetTimer").addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minuets, hours] = [0, 0, 0, 0];
  timerRef.innerHTML = ` 00 : 00 : 00 : 00`;
});

function dispalyTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minuets++;
      if (minuets == 60) {
        minuets = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minuets < 10 ? "0" + minuets : minuets;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;
  timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

console.log(timerRef.textContent);
