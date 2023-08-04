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
            <input class="movie__checkbox" type="checkbox">
            <div class="movie__title">${movie}</div>
            <div class="movie__delete-btn"></div>
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

const checkMovieHandler = (event) => {
    const movieBox = event.target.closest(".movie");
    const movieTitleLineThrough = event.target.closest(".movie__title");
    if (event.target.classList.contains("movie__checkbox")) {
        movieBox.classList.toggle("movie__opacity");
        movieTitleLineThrough.classList.toggle("movie__title-checked");
    }
  };

const deleteMovieHandler = (event) => {
    const deleteMovieItem = event.target.closest(".movie");
    const deleteMovieIndex = getMovies(deleteMovieItem);
    if (event.target.classList.contains("movie__delete-btn")) {
      movies.splice(deleteMovieIndex, 1);
      deleteMovieItem.remove();
    }
  };

addMovieBtnNode.addEventListener('click', addMovieBtnHandler);
moviesNode.addEventListener("click", deleteMovieHandler);
moviesNode.addEventListener("click", checkMovieHandler);



