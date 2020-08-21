import "../index.css";

import React from "react";
import { handleMovieSearch, addMovieToList } from "../actions";
// import { connect } from "../index";
import { connect } from "react-redux";

class Navbar extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         searchText: "",
      };
   }

   handleAddToMovies = (movie) => {
      this.props.dispatch(addMovieToList(movie));
      this.setState({
         showSearchResult: false,
      });
   };

   handleSearch = () => {
      const { searchText } = this.state;
      this.props.dispatch(handleMovieSearch(searchText));
   };

   handleChange = (event) => {
      this.setState({
         searchText: event.target.value,
      });
   };

   render() {
      const { result: movie, showSearchResult } = this.props.search;
      return (
         <div className="nav">
            <div className="search-container">
               <input onChange={this.handleChange} />
               <button id="search-btn" onClick={this.handleSearch}>
                  Search
               </button>
               {showSearchResult && (
                  <div className="search-results">
                     <div className="search-result">
                        <img src={movie.Poster} alt="search-pic" />
                        <div className="movie-info">
                           <span>{movie.Title}</span>
                           <button
                              className="button"
                              onClick={() => this.handleAddToMovies(movie)}
                           >
                              Add to Movies
                           </button>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>
      );
   }
}

// export default Navbar;

// class NavbarWrapper extends React.Component {
//    render() {
//       return (
//          <storeContext.Consumer>
//             {(store) => (
//                <Navbar dispatch={store.dispatch} search={this.props.search} />
//             )}
//          </storeContext.Consumer>
//       );
//    }
// }

// export default NavbarWrapper;

// use connect() method function at the place of Wrapping
function mapStateToProps({ search }) {
   return {
      search: search,
   };
}

export default connect(mapStateToProps)(Navbar);
