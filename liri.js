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

//Storing the keys information into a variable
var spotify = new Spotify(keys.spotify);

var fileSystem = require('fs');
var Spotify = require('node-spotify-api');
var OmdbApi = require('omdb-api-pt')
var axios = require('axios');
var dotenv = require('dotenv').config()
var inquirer = require("inquirer");