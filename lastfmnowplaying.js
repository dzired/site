var gamer = function(){

  var user_id = '852033849567477760';
  var base_url = 'https://api.lanyard.rest/v1/users/' +user_id

  $.getJSON(base_url, function(data) {
    var x = data.data.spotify
    var isListening = data.data.listening_to_spotify
    if (isListening) {
      var Song = x.song
      var Artist = x.artist
      var cover = x.album_art_url
      var Artists = Artist.replace(/;/g, ",");
      var listening_text = "Currently listening to " + Song + " by " + Artists
      
       var imgsrc = cover
    } else{
        var listening_text = 'Not listening to anything on Spotify'
        var imgsrc = "https://i.pinimg.com/originals/79/2d/01/792d01df5154f95d6a5e480a3a627892.gif"
      }

    $('#now_playing').html('<a>'+ listening_text + '</a>');
	$('#album_cover').html('<div id="image"><img src='+imgsrc+'></div>');
	$('#activity').html('<div class = "brandon"><a>Currently playing: ' + data.data.activities[1].name + '</a></div>')


  })
};

gamer();
setInterval(gamer, 10 * 1000)
