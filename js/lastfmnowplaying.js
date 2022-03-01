function yess() {
    
  $.getJSON('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=mehf&api_key=9d93c9ed1ec5d370bed6a768664de7c5&limit=1&format=json', function(data){
    if(jQuery.type(data.recenttracks.track) === 'array'){
      var nowPlaying = data.recenttracks.track[0];
    } else {
      var nowPlaying = data.recenttracks.track;
    }
      window.playing = nowPlaying['name']
      window.artist = nowPlaying['artist']['#text']
      window.link = nowPlaying.url
  })
}

var gamer = function(){
  var api_key = '9d93c9ed1ec5d370bed6a768664de7c5';
  var username = 'mehf';
  var base_url = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user='+username+'&api_key='+api_key+'&limit=1&format=json';
  $.getJSON(base_url, function(data){
    if(jQuery.type(data.recenttracks.track) === 'array'){
      var nowPlaying = data.recenttracks.track[0];
    } else {
      var nowPlaying = data.recenttracks.track;
    }
      if (nowPlaying['@attr'] && nowPlaying['@attr']['nowplaying']) {
      var listening_text = 'Currently listening to '; 
      var cover = data.recenttracks.track[0].image[3]['#text']
      } else {
          var listening_text = 'Last listened to ';
          var cover = "https://i.pinimg.com/originals/79/2d/01/792d01df5154f95d6a5e480a3a627892.gif"
    }
    var currentTrack = nowPlaying['name'] + ' by ' + nowPlaying['artist']['#text'];
    
    
      if (window.playing !== nowPlaying['name']){
          
          $('#now_playing').html('<a class = "animate__animated animate__backOutLeft"href= '+ window.link +'>'+ listening_text + window.playing + ' by ' + window.artist + '</a>');
          var delayInMilliseconds = 1000; //1 second
          setTimeout(function() {
          $('#now_playing').html('<a class = "animate__animated animate__backInRight" href= '+ nowPlaying.url +'>'+ listening_text + currentTrack + '</a>');    }, delayInMilliseconds);
          yess()
      } else {
          
          $('#now_playing').html('<a href= '+ nowPlaying.url +'>'+ listening_text + currentTrack + '</a>');
      }          
    $('#trackname').html(nowPlaying['name'])
    $('#artist').html(nowPlaying['artist']['#text'])
    $('#isListening').html(listening_text) 
      
  })
    
  };




yess()
gamer();
setInterval(gamer, 10 * 1000)

