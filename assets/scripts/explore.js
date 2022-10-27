// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  // TODO
  populateVoiceList();
  speak();
}

function populateVoiceList() {
  const select = document.getElementById("voice-select");
  const synth = window.speechSynthesis;

  synth.onvoiceschanged = () => {
    const voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.value = voices[i].lang;
      option.innerHTML = voices[i].lang;
      select.appendChild(option);
    }
  };
}

function speak() {
  var lang;
  const synth = window.speechSynthesis;

  document
    .getElementById("voice-select")
    .addEventListener("change", function () {
      lang = document.getElementById("voice-select").value;
    });

  document.querySelector("button").addEventListener("click", async function () {
    // get text in box
    var text = document.getElementById("text-to-speak").value;

    // speak using lang and whatever is in the text
    const utterThis = new SpeechSynthesisUtterance(text);
    // change language
    utterThis.lang = lang;
    synth.speak(utterThis);
    document.querySelector("img").src = "assets/images/smiling-open.png";
    utterThis.addEventListener("end", (event) => {
      document.querySelector("img").src = "assets/images/smiling.png";
    });
  });
}
