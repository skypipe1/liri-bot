require("dotenv").config();

var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var request = require("request");
var fs = require('fs');
var axios = require('axios');
var moment = require('moment')

var callSpotify = function (songName) {
    if(songName === undefined){
        songName = "The Sign"
    }

    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
            console.log(i);
            console.log("Artist name: " + songs[i].artists[0].name);
            console.log("Song title: " + songs[i].name);
            console.log("Album: " + songs[i].album.name);
            console.log("Release date: " + songs[i].album.release_date);
            console.log("Preview song: " + songs[i].preview_url);
            console.log("----------------------------------------------------");
        };
    });
};

var callOmdb = function (movieName) {
    if (movieName === undefined){
        movieName = "Mr.Nobody"
    }
    var urlHit = "http://www.omdbapi.com/?apikey=4359dc59&t=" + movieName + "&tomatoes=true&y=&plot=short&r=json";
    request(urlHit, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var jsonData = JSON.parse(body);
            console.log(movieName)
            console.log("Title: " + jsonData.Title);
            console.log("Year: " + jsonData.Year);
            console.log("Rated: " + jsonData.Rated);
            console.log("IMDB Rating: " + jsonData.imdbRating);
            console.log("Country: " + jsonData.Country);
            console.log("Language: " + jsonData.Language);
            console.log("Plot: " + jsonData.Plot);
            console.log("Actors: " + jsonData.Actors);
            console.log("Rotton Tomatoes Rating: " + jsonData.Ratings[1].Value);
            console.log("-----------------------------------------------------")  
            
        };
    });
};


var callBand = function(artist){
    if (artist === undefined){
        artist = "Cardi B"
    }
    axios.get("https://rest.bandsintown.com/artists/"+artist+"/events?app_id=codingbootcamp").then(
        
        function (response) {
            
            for (var i = 0; i < response.data.length; i++) {
                
                console.log("Artist: "+ artist)
                console.log("Venue Name: "+ response.data[i].venue.name)
                console.log("City: "+ response.data[i].venue.city)
                console.log("Region: "+ response.data[i].venue.region)
                console.log(moment(response.data[i].datetime).format('MM/DD/YYYY'))
                console.log("-----------------------------------------------------")
            };
        }
    )
}


var sCase = function (caseData, functionData) {
    switch (caseData) {
        case 'spotify-this-song':
            callSpotify(functionData);
            break;
        case 'movie-this':
        
            callOmdb(functionData);
            break;
        case 'concert-this':
            callBand(functionData);
            break;
        case 'do-what-it-says':
            doWhat(functionData);
            break;
        default:
            console.log("LIRI does not understand");
    };
};


function doWhat(){
    fs.readFile('random.txt', "utf8", function(err, data){
      var txt = data.split(',');
  
      callSpotify(txt[1]);
    });
};

var run = function (argOne, argTwo) {
    sCase(argOne, argTwo)
};

run(process.argv[2], process.argv[3]);