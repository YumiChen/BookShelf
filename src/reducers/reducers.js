import redux from "redux";
import {setData, loadData} from "../firebaseData";

const reducers = {
    reducer_index:
    (state=31,action)=>{
      if(action.type == "SETINDEX"){
        let num = state;
        return num += 30;
      }
      else if(action.type == "RESETINDEX"){
        return 31;
      }else{
        return state;
      }
    },
    reducer_lastAction:
    (state = null, action)=>{
      return action.type;
    },
    reducer_currentUid:
      (state = null, action)=>{
        if(action.type == "LOGIN" && action.payload!=null){
          return action.payload;
        }else if(action.type == "LOGOUT"){
          return action.payload;
        }
        else{
          // initilization
          return state;
        }
      },
    reducer_searched_books: 
    (state={items:[]},action)=>{
      if(action.type=="SEARCH" && Object.prototype.toString.call( action.payload ) === "[object Object]"){
        return  action.payload || state;
      }else if(action.type=="SEARCHMORE" && Object.prototype.toString.call( action.payload ) === "[object Array]"){
        let result = JSON.parse(JSON.stringify(state));
        result.items = result.items.concat(action.payload);
        return result;
      }else if(action.type=="RESETSEARCHEDBOOKS"){
        return {items:[]};
      }else{
        return state;
        }
    },
    reducer_reading_books: (state=[],
    action)=>{
      if(action.type=="SETREADING"){
        return action.payload;
      }

      let books = state.slice();
      switch(action.type){
        case "ADDREADING":
         books.unshift(action.payload);
        console.log("add reading");
        console.log(books);
         sweetAlert("Success!", "The book is added!", "success");
         return books;
        case "REMOVEREADING":
          books.splice(action.payload,1);
          console.log(books);
          return books;
        default:
          return state
      }
  },
    reducer_finished_books: 
    (state=[],action)=>{
      if(action.type=="SETFINISHED"){
        return action.payload;
      }

      let books = state.slice();
      switch(action.type){
        case "ADDFINISHED":
         books.unshift(action.payload);
          sweetAlert("Success!", "The book is added!", "success");
          return books;
        case "REMOVEFINISHED":
          books.splice(action.payload,1);
          return books;
        default:
          return state;
      }
  },
    reducer_wanna_read_books:
    (state=[],action)=>{
      if(action.type=="SETWANNAREAD"){
        return action.payload;
      }

      let books = state.slice();
      switch(action.type){
        case "ADDWANNAREAD":
         books.unshift(action.payload);
          sweetAlert("Success!", "The book is added!", "success");
          return books;
        case "REMOVEWANNAREAD":
          books.splice(action.payload,1);
          return books;
        default:
          return state;
      }
  },
    reducer_searched_term:
    (state="",action)=>{
      if(action.type == "SETSEARCHEDTERM"){
        return action.payload || state;
      }
        return state;
  },
    reducer_currentBook:
    (state={},action)=>{
    if(action.type=="SELECT")
      return  action.payload || state;
    else
      return state;
  }
  };

  module.exports = reducers;