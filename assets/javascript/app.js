var audio = new Audio("audio.mp3");
  audio.volume = 0.2;
document.onclick = function() {
  audio.play();
}