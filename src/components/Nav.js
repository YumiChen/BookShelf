import {Component} from "react";
import {Link} from "react-router-dom";

const Nav = (props)=>{
    return (
      <div className="nav">
        <Link to="/bookshelf" className="title">
          <i className="fa fa-book" aria-hidden="true"></i>
          BookShelf</Link>
        <Link to="/" className="search">Search
          <i className="fa fa-search" aria-hidden="true"></i>
        </Link>
      </div>
    );
  }

  module.exports = Nav;