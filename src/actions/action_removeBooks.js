const action_removeBooks = (event)=>{
    const group = event.target.getAttribute("data-group"),
          id=event.target.getAttribute("name");
    switch(group){
    case "reading":
    return {
              type:"REMOVEREADING",
              payload: id
            };
    case "finished":
            return {
              type:"REMOVEFINISHED",
              payload: id
            };
    case "wannaRead":
            return {
              type:"REMOVEWANNAREAD",
              payload: id
            };
    }
  }

  module.exports = action_removeBooks;