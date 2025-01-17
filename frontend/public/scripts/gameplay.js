"use strict";

import { handleCreateScore } from "./score.js";

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
  const guessCountEl = document.querySelector(".guess-count");
  const outOfWordsEl = document.querySelector(".out-of-words");
  const nameInput = document.getElementById("playerName");
  let isAddName = false;

  btnChckEl.addEventListener("click", handleButtonClick);
  inputEl.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleButtonClick();
    }
  });

  function handleButtonClick() {
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
      if (isAddName === false) {
        msgEl.textContent = "Enter your name";
        nameInput.style.display = "block";
        btnChckEl.innerText = "Submit Your Name";
        isAddName = true;
      } else {
        window.location.href = "./leaderboardtemplated.html";
      }
    } else if (btnChckEl.innerText === "Submit Your Name") {
      if (nameInput.value === "") {
        alert("Please enter your name");
      } else {
        msgEl.textContent = "Submitted";
        handleCreateScore(totalCount / totalRound, nameInput.value);
        btnChckEl.innerText = "Go to Leaderboard";
      }
    } else {
      const guess = Number(inputEl.value);

      if (guess) {
        guessCount++;
        totalCount++;
        guessCountEl.textContent = "Guess: " + guessCount;
        const averageGuess = totalCount / totalRound;
        console.log(totalCount, "/", totalRound);
        document.querySelector(
          ".avg-guess-player-name"
        ).textContent = "Average Guess: " + averageGuess.toFixed(2);
        if (guess != secretNum) {
          //wrong guess
          msgEl.textContent = guess > secretNum ? "Too High" : "Too Low";
        } else {
          //success
          if (totalRound === 5) {
            console.log("CREATE?");
            msgEl.textContent = "Correct!";
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
  }

});