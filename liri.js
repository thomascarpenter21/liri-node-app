var request = require("request");
var fs = require("fs");
var keys = require("keys.js");
var twitter = require("twitter");
var spotify = require("spotify");
var initialCommand = process.argv[2];

switch (initialCommand) {
    case "my-tweets":
        twitter();
        break;
    case "spotify-this-song":
        spotify();
        break;
    case "movie-this":
        film();
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
};


function flick() {
    var movie = process.argv[3];
    if (!movie) {
        movie = "mr nobody";
    }
    movies = movie;
    request("http://www.omdbapi.com/?t" + movies + "&y=&plot=short&r=json", function(error, response, body) {

            if (!error && response.statusCode === 200) {
                var filmResults =
                    "the title of the film is: " + JSON.parse(body).Title + "\r\n" +
                    "Year the movie came out: " + JSON.parse(body).Year + "\r\n" +
                    "The movie's rating is: " + JSON.parse(body).imdbRating + "\r\n" +
                    "Plot: " + JSON.parse(body).Plot + "\r\n" +
                    "Actors in the movie " + JSON.parse(body).Actors + "\r\n" +
                    "Country where the moive was produced " + JSON.parse(body).Country + "\r\n" +
                    "Language of the movie " + JSON.parse(body).Language + "\r\n" +
                    "Rotten Tomatoes Rating " + JSON.parse(body).Ratings[1].value + "\r\n" +
                    "Rotten Tomatoes URL " + JSON.parse(body).tomatoURL + "\r\n";

                console.log(filmResults);
            } else {
                console.log("error :" + error);
                return;
            }
        }

    });

function spotify(songTitle) {
    var songTitle = process.argv[3];
    if (!songTitle) {
        songTitle = "What's my age again";
    }
    songTitles = songTitle;
    spotify.search({ type: "track", query: songTitles }, function(err, data) {
        if (!err) {
            var songDetails = data.tracks.items;
            for (var i = 0; i < 5; i++) {
                if (songInfo[i] != undefined) {
                    var spotifyResults =
                        "Artist: " + songDetails[i].artists[0].name + "\r\n" +
                        "Song: " + songDetails[i].name + "\r\n" +
                        "Album the song is from: " + songDetails[i].album.name + "\r\n" +
                        "Preview Url: " + songDetails[i].preview_url + "\r\n" +

                        console.log(spotifyResults);
                    log(spotifyResults);
                }
            }
        } else {
            console.log("Error :" + err);
            return;
        }
    });
};

function twitter() {
    var client = new twitter({
        consumer_key: keys.twitterKeys.consumer_key,
        consumer_secret: keys.twitterKeys.consumer_secret,
        access_token_key: keys.twitterKeys.access_token_key,
        access_token_secret: keys.twitterKeys.access_token_secret,
    });
    var twitterUsername = process.argv[3];
    if (!twitterUsername) {
        twitterUsername = "JahdashaFlagg";
    }
    twitterUser = { screen_name: twitterUsername };
    client.get("statuses/user_timeline/", twitterUser, function(error, data, response) {
        if (!error) {
            for (var i = 0; i < data.length; i++) {

                var twitterResults =
                    "@" + data[i].user.screen_name + ": " +
                    data[i].text + "\r\n" +
                    data[i].created_at + "\r\n" + ;

                console.log(twitterResults);
                log(twitterResults);
            }
        } else {
            console.log("Error :" + error);
            return;
        }
    });
}
