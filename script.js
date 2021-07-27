
//Video volume
document.getElementById("vid").volume = 0.3;


//Main Function
mainActive = false;
setTimeout(() => {if (document.getElementById("vid").paused) {$("#clickToPlay").css("opacity", "1");} else {main()}}, 1000);
function main() {
    if (mainActive) return;
    mainActive = true;
    $("#clickToPlay").css("opacity", "0");
    $("#main").css("opacity", "1");
    $("#widgetContainer").css("opacity", "1");
    $(".hitCount").css("opacity", "1");
    setTimeout(() => {
        $("#clickToPlay").css("display", "none");
    }, 1050);
    document.getElementById("vid").play();
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


//Start Main Function
$("#clickToPlay").click(() => {
    main();
});