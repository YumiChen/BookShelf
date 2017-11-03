import {Component} from "react";
import {connect} from "react-redux";
import Shelf from "./Shelf";
import {bindActionCreators} from "redux";
import action_currentUid from "../actions/action_currentUid";
import debounce from "../functions/debounce";

class ShelfPage extends Component{
    constructor(props){
      super(props);
    }
    componentWillmount(){
      window.removeEventListener("resize",
         debounce(()=>{this.forceUpdate();},500)
         );
    }
    componentDidMount(){
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      window.addEventListener("resize",
      debounce(()=>{this.forceUpdate();},500)
      );
    }
    logout(){
      const self = this;
      // logout from firebase
      firebase.auth().signOut().then(function() {
        sessionStorage.removeItem("user");
        self.props.setCurrentUid("logout");
      }, function(error) {
        // An error happened.
      });
    }
    render(){
      this.logout = this.logout.bind(this);
      return (<div className="shelfPage">
      <div className="shelves">
          <p className="options"><span className="logout" onClick={this.logout}>log out</span></p>
          
          <div>
          <span className="shelfName">Reading</span>
          <Shelf books={this.props.readingBooks} group="reading"
            endpoint="reading/"/>
          </div>
          <div>
          <span className="shelfName">Finished</span>
          <Shelf 
            books={this.props.finishedBooks}     group="finished"
            endpoint="finished/"/>
          </div>
          <div>
          <span className="shelfName">Wishlist</span>
          <Shelf books={this.props.wannaReadBooks} group="wannaRead"
            endpoint="wannaRead/"/>
        </div>
        </div>
        </div>);
    }
  }
  
  const ShelfPage_mapStateToProps=(state)=>{
    return {
            readingBooks: state.readingBooks,
            finishedBooks: state.finishedBooks,
            wannaReadBooks: state.wannaReadBooks
           };
  }

  const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
      setCurrentUid: action_currentUid
    },dispatch);
  }
  
  ShelfPage = connect(ShelfPage_mapStateToProps,mapDispatchToProps)(ShelfPage);
  
  module.exports = ShelfPage;