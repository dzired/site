var i=0;
setInterval(function(){
    var titles=['💙', '💜', '💚', '❤️', '💛'];//add more titles if you want
    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 200);
