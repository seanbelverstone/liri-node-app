#LIRI App

######Overview

The LIRI app is an information assistant based in the command line. 
Based on input from the user, LIRI will display information about a song, movie or concert. LIRI searches Spotify for songs, OMDB for movies and Bands in Town for concerts. The reason for this app is because many websites that contain this information can be convoluted and confusing, especially if you're looking for a quick piece of information. LIRI shows relevant information for the user's request, fast.

The app mainly works through the use of a switch case scenario. Once the user's input is stored in a variable, the app can decide whether to use one of the three main actions offered and search for relevant information. It prevents the app from, for example, searching for Red Hot Chilli Peppers in a movies database.
Once this switch case has been used, an request is made to the relevant API in order to obtain said information. Both the *concert-this* and *movie-this* utilize **axios** to make an API call, whereas Spotify uses its own npm based dependency.




1. Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
2. Give a high-level overview of how the app is organized
3. Give start-to-finish instructions on how to run the app
4. Include screenshots, gifs or videos of the app functioning
5. Contain a link to a deployed version of the app
6. Clearly list the technologies used in the app
7. State your role in the app development

Because screenshots (and well-written READMEs) are extremely important in the context of GitHub, this will be part of the grading in this assignment.

If you haven't written a markdown file yet, [click here for a rundown](https://guides.github.com/features/mastering-markdown/), or just take a look at the raw file of these instructions.