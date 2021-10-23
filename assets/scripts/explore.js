// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var voiceSelect = document.querySelector('select');
  var synth = window.speechSynthesis;
  var voicesList = [];

  function populateVoices(){
    voicesList = synth.getVoices();
    for(var i = 0; i < voicesList.length ; i++) {
      var option = document.createElement('option');
      option.textContent = voicesList[i].name + ' (' + voicesList[i].lang + ')';
  
      if(voicesList[i].default) {
        option.textContent += ' -- DEFAULT';
      }
      voiceSelect.appendChild(option);
    }

  }
  populateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  // When play button is clicked
  document.querySelector('button').addEventListener("click", function() {
    playSpeech();
  });
}

function playSpeech() {
  var text = document.querySelector('textarea');
  var selector = document.querySelector('select');
  if (!text || selector.value == "select") {
    return;
  }

  var image = document.querySelector('img');
  image.src = "assets/images/smiling-open.png";

  //set voice
  var synth = window.speechSynthesis;
  var text = document.querySelector('textarea');
  var speakNow = new SpeechSynthesisUtterance(text.value);
  speakNow.addEventListener('end', function() {
    image.src = "assets/images/smiling.png";
  });
  var selector = document.querySelector('select');

  console.log(selector.value);

  var listOfVoices = synth.getVoices();
  for(var i = 0; i < listOfVoices.length ; i++) {
    if (selector.value.includes(listOfVoices[i].name)) {
      speakNow.voice = listOfVoices[i];
    }
  }
  synth.speak(speakNow);
}