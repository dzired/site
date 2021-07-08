var i=0;
setInterval(function(){
    var titles=[
"|m|",
"|me|",
"|meh|",
"|mehf|",
"|mehf o|",
"|mehf on|",
"|mehf on |",
"|mehf on t|",
"|mehf on to|",
"|mehf on top|",
"|mehf on top|",
"|mehf on top|",
" |mehf on to|",
"  |mehf on t|",
"   |mehf on |",
"    |mehf on|",
"     |mehf o|",
"      |mehf |",
"       |mehf|",
"        |meh|",
"         |me|",
"          |m|",
"           ||",

]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 900);
