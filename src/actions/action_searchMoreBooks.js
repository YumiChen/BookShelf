import store from "../components/store";

// query books with google books api
const action_searchMoreBooks = (index)=>{
    const term = store.getState().searchedTerm, 
          api = "https://www.googleapis.com/books/v1/volumes?q="+term+"&maxResults=30"+"&startIndex="+index;
    console.log(api);
    return (dispatch)=>{
      window.fetch(api).then((data)=>{
          return data.json();
        }).then(({items})=>{
          // console.log(items);
          dispatch({
          type: "SEARCHMORE",
          payload: items
          });
        })
        // .catch(err,()=>{alert(err)});
    };
  }

  module.exports = action_searchMoreBooks;