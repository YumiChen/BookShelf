import store from "../components/store";

const action_addFinishedBooks = (event)=>{
    const group = event.target.getAttribute("data-group"),   id=event.target.getAttribute("name");
    switch(group){
        case "current": 
          const currentBook=store.getState().currentBook;
          return {type:"ADDFINISHED",
                  payload:currentBook
                };
        case "reading":
           return {
             type: "ADDFINISHED",
             payload: store.getState().readingBooks[id]
           };
        case "finished":
            console.log("Finished");
            return {
             type: "ADDFINISHED",
             payload: store.getState().finishedBooks[id]
           };
        case "wannaRead": 
            return {
             type: "ADDFINISHED",
             payload: store.getState().wannaReadBooks[id]
           };
    }
  }

  module.exports = action_addFinishedBooks;