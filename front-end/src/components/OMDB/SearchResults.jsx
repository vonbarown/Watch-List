import React from "react";
import { connect } from "react-redux";
// import { searchTem } from "../../store/actions/showsActions";

const SearchResults = (props) => {
  let result = props.searchTem;
  return (
    <div className="search-results">
      <img src={result.Poster} alt={result.Poster} />
    </div>
  );
};

const mapStateToProps = ({ showsReducer: { SearchResult } }) => {
  return {
    search: SearchResult,
  };
};

export default connect(mapStateToProps, null)(SearchResults);