


$.getJSON('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=mehf&api_key=9d93c9ed1ec5d370bed6a768664de7c5&format=json', function(data) {

var artist = $(".artist"),
track = $(".track"),
artistVal = data.recenttracks.track[0].artist["#text"],
trackVal = data.recenttracks.track[0].name;

artist.append(artistVal);
track.append(trackVal);

});