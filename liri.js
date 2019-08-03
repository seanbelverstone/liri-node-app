/*Psuedocode

LIRI will take in the following commands:
'concert-this'
Input example: `node liri.js concert-this <artist/band name here>`
API example: ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
This searches the Bands in Town Artist Events API for an artist and renders;
- name of the venue
- venue location
- date of the event (using moment to format it as MM/DD/YYYY)

'spotify-this-song'
eg `node liri.js spotify-this-song '<song name here>'`
Make sure to utilise the node-spotify-api
This shows:
- Artist
- The song's name
- A preview link of the song from Spotify
- The album that the song is from
If no song is provided, then the program will default to "The Sign" by Ace of Base

'movie-this'
eg `node liri.js movie-this '<movie name here>'`
This outputs:
- Title of the movie.
- Year the movie came out.
- IMDB Rating of the movie.
- Rotten Tomatoes Rating of the movie.
- Country where the movie was produced.
- Language of the movie.
- Plot of the movie.
- Actors in the movie.
If no movie is entered the program defaults to 'Mr Nobody'
This requires an API key and axios to work. Use 'trilogy' for the key

'do-what-it-says'
eg: `node liri.js do-what-it-says`
This utilises the 'fs' Node package and LIRI will take the text inside of random.txt and use it to call a command.
If a song name is in there, it'll use spotify, a movie - OMDB and and artist's name will show concert details

*/

//Code required to read and set any environment variables with the dotenv package
require("dotenv").config();

//This will import the keys and store them into a variable
var keys = require("./keys.js");

//requiring all of the APIs and dependencies
var fileSystem = require('fs');
var Spotify = require('node-spotify-api');
var OmdbApi = require('omdb-api-pt')
var axios = require('axios');
var dotenv = require('dotenv').config()
var inquirer = require("inquirer");
var moment = require("moment");

//Storing the user's input, either concert-this, spotify-this-song and movie-this into a variable
var action = process.argv[2];
var userInput = process.argv.slice(3).join(" ");


var spotify = new Spotify ({
    id: "082bd53c5a74478297b8dd55ae9d644f",
    secret: "1cf695c4ec8f48ac8474f529e8b94b93"
});

function switchCase(action) {
    switch (action) {
        
        case "concert-this":
            concertDetails(userInput);
            break;

        case "spotify-this-song":
            spotifySearch(userInput);
            break;
        
        case "movie-this":
            movieInfo(userInput);
            break;

        case "do-what-it-says":
            doWhatItSays();
            break;
    }
}


//Concert Details function
function concertDetails(artist) {
    //Uses axios
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=f628756c7727ccfb14a7c0576339e646")
    

    //Prints out the required responses
    .then(function (response) {
        
        console.log("=================================");
        console.log("\nThere's a " + artist + " show at the " + response.data[0].venue.name + " in " + response.data[0].venue.country);
        console.log("\nThe venue is in " + response.data[0].venue.city + ".");
        var showTime = moment(response.data[0].datetime);
        console.log("\nThe date of the show is " + showTime.format("MM/DD/YYYY") + ".\n");
        console.log("=================================");

});
}

//Spotify song details search
function spotifySearch(songName) {

    //If nothing is entered, the search defaults to this song
    if (!songName) {
        songName = "The Sign Ace of Base";
    }

    //Prints out the required responses
    spotify
    .search({ type: 'track', query: songName })
    .then(function(response) {
        console.log("=================================");
        console.log("\nArtist: " + response.tracks.items[0].artists[0].name);
        console.log("\nSong: " + response.tracks.items[0].name);
        console.log("\nAlbum: " + response.tracks.items[0].album.name)
        console.log("\nPreview link: " + response.tracks.items[0].external_urls.spotify + "\n");
        console.log("=================================");
    })
    .catch(function(err) {
      console.log(err);
    });
}

function movieInfo(movie) {

    //If nothing is selected, this defaults to Mr Nobody
    if (!movie) {
        movie = "Mr Nobody";
    }

    //Uses axios
    axios.get("http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy")
        
    
    //Prints out the required responses
    .then(function (response) {
        ("=================================");
        console.log("\nMovie title: " + response.data.Title);
        console.log("\nYear of release: " + response.data.Year);
        console.log("\nIMDB Rating: " + response.data.imdbRating);
        console.log("\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("\nCountry of Production: " + response.data.Country);
        console.log("\nLanguage: " + response.data.Language);
        console.log("\nPlot: " + response.data.Plot);
        console.log("\nActors: " + response.data.Actors);
        ("=================================");
    });
}

function doWhatItSays() {

    //reading the file random.txt
    fileSystem.readFile("random.txt", "utf8", function(error, data) {

        if (error) {
            return console.log(error);
            }

        //moves the data into an array, split up by the comma
        var dataArr = data.split(",");

        //changing the action (normally movie-this etc) to be the first array position instead
        action = dataArr[0];
        userInput = dataArr[1];
        console.log("=================================");
        console.log("The info stored on random.txt is: ");
        console.log("\nAction: " + action);
        console.log("\nInput: " + userInput);

        switchCase(action);

});
}

switchCase(action);