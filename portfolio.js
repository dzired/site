    $(window).on('keydown',function(event)
    {
    if(event.keyCode==123)
    {

        return false;
    }
    else if(event.ctrlKey && event.shiftKey && event.keyCode==73)
    {

        return false;  //Prevent from ctrl+shift+i
    }
    else if(event.ctrlKey && event.keyCode==73)
    {

        return false;  //Prevent from ctrl+shift+i
    }
});
$(document).on("contextmenu",function(e)
{

e.preventDefault();
});

$(document).ready(function(){
  var screenWidth = $(window).width();
  // if window width is smaller than 800 remove the autoplay attribute
  // from the video
  if (screenWidth < 800){
        $('video').removeAttr('autoplay');
  } else {
    $('video').attr('autoplay');
  }
});
