import React,{Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import Menu from "./Menu";

import action_addReadingBooks from "../actions/action_addReadingBooks";
import action_addFinishedBooks from "../actions/action_addFinishedBooks";
import action_addWannaReadBooks from "../actions/action_addWannaReadBooks";

class BookInfo extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  render(){
    const props = this.props,
          info = props.currentBook.volumeInfo;
    let cover = props.currentBook.volumeInfo.imageLinks?
        { backgroundImage: 'url(' + props.currentBook.volumeInfo.imageLinks.thumbnail + ')'
  }:null,
    group=props.match.params.group,
    eltoshow;
    const uid = sessionStorage.getItem("user");
    
    if(!uid){
      eltoshow = <Menu notLoggedIn="true"/>;      
    }
    else if(group){
      switch(group){
        case "reading":
          eltoshow = <p className="status">You're reading this book</p>;
          break;
        case "finished":
          eltoshow = <p className="status">You've finished reading this book</p>;
          break;
        case "wannaRead":
          eltoshow = <p className="status">This book's in your wishlist</p>;
          break;
      }
    }else{
      const id = props.match.params.id;
      
      if(!eltoshow){
      props.readingBooks.forEach((book)=>{
   if(id==book.id){
        eltoshow = <p className="status">You're reading this book</p>;
        }
      });
      if(!eltoshow){
      props.finishedBooks.forEach((book)=>{
   if(id==book.id){
        eltoshow = <p className="status">You've finished reading this book</p>;
        }
      });
        if(!eltoshow){
      props.wannaReadBooks.forEach((book)=>{
   if(id==book.id){
        eltoshow = <p className="status">This book's in your wishlist</p>;
        }
      });
          if(!eltoshow){
            eltoshow=(<Menu 
         addReadingBooks={props.addReadingBooks}
         addFinishedBooks={props.addFinishedBooks}
         addWannaReadBooks={props.addWannaReadBooks}
         />);
            }// end if(!eltoshow) 4
          }// end if(!eltoshow) 3
        }// end if(!eltoshow) 2
      }// end if(!eltoshow) 1
    }
     if(Object.prototype.toString.call(info.authors)=="[object Object]") info.authors = Object.values(info.authors);
     if(Object.prototype.toString.call(info.categories)=="[object Object]") info.categories = Object.values(info.categories);
    return (<div className="bookInfo">
        <div className="bookInfo_top">
          <div className="bookinfo_book">
            <div className="bookInfo_cover" style={cover}></div>
          </div>
          <div className="bookinfo_detail">
            <p className="bookinfo_title">{info.title}</p>
            <p className="bookinfo_subtitle">{info.subtitle}</p>
            {eltoshow}
            <p>{info.authors?info.authors.join(","):null}</p>
            <p> 
  {"分類: "+info.categories?info.categories.join(","):null}
            </p>
            <p>{info.industryIdentifiers?"ISBN: "+info.industryIdentifiers[0].identifier:""}</p>
            <p>{info.language?"語言: "+info.language:""}</p>
            <p>{info.pageCount?"頁數: "+info.pageCount:null}</p>
            <p>{info.publishedDate?"出版日期: "+info.publishedDate:null}</p>
            <p>{info.publisher?"出版商: "+info.publisher:null}</p>
            {info.previewLink?(<p><a className="previewLink"　target="_blank" href={info.previewLink}>試閱連結</a></p>):null}
            <p></p>
            <p></p>
          </div>
        </div>
        <div className="bookinfo_summary">
          {props.currentBook.volumeInfo.description}
        </div>
      </div>)
    }
  }
  
  const BookInfo_mapStateToProps=(state)=>{
    return {currentBook: state.currentBook,
            readingBooks: state.readingBooks,
            finishedBooks: state.finishedBooks,
            wannaReadBooks: state.wannaReadBooks
           };
  }
  const mapDispatchToProps_bookInfo = (dispatch)=>{
    return bindActionCreators({
      addReadingBooks: action_addReadingBooks,
      addFinishedBooks: action_addFinishedBooks,
      addWannaReadBooks: action_addWannaReadBooks
    },dispatch);
  }
  
  BookInfo = connect(BookInfo_mapStateToProps,mapDispatchToProps_bookInfo)(BookInfo);
      
  module.exports = BookInfo;