# LIRI Bot
## LIRI Bot week 10 homework

### About

LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### What it does

#### Spotify
`node liri.js spotify-this-song <insert song title>`

<a href="https://imgur.com/dEMXo0x"><img src="https://i.imgur.com/dEMXo0x.gif" title="source: imgur.com" /></a>

This will show the following information about the song in your terminal/bash window

- Artist(s)
- The song's title
- Album
- Release date
- A preview link of the song from Spotify

If no song is provided then your program will default to "The Sign" by Ace of Base

#### Movies
`node liri.js movie-this <insert movie title>`

<a href="https://imgur.com/86QhzK3"><img src="https://i.imgur.com/86QhzK3.gif" title="source: imgur.com" /></a>

This will output the following information to your terminal/bash window:

- Title of the movie.
- Year the movie came out.
- Rating
- IMDB Rating of the movie.
- Country where the movie was produced.
- Language of the movie.
- Plot of the movie.
- Actors in the movie.
- Rotten Tomatoes Rating.

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

### BandsInTown
`node liri.js concert-this <insert artist name>`

<a href="https://imgur.com/oIkdEk1"><img src="https://i.imgur.com/oIkdEk1.gif" title="source: imgur.com" /></a>

This will output the following information to your terminal/bash window:

- Artist
- Venue Name
- City
- Region
- Date

If the user doesn't type an artist in, the program will output data for 'Cardi B'

#### Do What It Says
`node liri.js do-what-it-says`

<a href="https://imgur.com/0dKHhXl"><img src="https://i.imgur.com/0dKHhXl.gif" title="source: imgur.com" /></a>

Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

It will run `spotify-this-song` for "I Want it That Way,".

### Authors

Skylar Piper
