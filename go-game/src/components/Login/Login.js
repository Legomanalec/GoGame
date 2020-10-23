import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './Login.css';

class Login extends Component {

  constructor(){
    super();

    this.state = {
     username: '',
     password: '',
     redirectToReferrer: false
    };


  }






  render() {

     if (this.state.redirectToReferrer) {
      return (<Redirect to={'/home'}/>)
    }

    if(sessionStorage.getItem('userData')){
      return (<Redirect to={'/home'}/>)
    }

     return (
      <div className="row" id="Body">
        <div className="medium-5 columns left">
        <h4>Login</h4>
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" onChange={this.onChange}/><br></br>
        <label>Password</label>
        <input type="password" name="password"  placeholder="Password" onChange={this.onChange}/><br></br>
        <input type="submit" className="button success" value="Login" onClick={this.login}/><br></br>
        <a href="/signup">Registration</a>
        </div>
      </div>
    );
  }
}

export default Login;
