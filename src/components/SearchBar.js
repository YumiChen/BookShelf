import {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
// import action_searchedBooks from "../actions/action_searchedBooks";
// import action_searchedTerm from "../actions/action_searchedTerm";

// only for pure rendering 
let SearchBar = (props)=>{
    return (<div >
        <div className = "searchBar">
        <i className="fa fa-search" aria-hidden="true"/>
        <form onSubmit={props.onSubmit}>
        <input type="text" id="searchInput" placeholder="Find your next favorote..."/>
        <input type="submit" value="SEND"/>
        </form>
        </div>
        </div>);
  }
  // onChange={props.changeTerm}
  // onChange={debounce(props.search,900)}
  // value={props.searchedTerm}
  
  // const SearchPage_mapStateToProps_searchedTerm=(state)=>{
  //   return {searchedTerm: state.searchedTerm};
  // }
  
  // const mapDispatchToProps_searchedTerm = (dispatch)=>{
  //   return bindActionCreators({
  //     search: action_searchedBooks,
  //     changeTerm: action_searchedTerm},dispatch);
  // }
  
  // SearchBar = connect(null,mapDispatchToProps_searchedTerm)(SearchBar);

  module.exports = SearchBar;