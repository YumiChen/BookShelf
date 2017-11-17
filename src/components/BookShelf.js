import React,{Component} from "react";
import SignUp from "./SignUp";
import ShelfPage from "./ShelfPage";
import {connect} from "react-redux";

let BookShelf = (props)=>{
    const user1 = props.currentUid,
        user2 = sessionStorage.getItem("user"),
        el = (user1 != null || user2 != null?<ShelfPage/>:<SignUp/>);
    return el;
}

const mapStateToProps=(state)=>{
    return {currentUid: state.currentUid
           };
  }

BookShelf = connect(mapStateToProps,null)(BookShelf);
  
module.exports = BookShelf;