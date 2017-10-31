import {loadData} from "../firebaseData";

const action_setBooks = (type,data)=>{
    switch(type){
      case "readingBooks":
        return (dispatch)=>{
          loadData("readingBooks",(data)=>{

              dispatch({
                type: "SETREADING",
                payload: data
              });
          })
        };
      case "finishedBooks":
        return (dispatch)=>{
          loadData("finishedBooks",(data)=>{
              dispatch({
                type: "SETFINISHED",
                payload: data
              });
          })
        };
      case "wannaReadBooks":
        return (dispatch)=>{
          loadData("wannaReadBooks",(data)=>{
              dispatch({
                type: "SETWANNAREAD",
                payload: data
              });
              setTimeout(()=>{
                dispatch({
                  type: "LOGIN",
                  payload: sessionStorage.getItem("user")
                });
              },500);
          })
        };
    }
  }

  module.exports = action_setBooks;