// actions type variable
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const SET_SHOW_FAVOURITE = "SET_SHOW_FAVOURITE";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";

// action creators
export const addMovies = (movies) => {
   return {
      type: ADD_MOVIES,
      movies: movies,
   };
};

// action creator
export function addFavourite(movie) {
   return {
      type: ADD_TO_FAVOURITE,
      movie,
   };
}

export const removeFromFavourite = (movie) => {
   return {
      type: REMOVE_FROM_FAVOURITE,
      movie,
   };
};

export const setShowFavourite = (val) => {
   return {
      type: SET_SHOW_FAVOURITE,
      val,
   };
};

export const handleMovieSearch = (movie) => {
   const url = `http://www.omdbapi.com/?i=tt3896198&apikey=6c8b5b5f&t=${movie}`;
   return function (dispatch) {
      fetch(url)
         .then((response) => response.json()) //Return Promise
         .then((movie) => {
            console.log("Movie", movie);
            // dispatch the action
            dispatch(addMovieSearchResult(movie));
         });
   };
};

export const addMovieSearchResult = (movie) => {
   return {
      type: ADD_SEARCH_RESULT,
      movie,
   };
};

export const addMovieToList = (movie) => {
   return {
      type: ADD_MOVIE_TO_LIST,
      movie,
   };
};
