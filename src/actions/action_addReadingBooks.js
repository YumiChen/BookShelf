import store from "../components/store";

const action_addReadingBooks = (event)=>{
     const group = event.target.getAttribute("data-group"),
    id=event.target.getAttribute("name");
     switch(group){
         case "current": 
     const currentBook=store.getState().currentBook;
     return {type:"ADDREADING",
             payload:currentBook
            };
         case "reading":
            return {
              type: "ADDREADING",
              payload: store.getState().readingBooks[id]
            };
         case "finished":
             return {
              type: "ADDREADING",
              payload: store.getState().finishedBooks[id]
            };
         case "wannaRead": 
             return {
              type: "ADDREADING",
              payload: store.getState().wannaReadBooks[id]
            };
     }
   }

   module.exports = action_addReadingBooks;