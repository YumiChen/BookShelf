import React,{Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Settings from "./Settings";

import action_selectBook from "../actions/action_selectBook";

class Book extends Component{
    constructor(props){
      super(props);
    }
    render(){
    const props = this.props,
          info = props.info.volumeInfo,
        id = props.info.id?props.info.id:"-1",
    cover = info.imageLinks?{
    backgroundImage: 'url(' + info.imageLinks.smallThumbnail + ')'
  }:null,
        group=props.group,name=props.name,
        title=info.title,
        isPortrait = (window.innerWidth<window.innerHeight);
  
   let author=info.authors;
      author = author?author.toString():"";
    return (
       <div className="book" name={name} data-group={group}>
        { props.settings?<Settings
   group={group} name={name}/>:"" }
      <Link to={"/"+props.endpoint+id} onClick={props.select} name={name} data-group={group}>
        <div className={cover?"cover":"cover noCover"} style={cover} name={name} data-group={group}></div>
        {props.settings?"":<div className="bookdes">
          <p name={name} data-group={group}>{title?(title.length>20?title.substring(0,20)+"...":title):null}</p>
          <p name={name} data-group={group}>{author?(author.length>20?author.substring(0,20)+"...":author):null}</p></div>}
      </Link>
      </div>
    );
    }
  }

  
  const mapDispatchToProps_selectBook = (dispatch)=>{
    return bindActionCreators({select: action_selectBook},dispatch);
  }
  
  Book = connect(null,mapDispatchToProps_selectBook)(Book);

  module.exports = Book;