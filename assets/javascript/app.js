var audio = new Audio("audio.mp3");
  audio.volume = 0.1;
audio.loop = true
document.onclick = function() {
  audio.play();
}
