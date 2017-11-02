import store from "../components/store";

// select book to show details
const action_selectBook = (event)=>{
    window.scrollTo(0,0);
    const id =event.target.getAttribute("name"),
          group = event.target.getAttribute("data-group");
    // accessing other state...
    switch(group){
      case "searched":
        return ({
          type: "SELECT",
          payload: store.getState().searchedBooks.items[id]
    });
      case "reading":
        return ({
          type: "SELECT",
          payload: store.getState().readingBooks[id]
    });
      case "finished":
        return ({
          type: "SELECT",
          payload: store.getState().finishedBooks[id]
    });
      case "wannaRead":
        return ({
          type: "SELECT",
          payload: store.getState().wannaReadBooks[id]
    });
      default:
    }
    
  }
  
  module.exports = action_selectBook;