"use strict";

document.addEventListener("DOMContentLoaded", function() {
const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

document.getElementById("submitPassword").addEventListener("click", function () {
    const password = document.getElementById("passwordInput").value;
    const correctPassword = "Hirono"; // Change this to your actual password
  
    if (password === correctPassword) {
      document.querySelector(".password-container").classList.add("hidden"); // Hide password screen
      document.querySelector(".container").classList.remove("hidden"); // Show main content
    } else {
      alert("Incorrect password! Try again.");
    }
});  

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! ^_^ <3 <br> I love you so much.";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Whyyy",
    "Pleaseeee",
    "Don't do this to me :(",
    "D:<",
    "I'm sad now",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
});