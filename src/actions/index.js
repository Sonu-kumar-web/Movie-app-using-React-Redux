// {
//     type: 'ADD_MOVIES'
//      movies:[m1, m2, m3]
// },
// {
//     type: 'DECREASE_COUNT'
// }

// actions type variable
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";

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
      type: ADD_FAVOURITE,
      movie,
   };
}
