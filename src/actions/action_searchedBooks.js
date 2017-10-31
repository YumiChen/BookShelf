import store from "../components/store";

// query books with google books api
const action_searchedBooks = ()=>{
    const term = store.getState().searchedTerm, 
    // const term = document.getElementById("searchInput").value, 
          fetch = window.fetch("https://www.googleapis.com/books/v1/volumes?q="+term+"&maxResults=30");
  
    return (dispatch)=>{
      fetch.then((data)=>{
          return data.json();
        }).then((data)=>{
          // console.log(data);
          // const items = data.items;
          dispatch({
          type: "SEARCH",
          payload: data
          });
        })
        // .catch(err,()=>{alert(err)});
    };
  }

  module.exports = action_searchedBooks;