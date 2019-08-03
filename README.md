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

######Screenshots, Video & GitHub

[concert-this](screenshots/concert-this.png)
[spotify-this-song](screenshots/spotify-this-song.png)
[movie-this](screenshots/movie-this.png)
[do-what-it-says](screenshots/do-what-it-says.png)


A video of the app functioning can be found on the following [link]: https://drive.google.com/file/d/1sHxabjvTPLLtqTiwoF2rdUDU_W0EQP0e/view
A [link] to the deployed version: https://github.com/seanbelverstone/liri-node-app

######Technologies used

* Node
* Javascript
* NPM
* Axios

######My Role in App Development
I built the app in its entirety by myself, occassionally referring to previous exercises to practice certain elements, such as reading a file using File System and switch cases. I needed to practice using File System more because write, read and append must have a certain number of arguments in the their functions and I wanted to make sure that I chose the right number. Switch cases were important to review as If/Else statements have become the more common type of conditionals in my coding, but I think that switch cases are more aesthetically pleasing and easier to read. 

######Final Words
Building LIRI was an extremely informative procedure and I thoroughly enjoyed myself while making it. Back-end development is becoming more interesting by the day and I'm thrilled to know that we will be delving deeper into this side of coding.