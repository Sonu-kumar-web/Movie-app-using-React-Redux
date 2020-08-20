import "../index.css";

import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourite } from "../actions";
import { storeContext } from "../index";

class App extends React.Component {
   componentDidMount() {
      const { store } = this.props;
      store.subscribe(() => {
         // console.log("Updated");
         // forceUpdate() method is used forcely Re-rendering/update our whole project (Generally we should avoid forceUpdate method)
         this.forceUpdate();
         // console.log(store.getState());
      });
      // make API call
      // dispatch action
      // store.dispatch({
      //    type: "ADD_MOVIES",
      //    movies: data,
      // });
      store.dispatch(addMovies(data));
   }

   // Remove movie from favourite
   isMovieFavourite = (movie) => {
      const { movies } = this.props.store.getState();
      const index = movies.favorites.indexOf(movie);
      if (index !== -1) {
         // found the movie
         return true;
      }
      return false;
   };

   // For change the tab
   onChangeTab = (val) => {
      this.props.store.dispatch(setShowFavourite(val));
   };

   render() {
      // const movies = this.props.store.getState();   // here state is an array []
      // const { list, favorites, showFavorites } = this.props.store.getState(); // here state is Object -> {list: [], favorites: []}

      // By rootReducer
      const { movies, search } = this.props.store.getState(); //State-{movies:{}, search:{}}
      // console.log(movies);
      const { list, favorites, showFavorites } = movies;

      const displayMovies = showFavorites ? favorites : list;

      // Use consumer Type -1
      // return (
      //    <storeContext.Consumer>
      //       {(store) => {
      //          return (
      //             <div className="App">
      //                <Navbar
      //                   dispatch={this.props.store.dispatch}
      //                   search={search}
      //                />
      //                <div className="main">
      //                   <div className="tabs">
      //                      <div
      //                         className={`tab ${
      //                            showFavorites ? "" : "active-tabs"
      //                         }`}
      //                         onClick={() => this.onChangeTab(false)}
      //                      >
      //                         Movies
      //                      </div>
      //                      <div
      //                         className={`tab ${
      //                            showFavorites ? "active-tabs" : ""
      //                         }`}
      //                         onClick={() => this.onChangeTab(true)}
      //                      >
      //                         Favorites
      //                      </div>
      //                   </div>
      //                   <div className="list">
      //                      {displayMovies.map((movie, index) => (
      //                         <MovieCard
      //                            movie={movie}
      //                            key={`movies-${index}`}
      //                            dispatch={this.props.store.dispatch}
      //                            isFavourite={this.isMovieFavourite(movie)}
      //                         />
      //                      ))}
      //                   </div>

      //                   {displayMovies.length === 0 ? (
      //                      <div className="no-movies">
      //                         No movies to display!
      //                      </div>
      //                   ) : null}
      //                </div>
      //             </div>
      //          );
      //       }}
      //    </storeContext.Consumer>
      // );

      return (
         <div className="App">
            <Navbar search={search} />
            <div className="main">
               <div className="tabs">
                  <div
                     className={`tab ${showFavorites ? "" : "active-tabs"}`}
                     onClick={() => this.onChangeTab(false)}
                  >
                     Movies
                  </div>
                  <div
                     className={`tab ${showFavorites ? "active-tabs" : ""}`}
                     onClick={() => this.onChangeTab(true)}
                  >
                     Favorites
                  </div>
               </div>
               <div className="list">
                  {displayMovies.map((movie, index) => (
                     <MovieCard
                        movie={movie}
                        key={`movies-${index}`}
                        dispatch={this.props.store.dispatch}
                        isFavourite={this.isMovieFavourite(movie)}
                     />
                  ))}
               </div>

               {displayMovies.length === 0 ? (
                  <div className="no-movies">No movies to display!</div>
               ) : null}
            </div>
         </div>
      );
   }
}

// Wrapper for app (use Consumer type-2)
class AppWrapper extends React.Component {
   render() {
      return (
         <storeContext.Consumer>
            {(store) => <App store={store} />}
         </storeContext.Consumer>
      );
   }
}

// export default App;
export default AppWrapper;
