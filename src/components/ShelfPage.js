import {Component} from "react";
import {connect} from "react-redux";
import Shelf from "./Shelf";

class ShelfPage extends Component{
    constructor(props){
      super(props);
      // this.state = {user: null};
    }
    componentDidReceiveProps(){
      console.log("receive props");
    }
    render(){
      return (<div className="shelfPage">
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
        </div></div>);
    }
  }
  
  const ShelfPage_mapStateToProps=(state)=>{
    return {
            readingBooks: state.readingBooks,
            finishedBooks: state.finishedBooks,
            wannaReadBooks: state.wannaReadBooks
           };
  }
  
  ShelfPage = connect(ShelfPage_mapStateToProps,null)(ShelfPage);
  
  module.exports = ShelfPage;