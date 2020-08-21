import "../index.css";

import React from "react";
import { data as movieList } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourite } from "../actions";
// import { connect } from "../index";
import { connect } from "react-redux";

class App extends React.Component {
   componentDidMount() {
      this.props.dispatch(addMovies(movieList));
   }

   // Remove movie from favourite
   isMovieFavourite = (movie) => {
      const { movies } = this.props;
      const index = movies.favorites.indexOf(movie);
      if (index !== -1) {
         // found the movie
         return true;
      }
      return false;
   };

   // For change the tab
   onChangeTab = (val) => {
      this.props.dispatch(setShowFavourite(val));
   };

   render() {
      // By rootReducer
      const { movies, search } = this.props; //State-{movies:{}, search:{}}
      // console.log(movies);
      const { list, favorites = [], showFavorites = [] } = movies;

      const displayMovies = showFavorites ? favorites : list;

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
                        dispatch={this.props.dispatch}
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

// use connect() method function at the place of Wrapping
function mapStateToProps(state) {
   return {
      movies: state.movies,
      search: state.movies,
   };
}
const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
