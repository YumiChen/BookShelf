import store from "../components/store";

const action_addWannaReadBooks = (event)=>{
     const group = event.target.getAttribute("data-group"), id=event.target.getAttribute("name");
     switch(group){
         case "current": 
          const currentBook=store.getState().currentBook;
     return {type:"ADDWANNAREAD",
             payload:currentBook
            };
         case "reading":
            return {
              type: "ADDWANNAREAD",
              payload: store.getState().readingBooks[id]
            };
         case "finished":
             return {
              type: "ADDWANNAREAD",
              payload: store.getState().finishedBooks[id]
            };
         case "wannaRead": 
             return {
              type: "ADDWANNAREAD",
              payload: store.getState().wannaReadBooks[id]
            };
     }
     
   }
   
   module.exports = action_addWannaReadBooks;