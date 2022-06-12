$(window).on('keydown',function(event)
    {
    if(event.keyCode==123)
    {

        return false;
    }
    else if(event.ctrlKey && event.shiftKey && event.keyCode==73)
    {

        console.log('%cHi there', 'font-size: 40px; color: white');

    }
    else if(event.ctrlKey && event.keyCode==73)
    {

        console.log('%cHi there', 'font-size: 40px; color: white');

    }
});
$(document).on("contextmenu",function(e)
{

e.preventDefault();
});
