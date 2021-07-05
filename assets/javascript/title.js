var i=0;
setInterval(function(){
    var titles=['mehf', 'mehf on', 'mehf on top', 'love yall <3', 'have a', 'good day'];//add more titles if you want
    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 2000);
