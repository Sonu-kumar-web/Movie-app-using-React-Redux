import { combineReducers } from "redux";

import {
   ADD_MOVIES,
   ADD_TO_FAVOURITE,
   REMOVE_FROM_FAVOURITE,
   SET_SHOW_FAVOURITE,
} from "../actions";

// Movie Reducer
const initialMoviesState = {
   list: [],
   favorites: [],
   showFavorites: false,
};

// We should make reducers as a pure functions
export function movies(state = initialMoviesState, action) {
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
      case SET_SHOW_FAVOURITE:
         return {
            ...state,
            showFavorites: action.val,
         };
      default:
         return state;
   }
}

// Search reducer
const initialSearchState = {
   result: {},
};
export const search = (state = initialSearchState, action) => {
   return state;
};

// Root reducer
/*const initialRootState = {
   movies: initialMoviesState,
   search: initialSearchState,
};
export default function rootReducer(state = initialRootState, action) {
   return {
      movies: movies(state.movies, action),
      search: search(state.search, action),
   };
}*/

// Use of createReducers() method
export default combineReducers({
   movies: movies,
   search: search,
});
