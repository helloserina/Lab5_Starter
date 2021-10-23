// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Sets the image
  document.querySelector('select').addEventListener('input',  function() {
    changeHorn(document.querySelector('select'));
  });

  // When play button is clicked
  document.querySelector('button').addEventListener("click", function() {
    playAudio();
  });

  //to change volume
  document.querySelector('input').addEventListener('change',function(){
    changeVolume(document.getElementById("volume-controls"));
  });
  //console.log(volImg);
}

function changeVolume(audio){
  //var volRange = audio.querySelector('value');
  var volImg = audio.querySelector('img');
  var volSound = audio.querySelector('audio');
  var range = audio.querySelector('input');
  if(range.value == 0){
    volImg.src="assets/icons/volume-level-0.svg"; 
    volImg.alt="Volume level 0";
    //console.log(volImg);
  } 
  else if(range.value >= 1 && range.value < 32) {
    volImg.src="assets/icons/volume-level-1.svg"; 
    volImg.alt="Volume level 1";
    //console.log(volImg);
  }
  else if(range.value >= 33 && range.value < 67) {
    volImg.src="assets/icons/volume-level-2.svg";
    volImg.alt="Volume level 2";
  }
  else{
    volImg.src="assets/icons/volume-level-3.svg"; 
    volImg.alt="Volume level 3";
  }
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