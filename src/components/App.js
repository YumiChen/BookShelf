import {Component} from "react";
import {Provider} from "react-redux";
import { Switch, Route, HashRouter } from "react-router-dom";
import store from "./store";
import BookInfo from "./BookInfo";
import BookShelf from "./BookShelf";
import SearchPage from "./SearchPage";
import Nav from "./Nav";

// const Provider = ReactRedux.Provider;


class App extends Component{
  constructor(props){
    super(props);
    window.addEventListener("resize",
    debounce(()=>{this.forceUpdate();},500)
    );
  }
  reset(){
    window.scrollTo(0,0);
    window.onscroll = null;
    alert("reset");
  }
  render(){
    this.reset = this.reset.bind(this);
    return (
      <Provider store={store}>
        <div>
          <HashRouter>
            <div>
            <Nav/>
            <Switch>
              <Route path="/:group/:isbn" component={BookInfo} onChange={this.reset}/>
              <Route path="/bookshelf" component={BookShelf} onChange={this.reset}/>
              <Route path="/:isbn" component={BookInfo} onChange={this.reset}/>
              <Route path="/" component={SearchPage} onChange={this.reset}/>
            </Switch>
            </div>
          </HashRouter>
        </div>
      </Provider>    
    );
  }
}

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
    var context = this, args = arguments;
    var later = function() {timeout = null;if (!immediate) func.apply(context, args);};
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
      };
};

module.exports = App;