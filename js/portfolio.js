$(window).on('keydown',function(event)
    {
    if(event.keyCode==123)
    {

        return false;
    }
    else if(event.ctrlKey && event.shiftKey && event.keyCode==73)
    {

        console.log('%cHi there', 'font-size: 40px; color: green');

    }
    else if(event.ctrlKey && event.keyCode==73)
    {

        console.log('%cHi there', 'font-size: 40px; color: green');

    }
});
$(document).on("contextmenu",function(e)
{

e.preventDefault();
});
