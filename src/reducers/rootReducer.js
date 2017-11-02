import reducers from "./reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    searchedBooks: reducers.reducer_searched_books,
    searchedTerm: reducers.reducer_searched_term,
    readingBooks: reducers.reducer_reading_books,
    finishedBooks: reducers.reducer_finished_books,
    wannaReadBooks: reducers.reducer_wanna_read_books,
    currentBook: reducers.reducer_currentBook,
    currentUid: reducers.reducer_currentUid,
    lastAction: reducers.reducer_lastAction,
    index: reducers.reducer_index
  });

  module.exports = rootReducer;