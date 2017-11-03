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
import action_setBooks from "../actions/action_setBooks";

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
          isBack: false
        };
      }else{
        this.state = {
          hint: "Click send to search...",
          isBack: false
        };
      }
    }
    componentWillUnmount(){
      window.onscroll = null;
    }
    componentDidUpdate(prevProps,prevState){
      // it should be ready
      if(this.props.searchedBooks.totalItems && this.props.searchedBooks.items.length){
        // it should not fall in infinite loop
        if(this.props.lastAction == "SEARCHMORE" && this.state.isBack){
          const len = this.props.searchedBooks.items.length,
                fullLen = this.props.searchedBooks.totalItems;
          let hint;
          this.setState({hint: ""});
          if(fullLen==0){
            hint = "No results";
          }else if(len < fullLen){
            hint = "Search more...";
          }else if(len >= fullLen){
            hint = "No more results";
          }
          this.setState({hint: hint, isBack:false});
          window.onscroll = (function(ev) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
             this.searchMore();
              }
          }).bind(this);
        }
      }

      if(this.props.lastAction == "SEARCH" && this.state.isBack){
        const len = this.props.searchedBooks.items.length,
              fullLen = this.props.searchedBooks.totalItems;
        let hint;
        this.setState({hint: ""});
        if(fullLen==0){
          hint = "No results";
        }else if(len < fullLen){
          hint = "Search more...";
        }else if(len >= fullLen){
          hint = "No more results";
        }
        this.setState({hint: hint, isBack:false});
        window.onscroll = (function(ev) {
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
           this.searchMore();
            }
        }).bind(this);
      }
    }
    componentDidMount(){
      if(this.props.searchedTerm){
        document.getElementById("searchInput").value = this.props.searchedTerm;
        window.onscroll = (function(ev) {
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
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
        this.setState({
            hint: "Searching...",
            isBack:true}
        );
    }
    searchMore(){
      this.props.setIndex();
      this.props.searchMore(this.props.index);
      this.setState({hint: "Searching...", isBack:true});
    }
    scrollToTop(){
      // scroll to top
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    clear(){
      this.props.setSearchedTerm();
      this.props.setBooks("resetSearchedBooks");
      this.props.setIndex("reset");
      this.setState({hint: "Click send to search..."});
    }
    render(){
      this.search = this.search.bind(this);
      this.searchMore = this.searchMore.bind(this);
      this.scrollToTop = this.scrollToTop.bind(this);
      this.clear = this.clear.bind(this);
      let books = [], total = this.props.searchedBooks.totalItems;

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
          {this.props.searchedBooks.items.length != 0?<i onClick ={this.scrollToTop} className="fa fa-arrow-circle-o-up scrollToTop" aria-hidden="true"></i>:null}
          {(total && total > 0)?<p className="searchHint">{"共 "+total+" 筆結果"}<span className="clear" onClick={this.clear}>Clear</span></p>:null}
            {books}
          <p className={this.state.hint == "Search more..."?"searchHint clickable":"searchHint"}
              onClick = {this.state.hint == "Search more..."?this.searchMore:null}
            >{this.state.hint}</p>
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
      searchedTerm: state.searchedTerm,
      lastAction: state.lastAction
    };
  }
  
  const SearchPage_mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
      search: action_searchedBooks,
      searchMore: action_searchMoreBooks,
      setIndex: action_setIndex,
      setSearchedTerm: action_searchedTerm,
      setBooks: action_setBooks
      },dispatch);
  }
  
  SearchPage = connect(SearchPage_mapStateToProps,SearchPage_mapDispatchToProps)(SearchPage);

  module.exports = SearchPage;