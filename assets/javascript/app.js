var audio = new Audio("audio.mp3");
  audio.volume = 0.1;
document.onclick = function() {
  audio.play();
}
