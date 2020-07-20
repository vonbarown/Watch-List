import React from "react";
import { connect } from "react-redux";
import { searchTem } from "../../store/actions/showsActions";

const SearchTerm = (props) => {
  return (
    <div>
      <input
        type="text"
        value={props.search}
        onChange={(e) => props.searchTem(e.target.value)}
      />
    </div>
  );
};

const mapStateToProps = ({ showsReducer: { search } }) => {
  return {
    search: search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchTem: (data) => dispatch(searchTem(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchTerm);
