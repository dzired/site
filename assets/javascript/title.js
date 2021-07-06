var i=0;
setInterval(function(){
    var titles=['▖m', '▘m', '▝me', '▗me', '▖meh', '▘meh', '▝mehf', '▗mehf', '▖mehf o', '▘mehf o', '▝mehf on', '▗mehf on','▖mehf on t', '▘mehf on t', '▝mehf on to', '▗mehf on to', '▖mehf on top', '▘mehf on top', 'have a', 'have a', 'have a', 'great day', 'great day', 'great day', '💛', '💛', '💙', '💙', '💜', '💜'];//add more titles if you want
    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 400);
