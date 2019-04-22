
var movies=[];
$(document).ready(function() {
    $("#addAMovie").click(function() 
    
    {
        var movieTitle = $('#movieTitle').val()
        var rating =  $('#rating').val()
        addAMovieClicked(movieTitle,rating);
        
    });
});

function addAMovieClicked(movieTitle, rating)
{
        
        console.log("buttonclick");
        console.log("Movie title:" + movieTitle);
        console.log("Rating:" + rating);
        var movie = new Movie(movieTitle, rating);
        movie.validate();   
        movies.push(movie);
        console.log(movies.toString());


}

$(document).ready(function() {
    $("#showMovieRatings").click(function() 
    {
      for (i = 0; i < movies.length; i++) { 
        console.log(movies[i]);
        console.log(movies[i].movieTitle);
        console.log(movies[i].rating);

        showMovieRatingsClicked(movies[i].movieTitle, movies[i].rating);
    }
    });
});


function showMovieRatingsClicked(movieTitle, rating)
{
    $("#myTable").find('tbody')
    .append(
   $('<tr>')
   .append($('<td>').text(movieTitle))
   .append($('<td>').text(rating))
        )
}

      