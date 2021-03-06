import React,{Component} from "react";
import {CSSTransitionGroup} from 'react-transition-group';
import {Link} from "react-router-dom";

class Menu extends Component{
    constructor(props){
      super(props);
      this.state={showMenu:false,
                 style: {transformOrigin:"50% 50%",
                        transform: "rotate(0deg)"} };
      this.showMenu = this.showMenu.bind(this);
    }
    showMenu(){
      let flag = this.state.showMenu;
    this.setState({showMenu:!(flag)});
    if(!(flag)){
      this.setState({style: {
        transformOrigin:"50% 50%",
        transform: "rotate(45deg)"}});
    }else{
      this.setState({style: {
        transformOrigin:"50% 50%",
        transform: "rotate(0deg)"}
      });
    }
  }
    render(){
      const props = this.props,
            eltoshow = this.props.notLoggedIn?
      <p><Link to="/bookshelf">Log in to save books!</Link></p>:(<div>
        <p onClick={props.addReadingBooks} data-group="current">I'm reading this!</p>
        <p onClick={props.addFinishedBooks} data-group="current">I've read this!</p>
        <p onClick={props.addWannaReadBooks} data-group="current">I want to read this!</p></div>);
      return(
        <div className="menu">
          <CSSTransitionGroup
            transitionName="menu"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
          >
          {this.state.showMenu?eltoshow:null}
          </CSSTransitionGroup>
            <i className="fa fa-plus plus" aria-hidden="true" style={this.state.style} onClick={this.showMenu}></i>
        </div>
      );
  }}

  module.exports = Menu;