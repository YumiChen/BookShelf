import {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import SearchBar from "./SearchBar";
import Book from "./Book";
import LoadingAnimation from "./LoadingAnimation";
import action_searchMoreBooks from "../actions/action_searchMoreBooks";
import action_searchedBooks from "../actions/action_searchedBooks";
import action_setIndex from "../actions/action_setIndex";
import action_searchedTerm from "../actions/action_searchedTerm";
// let index = 1;

// get searched term from search bar
class SearchPage extends Component{
    constructor(props){
      super(props);
      const len = this.props.searchedBooks.items?this.props.searchedBooks.items.length:null,
            fullLen = this.props.searchedBooks.totalItems;
      let hint;
      if(fullLen!=null && len != null){
        if(fullLen==0 || this.props.searchedBooks.items === undefined){
          hint = "No results";
        }else if(len < fullLen){
          hint = "Search more...";
        }else if(len >= fullLen){
          hint = "No more results";
        }
        this.state = {
          hint: hint,
          prevState: null,
          prevProps: null
        };
      }else{
        this.state = {
          hint: "Click send to search...",
          prevState: null,
          prevProps: null
        };
      }
    }
    componentWillUnmount(){
      window.onscroll = null;
    }
    // shouldComponentUpdate(prevProps,prevState){
    //   if(prevProps!=prevState){
    //     return true;
    //   }
    //   return false;
    // }
    componentDidUpdate(prevProps,prevState){
      // it should be ready
      if(this.props.searchedBooks.totalItems && this.props.searchedBooks.items.length){
        // it should not fall in infinite loop
        if((prevState != this.state.prevState && prevProps != this.state.prevProps)){
          this.setState({
            prevProps: prevProps,
            prevState: prevState
          });
          const len = this.props.searchedBooks.items.length,
                fullLen = this.props.searchedBooks.totalItems;
          let hint;
          console.log(len);
          console.log(fullLen);
          this.setState({hint: ""});
          if(fullLen==0){
            hint = "No results";
          }else if(len < fullLen){
            hint = "Search more...";
          }else if(len >= fullLen){
            hint = "No more results";
          }
          this.setState({hint: hint});
          window.onscroll = (function(ev) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
             alert(); // not fired in mobile
             this.searchMore();
              }
          }).bind(this);
        }
      }
    }
    componentDidMount(){
      if(this.props.searchedTerm){
        console.log(this.props.searchedTerm);
        document.getElementById("searchInput").value = this.props.searchedTerm;
        window.onscroll = (function(ev) {
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
           alert(); // not fired in mobile
           this.searchMore();
            }
        }).bind(this);
      }
    }
    search(event){
        event.preventDefault();
        const val = document.getElementById("searchInput").value;
        if(val == ""){
          this.setState({hint: "Please input the search term!"});
          return;
        }
        this.props.setIndex("reset");                       
        this.props.setSearchedTerm(val);
        this.props.search();
        this.setState({hint: "Searching..."});
    }
    searchMore(){
      // this.setState({index: index += 30});
      this.props.setIndex();
      this.props.searchMore(this.props.index);
      this.setState({hint: "Searching..."});
    }
    render(){
      this.search = this.search.bind(this);
      this.searchMore = this.searchMore.bind(this);
      let books = [], total = this.props.searchedBooks.totalItems;

      console.log("search page");
        if(this.props.searchedBooks.items){
          books = this.props.searchedBooks.items.map((book,index)=>{
            return <Book key={index} 
                    name={index} 
                    info={book} 
                    group="searched" 
                    endpoint=""/>;
              });     
        }                                   
    return (
      <div>
        <SearchBar onSubmit={this.search}/>
          <div className="searchedBooks" >
          {(total && total > 0)?<p className="searchHint">{"共"+total+"筆結果"}</p>:null}
            {books}
          <p className="searchHint">{this.state.hint}</p>
          </div>
          {this.state.hint == "Searching..."?<LoadingAnimation/>:null}
      </div>
    );
    }
  }

  const SearchPage_mapStateToProps=(state)=>{
    return {
      searchedBooks: state.searchedBooks,
      index: state.index,
      searchedTerm: state.searchedTerm
    };
  }
  
  const SearchPage_mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
      search: action_searchedBooks,
      searchMore: action_searchMoreBooks,
      setIndex: action_setIndex,
      setSearchedTerm: action_searchedTerm
      },dispatch);
  }
  
  SearchPage = connect(SearchPage_mapStateToProps,SearchPage_mapDispatchToProps)(SearchPage);

  module.exports = SearchPage;