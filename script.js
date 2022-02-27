const countEl= document.getElementById('count');

function setCookie(c_name,value,exdays){var exdate=new Date();exdate.setDate(exdate.getDate() + exdays);var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());document.cookie=c_name + "=" + c_value;}

function getCookie(c_name){var c_value = document.cookie;var c_start = c_value.indexOf(" " + c_name + "=");if (c_start == -1){c_start = c_value.indexOf(c_name + "=");}if (c_start == -1){c_value = null;}else{c_start = c_value.indexOf("=", c_start) + 1;var c_end = c_value.indexOf(";", c_start);if (c_end == -1){c_end = c_value.length;}c_value = unescape(c_value.substring(c_start,c_end));}return c_value;}



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
  fetch('https://api.countapi.xyz/update/runs-on-tech/views/?amount=1')
  .then(res => res.json())
  .then(res => {
    countEl.innerHTML = res.value;
  });
}

function sameVisitCount() {
  fetch('https://api.countapi.xyz/update/runs-on-tech/views/?amount=2')
  .then(res => res.json())
  .then(res => {
    countEl.innerHTML = res.value;
  });
}

const music = ["audio.mp3", "audio2.mp3", "audio3.mp3", "audio4.mp3"]
var audio = new Audio(music[Math.floor(Math.random() * music.length)]);
  audio.volume = 0.05;
  audio.loop = true
document.onclick = function() {
  audio.play();
}


//Main Function
mainActive = false;

function main() {
    if (mainActive) return;
    mainActive = true;
 
    $("#main").css("opacity", "1");
    $("#widgetContainer").css("opacity", "1");
    $(".hitCount").css("opacity", "1");


    //Border
    borderTop = 0;
    borderRight = 0;
    borderBottom = 0;
    borderLeft = 0;
    function topBorder() {
        let int = setInterval(() => {
            borderTop++;
            if (borderTop <= 100) {
                $("#borderTop").css("width", borderTop+"%");
            } else {
                rightBorder();
                clearInterval(int);
                $("#borderTop").css({"left": "", "right": "0"});
                setTimeout(() => {
                    let int = setInterval(() => {
                        borderTop--;
                        if (borderTop >= 0) {
                            $("#borderTop").css("width", borderTop+"%");
                        } else {
                            $("#borderTop").css({"right": "", "left": "0"});
                            clearInterval(int);
                        }
                    }, 7);
                }, 250);
            }
        }, 7);
    }
    function rightBorder() {
        let int = setInterval(() => {
            borderRight++;
            if (borderRight <= 100) {
                $("#borderRight").css("height", borderRight+"%");
            } else {
                bottomBorder();
                clearInterval(int);
                $("#borderRight").css({"top": "", "bottom": "0"});

                setTimeout(() => {
                    let int = setInterval(() => {
                        borderRight--;
                        if (borderRight >= 0) {
                            $("#borderRight").css("height", borderRight+"%");
                        } else {
                            $("#borderRight").css({"bottom": "", "top": "0"});
                            clearInterval(int);
                        }
                    }, 5);
                }, 450);
            }
        }, 5);
    }
    function bottomBorder() {
        let int = setInterval(() => {
            borderBottom++;
            if (borderBottom <= 100) {
                $("#borderBottom").css("width", borderBottom+"%");
            } else {
                leftBorder();
                clearInterval(int);
                $("#borderBottom").css({"right": "", "left": "0"});

                setTimeout(() => {
                    let int = setInterval(() => {
                        borderBottom--;
                        if (borderBottom >= 0) {
                            $("#borderBottom").css("width", borderBottom+"%");
                        } else {
                            $("#borderBottom").css({"left": "", "right": "0"});
                            clearInterval(int);
                        }
                    }, 7);
                }, 250);
            }
        }, 7);
    }
    function leftBorder() {
        let int = setInterval(() => {
            borderLeft++;
            if (borderLeft <= 100) {
                $("#borderLeft").css("height", borderLeft+"%");
            } else {
                topBorder();
                clearInterval(int);
                $("#borderLeft").css({"bottom": "", "top": "0"});

                setTimeout(() => {
                    let int = setInterval(() => {
                        borderLeft--;
                        if (borderLeft >= 0) {
                            $("#borderLeft").css("height", borderLeft+"%");
                        } else {
                            $("#borderLeft").css({"top": "", "bottom": "0"});
                            clearInterval(int);
                        }
                    }, 5);
                }, 450);
            }
        }, 5);
    }
    topBorder();
}

