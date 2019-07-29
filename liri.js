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

Every log is appended to a new file called log.txt*/

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

//Storing the user's input, either concert-this, spotify-this-song and movie-this into a variable
var action = process.argv[2];
var input = process.argv[3];

var spotify = new Spotify({
    id: "082bd53c5a74478297b8dd55ae9d644f",
    secret: "1cf695c4ec8f48ac8474f529e8b94b93"
  });


  //Having this at the start is making it show every time. Not what we need
// inquirer.prompt([
//     {
//         type: "input",
//         message: "Hi there! I'm LIRI. Lets find out some information together! \n What's your name?",
//         name: "username"
//       }

// ])
// .then(function(inquirerResponse) {
//     var username = inquirerResponse.username;
//     console.log("Nice to meet you, " + username + "!");
//     console.log("Please feel free to search for a concert, song information or movie details!");
// });

switch (action) {
    case "concert-this":
        console.log("Concert");
        break;

    case "spotify-this-song":
        console.log("Song details");
        break;
    
    case "movie-this":
        console.log("Movie details");
        break;
}


function concertDetails() {

}

function spotifySearch() {

}

function movieInfo() {

}