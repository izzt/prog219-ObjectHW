function Movie(title, rating) {
    this.movieTitle = title;
    this.rating = rating;

    this.validate=function(){
       if (this.movieTitle ==="") {
           alert("Please insert movie title.")
           return false;
       }
    }

 
  }