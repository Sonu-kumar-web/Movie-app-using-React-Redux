import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./components/App";
import rootReducer from "./reducers";

// function logger(obj, next, action)
// logger(obj)(next)(action)  -> In currying form
// const logger = function ({ dispatch, getState }) {
//    return function (next) {
//       return function (action) {
//          // Middleware code
//          console.log("ACTION_TYPE=", action.type);
//          next(action);
//       };
//    };
// };

// Modifying middleware
const logger = ({ dispatch, getState }) => (next) => (action) => {
   // Middleware code
   if (typeof action !== "function") {
      console.log("ACTION_TYPE=", action.type);
   }
   next(action);
};

// thunk by Scratch
// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//    // Middleware code
//    if (typeof action === "function") {
//       action(dispatch);
//       return;
//    }
//    next(action);
// };

// thunk by thunk package

// Create store and pass reducers
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log("store", store);
console.log("Before state", store.getState());

export const storeContext = createContext();
console.log("createContext", storeContext);

// Send action
// store.dispatch({
//    type: "ADD_MOVIES",
//    movies: [{ name: "Superman" }],
// });
// console.log("After state", store.getState());

// use provider as a class
class Provider extends React.Component {
   render() {
      const { store } = this.props;
      return (
         <storeContext.Provider value={store}>
            {this.props.children}
         </storeContext.Provider>
      );
   }
}

// Use provider without class
// ReactDOM.render(
//    <storeContext.Provider value={store}>
//       <App store={store} />
//    </storeContext.Provider>,
//    document.querySelector("#root")
// );

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.querySelector("#root")
);
