var i=0;
setInterval(function(){
    var titles=['💙', '💜', '💚', '❤️' , '💛', 'mehf', 'mehf', 'mehf on', 'mehf on', 'mehf on top', 'm', 'me', 'meh', 'mehf', 'mehf o', 'mehf on', 'mehf on t', 'mehf on to', 'mehf on top', '💙', '💜', '💚', '❤️', '💛'];//add more titles if you want
    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 300);
