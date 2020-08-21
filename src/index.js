import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import App from "./components/App";
import rootReducer from "./reducers";

// Modifying middleware
const logger = ({ dispatch, getState }) => (next) => (action) => {
   // Middleware code
   if (typeof action !== "function") {
      console.log("ACTION_TYPE=", action.type);
   }
   next(action);
};

// Create store and pass reducers
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log("store", store);
console.log("Before state", store.getState());

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.querySelector("#root")
);
