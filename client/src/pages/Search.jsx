import React from "react";
import "../styles/search.css";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

const Search = (props) => {
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          name="search"
          onChange={props.handleChange}
          placeholder="Search ..."
        />
        <button type="submit" className="searchButton">
          <SearchRoundedIcon />
        </button>
      </div>
    </div>
  );
};

export default Search;
