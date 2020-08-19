import "../index.css";

import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";

class App extends React.Component {
   componentDidMount() {
      const { store } = this.props;
      store.subscribe(() => {
         console.log("Updated");
         // forceUpdate() method is used forcely Re-rendering/update our whole project (Generally we should avoid forceUpdate method)
         this.forceUpdate();
      });
      // make API call
      // dispatch action
      // store.dispatch({
      //    type: "ADD_MOVIES",
      //    movies: data,
      // });
      store.dispatch(addMovies(data));

      console.log("State", this.props.store.getState());
   }

   render() {
      // const movies = this.props.store.getState();   // here state is an array []
      const { list } = this.props.store.getState(); // here state is Object -> {list: [], favorites: []}
      return (
         <div className="App">
            <Navbar />
            <div className="main">
               <div className="tabs">
                  <div className="tab">Movies</div>
                  <div className="tab">Favorites</div>
               </div>
               <div className="list">
                  {list.map((movie, index) => (
                     <MovieCard movie={movie} key={`movies-${index}`} />
                  ))}
               </div>
            </div>
         </div>
      );
   }
}

export default App;
