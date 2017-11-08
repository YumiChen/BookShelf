import {Component} from "react";
import {Provider} from "react-redux";
import { Switch, Route, HashRouter } from "react-router-dom";
import debounce from "../functions/debounce";
import store from "./store";
import BookInfo from "./BookInfo";
import BookShelf from "./BookShelf";
import SearchPage from "./SearchPage";
import Nav from "./Nav";

class App extends Component{
  constructor(props){
    super(props);
    window.addEventListener("resize",
    debounce(()=>{this.forceUpdate();},500)
    );
    this.reset = this.reset.bind(this);
  }
  reset(){

  }
  render(){
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

module.exports = App;