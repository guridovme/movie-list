let movies = [];

const movieInputNode = document.querySelector('.js-movie-input');
const addMovieBtnNode = document.querySelector('.js-add-movie-btn');
const moviesNode=document.querySelector('.js-movies');

const getMovieFromUser = () => {
    let title = movieInputNode.value;
    return title;
};

const addMovie = () => {
    const movieTitle = getMovieFromUser();
    movies.push(movieTitle);
}

const getMovies = () => {
    return movies;
  };

const renderMovie = (movie) => {


return (`
        <li class="movie">
        
        <div class="movie__title">${movie}</div>
        
        <div class="movie__delete-btn">
        


        </div>
        
        </li>
        `);
  
};

const createMovie = (newMovie) => {
    const moviesList = renderMovie (newMovie);
    moviesNode.insertAdjacentHTML("afterBegin", moviesList);
}

const clearInput  = () => {
    movieInputNode.value='';    
};



const addMovieBtnHandler = () => {
    
    addMovie();
    createMovie(getMovieFromUser());
    clearInput();
};

const deleteMoviesHandler = (event) => {
    const deleteMovieItem = event.target.closest(".movie");
    const deleteMovieIndex = getMovies(deleteMovieItem);
    if (event.target.classList.contains("movie__delete-btn")) {
      movies.splice(deleteMovieIndex, 1);
      deleteMovieItem.remove();
    }
  };


addMovieBtnNode.addEventListener('click', addMovieBtnHandler);
moviesNode.addEventListener("click", deleteMoviesHandler);


