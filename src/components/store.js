import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import rootReducer from "../reducers/rootReducer";
import {setData} from "../firebaseData";
import action_setBooks from "../actions/action_setBooks";

const store = createStore(rootReducer,applyMiddleware(thunk));

store.dispatch(action_setBooks("readingBooks"));
store.dispatch(action_setBooks("finishedBooks"));
store.dispatch(action_setBooks("wannaReadBooks"));

store.subscribe(()=>{
  const action = store.getState().lastAction;
  console.log(action);
  if(action == "ADDFINISHED" || action == "ADDREADING" ||
      action == "ADDWANNAREAD" || action == "REMOVEREADING" ||
      action == "REMOVEFINISHED" || action == "REMOVEWANNAREAD"){
        saveStore(store.getState());
  }
});

function saveStore(state){
let books =  {readingBooks: state.readingBooks,
  finishedBooks: state.finishedBooks,
  wannaReadBooks: state.wannaReadBooks};
  setData(books);
// books = JSON.stringify(books);
// try{
// localStorage.setItem("books",
//  books
// );
// }catch(err){
// }
}

module.exports = store;