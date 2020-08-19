import { ADD_MOVIES } from "../actions";

const initialMoviesState = {
   list: [],
   favorites: [],
};

// We should make reducers as a pure functions
export default function movies(state = initialMoviesState, action) {
   if (action.type === ADD_MOVIES) {
      return {
         ...state,
         list: action.movies,
      };
   }
   // If action does not have any type
   return state;
}
