#LIRI App

######Overview

The LIRI app is an information assistant based in the command line. 
Based on input from the user, LIRI will display information about a song, movie or concert. LIRI searches Spotify for songs, OMDB for movies and Bands in Town for concerts. The reason for this app is because many websites that contain this information can be convoluted and confusing, especially if you're looking for a quick piece of information. LIRI shows relevant information for the user's request, fast.

The app mainly works through the use of a switch case scenario. Once the user's input is stored in a variable, the app can decide whether to use one of the three main actions offered and search for relevant information. It prevents the app from, for example, searching for Red Hot Chilli Peppers in a movies database.
Once this switch case has been used, an request is made to the relevant API in order to obtain said information. Both the *concert-this* and *movie-this* utilize **axios** to make an API call, whereas *spotify-this-song* uses its own **npm based Spotify dependency**. The switch case has to be stored in a function, in order for the fourth, final action *do-what-it-says* to function correctly. *do-what-it-says* uses fs, or node's inbuilt File System to read a file named random.txt and performs the related action depending on what information is provided.

The files/dependencies that are required for this app to function are;
* keys.js (which stores my Spotify ID and API key)
* fs, or File System (to read random.txt)
* axios (so we're able to make a request to Bands in Town and OMDB)
* dotenv (This makes sure that the values entered by the user are specific to their computer that the app is running on)
* Spotify (In order to search for songs details)
* moment (So we can display time in a manageable and customisable format)

######Instructions
1. Open liri.js
2. Start the terminal and type npm install to install all of the required dependencies and node modules. **(Note: Make sure you're in the right directory!)**
3. Once this has finished, in the terminal, type:
* *node liri.js* followed by one of the four actions, *concert-this*, *spotify-this-song*, *movie-this* or *do-what-it-says*. If you use one of the first three, also type in the name of an artist, song or movie, depending on which one you chose. eg. __*node liri.js movie-this The Matrix*__
4. LIRI will then perform the relevant API call and display the information! 




1. Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
2. Give a high-level overview of how the app is organized
3. Give start-to-finish instructions on how to run the app
4. Include screenshots, gifs or videos of the app functioning
5. Contain a link to a deployed version of the app
6. Clearly list the technologies used in the app
7. State your role in the app development

Because screenshots (and well-written READMEs) are extremely important in the context of GitHub, this will be part of the grading in this assignment.

If you haven't written a markdown file yet, [click here for a rundown](https://guides.github.com/features/mastering-markdown/), or just take a look at the raw file of these instructions.