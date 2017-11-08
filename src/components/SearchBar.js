import {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

// only for pure rendering 
let SearchBar = (props)=>{
    return (<div >
        <div className = "searchBar">
        <i className="fa fa-search" aria-hidden="true"/>
        <form onSubmit={props.onSubmit}>
        <input type="text" id="searchInput" placeholder="Find your next favorote..." />
        <input type="submit" value="SEND"/>
        </form>
        </div>
        </div>);
  }
  
  module.exports = SearchBar;