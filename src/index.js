import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import App from "./components/App";
import movies from "./reducers";

// Create store and pass reducers
const store = createStore(movies);
// console.log("store", store);
// console.log("State", store.getState());

ReactDOM.render(<App />, document.querySelector("#root"));
