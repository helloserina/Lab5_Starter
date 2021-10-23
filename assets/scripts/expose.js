// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // Sets the image
  document.querySelector('select').addEventListener('input',  function() {
    changeHorn(document.querySelector('select'));
  });

  // When play button is clicked
  document.querySelector('button').addEventListener("click", function() {
    playAudio();
  });
}

function changeHorn(hornImage) {
  const image = document.querySelector('img');
  const audio = document.querySelector('audio');
  if (hornImage.value == "car-horn") {
    image.src = "assets/images/car-horn.svg";
    audio.src = "assets/audio/car-horn.mp3";
  } 
  else if (hornImage.value == "party-horn") {
    image.src = "assets/images/party-horn.svg";
    audio.src = "assets/audio/party-horn.mp3";
  } 
  else if (hornImage.value == "air-horn") {
    image.src = "assets/images/air-horn.svg";
    audio.src = "assets/audio/air-horn.mp3";
  } 
  else {
    image.src = "assets/images/no-image.png";
  }
}

function playAudio() {
  const audio = document.querySelector('audio');
  const volume = document.getElementById("volume-controls").querySelector('input');

  //no playing anything if no audio set
  if (!audio) {
    return;
  }

  //confetti here
  if (document.querySelector('select').value == "party-horn" && volume.value > 0) {
    // confetti here
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
      emojiSize: 100,
      confettiRadius: 6,
      confettiNumber: 100,
    });
  } 
  
  audio.volume = volume.value/volume.max;
  audio.play();
}