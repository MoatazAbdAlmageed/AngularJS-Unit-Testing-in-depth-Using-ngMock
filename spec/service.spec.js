describe('omdb service', function () {
    var movieData = {
        "Title": "Star Wars: Episode IV - A New Hope",
        "Year": "1977",
        "Rated": "PG",
        "Released": "25 May 1977",
        "Runtime": "121 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "George Lucas",
        "Writer": "George Lucas",
        "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
        "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Won 6 Oscars. Another 50 wins & 28 nominations.",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYTUwNTdiMzMtNThmNS00ODUzLThlMDMtMTM5Y2JkNWJjOGQ2XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg",
        "Ratings": [{"Source": "Internet Movie Database", "Value": "8.7/10"}, {
            "Source": "Rotten Tomatoes",
            "Value": "93%"
        }, {"Source": "Metacritic", "Value": "92/100"}],
        "Metascore": "92",
        "imdbRating": "8.7",
        "imdbVotes": "999,345",
        "imdbID": "tt0076759",
        "Type": "movie",
        "DVD": "21 Sep 2004",
        "BoxOffice": "N/A",
        "Production": "20th Century Fox",
        "Website": "http://www.starwars.com/episode-iv/",
        "Response": "True"
    };

    it("Should return search movie data", function () {
        var service = {
            search: function (query) {
                return movieData;
            }
        };
        expect(service.search('omar')).toEqual(movieData);
    })

})