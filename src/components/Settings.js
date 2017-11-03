import {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import action_addReadingBooks from "../actions/action_addReadingBooks";
import action_addFinishedBooks from "../actions/action_addFinishedBooks";
import action_addWannaReadBooks from "../actions/action_addWannaReadBooks";
import action_removeBooks from "../actions/action_removeBooks";
import promptAlert from "../functions/promptAlert";

class Settings extends Component{
    constructor(props){
      super(props);
      this.state={showDrop:false};
    }
    showDrop(){
      this.setState({showDrop:!this.state.showDrop});
    }
    updateReadingBooks(event){
      event.persist();
      const self = this, e = event ;
      promptAlert("Confirmation","Do you want to move this book to readings section?","Your bookshelf is updated :)!","The action is canceled!",()=>{
        self.props.addReadingBooks(e);
        self.props.removeBooks(e);
      });
    }
    updateFinishedBooks(event){
      event.persist();
      const self = this, e = event ;
     promptAlert("Confirmation","Do you want to move this book to finished section?","Your bookshelf is updated :)!","The action is canceled!",()=>{     this.props.addFinishedBooks(event);
      self.props.addFinishedBooks(e);
      self.props.removeBooks(e);
     });
    }
    updateWannaReadBooks(event){
      event.persist();
      const self = this, e = event ;
      promptAlert("Confirmation","Do you want to move this book to wishlist section?","Your bookshelf is updated :)!","The action is canceled!",()=>{         this.props.addWannaReadBooks(event);
        self.props.addWannaReadBooks(e);
        self.props.removeBooks(e);
      });
    }
    removeBooks(event){
      event.persist();
      const self = this, e = event ;
      promptAlert("Are you sure?","This action can't be reverted!","The book is deleted!","Your book is still safe!",()=>{
         self.props.removeBooks(e);
      });
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