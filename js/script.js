const countEl= document.getElementById('count');



function setCookie(c_name,value,exdays){var exdate=new Date();exdate.setDate(exdate.getDate() + exdays);var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());document.cookie=c_name + "=" + c_value;}

function getCookie(c_name){var c_value = document.cookie;var c_start = c_value.indexOf(" " + c_name + "=");if (c_start == -1){c_start = c_value.indexOf(c_name + "=");}if (c_start == -1){c_value = null;}else{c_start = c_value.indexOf("=", c_start) + 1;var c_end = c_value.indexOf(";", c_start);if (c_end == -1){c_end = c_value.length;}c_value = unescape(c_value.substring(c_start,c_end));}return c_value;}

checkSession();

function checkSession(){
   var c = getCookie("visited");
   if (c === "yes") {
     sameVisitCount()
   } else {
     updateVisitCount()
   }
   setCookie("visited", "yes", 365); // expire in 1 year; or use null to never expire
}


function updateVisitCount() {
  fetch('https://api.countapi.xyz/update/mehf.tech/cunt/?amount=1')
  .then(res => res.json())
  .then(res => {
    countEl.innerHTML = res.value;
  });
}

function sameVisitCount() {
  fetch('https://api.countapi.xyz/update/mehf.tech/cunt/?amount=2')
  .then(res => res.json())
  .then(res => {
    countEl.innerHTML = res.value;
  });
}

const music = ["music/audio.mp3", "music/audio2.mp3", "music/audio3.mp3", "music/audio4.mp3"]
var audio = new Audio(music[Math.floor(Math.random() * music.length)]);
  audio.volume = 0.05;
  audio.loop = true
document.onclick = function() {
  audio.play();
}
