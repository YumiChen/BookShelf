import {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import action_addReadingBooks from "../actions/action_addReadingBooks";
import action_addFinishedBooks from "../actions/action_addFinishedBooks";
import action_addWannaReadBooks from "../actions/action_addWannaReadBooks";
import action_removeBooks from "../actions/action_removeBooks";


class Settings extends Component{
    constructor(props){
      super(props);
      this.state={showDrop:false};
    }
    showDrop(){
      this.setState({showDrop:!this.state.showDrop});
    }
    updateReadingBooks(event){
    this.props.addReadingBooks(event);
      this.props.removeBooks(event);
      document.getElementsByClassName('title')[0].click();
      // this.forceUpdate();
      // promptAlert("Confirmation","Do you want to move this book to readings section?","Your bookshelf is updated :)!","The action is canceled!",()=>{
      // this.props.addReadingBooks(event);
      // this.props.removeBooks(event);
      // });
    }
    updateFinishedBooks(event){
      this.props.addFinishedBooks(event);
     this.props.removeBooks(event);
      document.getElementsByClassName('title')[0].click();
    // this.forceUpdate();
      // promptAlert("Confirmation","Do you want to move this book to finished section?","Your bookshelf is updated :)!","The action is canceled!",()=>{     this.props.addFinishedBooks(event);
      // this.props.removeBooks(event);
      // });
    }
    updateWannaReadBooks(event){
      this.props.addWannaReadBooks(event);
      this.props.removeBooks(event);
      document.getElementsByClassName('title')[0].click();
      //this.forceUpdate();
      // promptAlert("Confirmation","Do you want to move this book to wishlist section?","Your bookshelf is updated :)!","The action is canceled!",()=>{         this.props.addWannaReadBooks(event);
      // this.props.removeBooks(event);
      // });
    }
    removeBooks(event){
      this.props.removeBooks(event);
      document.getElementsByClassName('title')[0].click();
      // this.forceUpdate();
      // promptAlert("Are you sure?","This action can't be reverted!","The book is deleted!","Your book is still safe!",()=>{
      // this.props.removeBooks(event);
      // });
    }
    render(){
      const group = this.props.group,
            name = this.props.name,
            showDrop = this.showDrop.bind(this);
            this.updateReadingBooks = this.updateReadingBooks.bind(this);
            this.updateFinishedBooks = this.updateFinishedBooks.bind(this);
            this.updateWannaReadBooks = this.updateWannaReadBooks.bind(this);        this.removeBooks = this.removeBooks.bind(this);
      return (
        <div className="settings">
          <i className="fa fa-cog cog" aria-hidden="true" onClick={showDrop} />
          {this.state.showDrop?
            <div data-group={group}>
           {group=="reading"?"":<p data-group={group} data-target="reading" name={name} onClick={this.updateReadingBooks}>Move to reading</p>}
           {group=="finished"?"":<p data-group={group} data-target="finished" name={name} onClick={this.updateFinishedBooks}>Move to finished</p>}
           {group=="wannaRead"?"":<p data-group={group} data-target="finished" name={name} onClick={this.updateWannaReadBooks}>Move to wannaRead</p>}
           <p data-group={group} name={name} onClick={this.removeBooks}>Delete</p>
          </div>:""}
        </div>
        );
        }
    }
    
    // 將刪除修改的action creators綁上去
    const mapDispatchToProps_Settings = (dispatch)=>{
      return bindActionCreators({
        addReadingBooks: action_addReadingBooks,
        addFinishedBooks: action_addFinishedBooks,
        addWannaReadBooks: action_addWannaReadBooks,
        removeBooks: action_removeBooks
      },dispatch);
    }
    
    Settings = connect(null,mapDispatchToProps_Settings)(Settings);      
      
    module.exports = Settings;