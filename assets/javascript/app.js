var audio = new Audio("audio.mp3");
  audio.volume = 0.2;
  audio.loop = true;
document.onclick = function() {
  audio.play();
}

