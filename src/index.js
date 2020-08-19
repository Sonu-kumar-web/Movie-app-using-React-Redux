import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import App from "./components/App";
import movies from "./reducers";

// Create store and pass reducers
const store = createStore(movies);
// console.log("store", store);
// console.log("Before state", store);

// Send action
// store.dispatch({
//    type: "ADD_MOVIES",
//    movies: [{ name: "Superman" }],
// });
// console.log("After state", store.getState());

ReactDOM.render(<App store={store} />, document.querySelector("#root"));
