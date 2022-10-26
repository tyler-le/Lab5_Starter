// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  // TODO

  change_image();
  play_sound();
  volume_control();
}

function change_image() {
  document.getElementById("horn-select").addEventListener("change", (event) => {
    var val = document.getElementById("horn-select").value;
    document.querySelector("img").src = `assets/images/${val}.svg`;
  });
}

function play_sound() {
  const jsConfetti = new JSConfetti();

  document.querySelector("button").addEventListener("click", (event) => {
    var val = document.getElementById("horn-select").value;
    if (val != "select") {
      document.querySelector("audio").src = `assets/audio/${val}.mp3`;
      document.querySelector("audio").play();
      if (val == "party-horn") {
        jsConfetti.addConfetti();
      }
    }
  });
}

function volume_control() {
  var volume_level = "";
  document
    .getElementById("volume-controls")
    .addEventListener("input", (event) => {
      var val = document.getElementById("volume").value;

      if (val == 0) {
        volume_level = "volume-level-0";
      } else if (val >= 1 && val < 33) {
        volume_level = "volume-level-1";
      } else if (val >= 33 && val < 66) {
        volume_level = "volume-level-2";
      } else {
        volume_level = "volume-level-3";
      }
      document
        .getElementById("volume-controls")
        .querySelector("img").src = `assets/icons/${volume_level}.svg`;
      document.querySelector("audio").volume = val / 100;
    });
}
