import { ADD_MOVIES } from "../actions";

// We should make reducers as a pure functions
export default function movies(state = [], action) {
   if (action.type === ADD_MOVIES) {
      return action.movies;
   }
   // If action does not have any type
   return state;
}
