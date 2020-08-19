import {
   ADD_MOVIES,
   ADD_TO_FAVOURITE,
   REMOVE_FROM_FAVOURITE,
} from "../actions";

const initialMoviesState = {
   list: [],
   favorites: [],
};

// We should make reducers as a pure functions
export default function movies(state = initialMoviesState, action) {
   // if (action.type === ADD_MOVIES) {
   //    return {
   //       ...state,
   //       list: action.movies,
   //    };
   // }
   // If action does not have any type
   // return state;

   switch (action.type) {
      case ADD_MOVIES:
         return {
            ...state,
            list: action.movies,
         };
      case ADD_TO_FAVOURITE:
         return {
            ...state,
            favorites: [action.movie, ...state.favorites],
         };
      case REMOVE_FROM_FAVOURITE:
         const filteredArray = state.favorites.filter(
            (movie) => movie.Title !== action.movie.Title
         );
         return {
            ...state,
            favorites: filteredArray,
         };
      default:
         return state;
   }
}
