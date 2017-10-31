import {Component} from "react";
import Book from "./Book";
import Slider from "react-slick";
// var Slider = require('react-slick');

let Shelf =(props)=>{
  const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5
    };
  var isPortrait = (window.innerWidth<(window.innerHeight/1.5));
  if(isPortrait){
      settings.slidesToShow = 2;
      settings.slidesToScroll = 2;
  }
  let books = []; 
    if( Object.prototype.toString.call( props.books ) === '[object Array]'){ 
      books = props.books.map((book,index)=>{ 
  return (<div><Book 
                 key={index} 
                 name={index} 
                 data-index={index} 
                 info={book}
                 group={props.group}
                 settings={true}
                 endpoint={props.endpoint}
                 onClick={props.select}
            /></div>);   
    });                                       
  }
  
  return (
      <div className="slider">
      <Slider {...settings}>
        {books}
      </Slider>
      </div>);
}
  // {books==[]?books:<p>There's no book here</p>}
  
  module.exports = Shelf;