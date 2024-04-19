"use strict";

const container = document.querySelector(".container");
const btnPlayEl = document.querySelector(".btn_again");
const btnChckEl = document.querySelector(".check-btn");
const hideNumEl = document.querySelector(".hide_num");
const msgEl = document.querySelector(".message");
const inputEl = document.querySelector(".input-number");
const highScoreEl = document.querySelector(".high_score");
const avg_guess = document.querySelector(".avg_guess");

//random 1 to 20
let secretNum = Math.trunc(Math.random() * 20 + 1);
console.log(secretNum);
let guess = 0;
let totalRound = 1;
let guessCount = 0;
let totalCount = 0;

document.addEventListener("DOMContentLoaded", function () {
  const btnChckEl = document.querySelector(".check-btn");
  const inputEl = document.getElementById("input-number");
  const msgEl = document.querySelector(".result-box");
  const guessCountEl = document.querySelector(".guess-count h2:last-of-type");
  const outOfWordsEl = document.querySelector(".out-of-words");

  btnChckEl.addEventListener("click", () => {
    if (btnChckEl.innerText === "Next Round") {
      //new round
      totalRound++;
      secretNum = Math.floor(Math.random() * 20 + 1);
      console.log(secretNum);
      guessCount = 0;
      inputEl.value = "";
      guessCountEl.textContent = "Guess: " + guessCount;
      msgEl.textContent = "Start Guessing";
      btnChckEl.innerText = "Check";
      outOfWordsEl.textContent =
        parseInt(outOfWordsEl.textContent) + 1 + " of 5 words";
    } else if (btnChckEl.innerText === "Go to Leaderboard") {
      window.location.href = "./leaderboard.html";
    } else {
      const guess = Number(inputEl.value);

      if (guess) {
        guessCount++;
        totalCount++;
        guessCountEl.textContent = "Guess: " + guessCount;
        const averageGuess = totalCount / totalRound;
        console.log(totalCount, "/", totalRound);
        document.querySelector(
          ".avg-guess-player-name h2:first-of-type"
        ).textContent = "Average Guess: " + averageGuess.toFixed(2);
        if (guess != secretNum) {
          //wrong guess
          msgEl.textContent = guess > secretNum ? "Too High" : "Too Low";
        } else {
          //success
          if (totalRound === 5) {
            console.log("YES");
            msgEl.textContent = "Finish! See you in Leaderboard";
            btnChckEl.innerText = "Go to Leaderboard";
          } else {
            msgEl.textContent = "Congratulation!! You are right";
            btnChckEl.innerText = "Next Round";
          }
        }
      } else {
        msgEl.textContent = "Please Enter the Number";
      }
    }
  });
});
