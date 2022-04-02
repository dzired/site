const music = ["music/audio.mp3", "music/audio2.mp3", "music/audio3.mp3", "music/audio4.mp3", "music/audio5.mp3", "music/audio6.mp3", "music/audio7.mp3", "music/audio8.mp3"]
var audio = new Audio(music[Math.floor(Math.random() * music.length)]);
  audio.volume = 0.05;
  audio.loop = true
document.onclick = function() {
  audio.play();
}
