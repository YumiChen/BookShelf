import {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import action_currentUid from "../actions/action_currentUid";
import store from "./store";
import action_setBooks from "../actions/action_setBooks";
import LoadingAnimation from "./LoadingAnimation";

class SignUp extends Component{
    constructor(props){
      super(props);
      this.state = {signUp: true,
        emailhint:"",
        passwordhint:"",
        loading: false
      };
    }
    signUp(event){   
      event.preventDefault();
      this.setState({
        emailhint: "",
        passwordhint:""
      });
      const email = document.getElementById("email").value,
            password = document.getElementById("password").value,
            setCurrentUid = this.props.setCurrentUid,
            self = this;
      let pass = true;
      
      // check if fields are valid
      if(email===""){
        this.setState({
            emailhint:"email is not inputted"
        });
        pass = false;
      }if(password === ""){
        this.setState({
          passwordhint:"password is not inputted"
        });
        pass = false;
      }
      if(!pass) return;

      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
        this.setState({
          emailhint:"email is not valid"
        });
        pass = false;
      }
      if(!pass) return;
      
      this.setState({loading: true});
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(user) {
          // Success
          const uid = user.uid;
          sessionStorage.setItem("user",uid);
          store.dispatch(action_setBooks("readingBooks"));
          store.dispatch(action_setBooks("finishedBooks"));
          store.dispatch(action_setBooks("wannaReadBooks"));
          self.setState({loading: false});
          // setTimeout(()=>{
          //   setCurrentUid("login");
          // },1000);
        })
      .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code,
          errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          switch(errorCode){
          case "auth/weak-password":
            self.setState({passwordhint: errorMessage});
          case "auth/email-already-in-use":
            self.setState({emailhint: "this email is already registerd"});
          }
          self.setState({loading: false});
        });
    }
    signIn(event){
      event.preventDefault();
      this.setState({
        emailhint: "",
        passwordhint:""
      });
      const email = document.getElementById("email").value,password = document.getElementById("password").value,
            setCurrentUid = this.props.setCurrentUid,
            self = this;
      let pass = true;
      if(email===""){
        this.setState({
          emailhint:"email is not inputted"
        });     
        pass = false;
      }if(password === ""){
        this.setState({
          passwordhint:"password is not inputted"
        });            
        pass = false;
      }
      if(!pass) return;
      this.setState({loading: true});
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(user) {
        // Success 
        // console.log(user);
        const uid = user.uid;
        sessionStorage.setItem("user",uid);
        store.dispatch(action_setBooks("readingBooks"));
        store.dispatch(action_setBooks("finishedBooks"));
        store.dispatch(action_setBooks("wannaReadBooks"));
        self.setState({loading: false});
        // setTimeout(()=>{
        //   setCurrentUid("login");
        // },1000);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        self.setState({passwordhint: "password is incorrect",loading: false});
        });
    }
    changeUI(event){
      const val = (event.target.getAttribute("data-val") === "true");
      this.setState({
        emailhint: "",
        passwordhint:""
      });
      this.setState({signUp: val});
    }
    render(){
      const signUp = this.state.signUp,
            props = this.props;
      // binding this
      this.signUp = this.signUp.bind(this);
      this.signIn = this.signIn.bind(this);
      this.changeUI = this.changeUI.bind(this);
      
      return (<form className="sign" onSubmit={signUp?this.signUp:this.signIn
            }>
            {this.state.loading?<LoadingAnimation/>:null}
          <h2>{signUp?"Sign Up":"Sign In"}</h2>
          <div>
          <label>Email: </label>
          <input type="email" placeholder="請輸入信箱..." id="email"/>
          {this.state.emailhint?<p className="hint">  <i className="fa fa-exclamation-circle" aria-hidden="true"/>{" " +this.state.emailhint}</p>:null}
          </div>
          <div>
          <label>Password: </label>
          <input type="password" placeholder="請輸入密碼..." id="password"/>
          {this.state.passwordhint?<p className="hint">  <i className="fa fa-exclamation-circle" aria-hidden="true"/>{" "+this.state.passwordhint}</p>:null}
          </div>
          <input type="submit" value="送出" />
          {signUp?
            <p>Already have an account?<span onClick={this.changeUI} data-val="false"> Sign In</span></p>:
            <p>Don't have an account?<span onClick={this.changeUI} data-val="true"> Sign Up</span></p>}
        </form>);
    }
  }

  
  const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
      setCurrentUid: action_currentUid
    },dispatch);
  }
  
  SignUp = connect(null,mapDispatchToProps)(SignUp);
      

  module.exports = SignUp;