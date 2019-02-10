require("dotenv").config();

var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var callSpotify = function(songName){

    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
            console.log(i);
            console.log("Artist name: " + songs[i].artists[0].name);
            console.log("Song title: " + songs[i].name);
            console.log("Track number: " + songs[i].track_number);
            console.log("Album: " + songs[i].album.name);
            console.log("Release date: " + songs[i].album.release_date);
            console.log("Album type: " + songs[i].album.album_type);
            console.log("Preview song: " + songs[i].preview_url);
            console.log("----------------------------------------------------");
        };
    });
};


var sCase = function(caseData, functionData){
    switch(caseData){
        case 'spotify-this-song':
            callSpotify(functionData);
            break;
        default:
        console.log("LIRI does not know that")
    }
}

var run = function(argOne, argTwo){
    sCase(argOne,argTwo)
};

run(process.argv[2], process.argv[3]);