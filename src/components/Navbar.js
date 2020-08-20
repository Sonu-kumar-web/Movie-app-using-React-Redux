import "../index.css";

import React from "react";
import { handleMovieSearch } from "../actions";

class Navbar extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         showSearchResult: true,
         searchText: "",
      };
   }

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
      return (
         <div className="nav">
            <div className="search-container">
               <input onChange={this.handleChange} />
               <button id="search-btn" onClick={this.handleSearch}>
                  Search
               </button>
            </div>
         </div>
      );
   }
}

export default Navbar;
