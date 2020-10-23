import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Login.css';
import '../../App.css';

class Login extends Component {

  constructor(){
    super();

    this.state = {
     username: '',
     password: '',
     redirect: false,
    };

    this.handleLogin = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  login() {
    var resultUsernameCheck = this.alphaNumCheck(document.getElementById("username").value);
    var resultPasswordCheck = this.alphaNumCheck(document.getElementById("password").value);

    if(resultUsernameCheck && resultPasswordCheck){
      this.setState({redirect: true});
    }
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
  }

  alphaNumCheck(entry) {
      let regex = /^[a-z0-9]+$/i;
      if (entry != null && entry.match(regex)) {
          return true;
      } else {
          return false;
      }
  }

  render() {
    if (this.state.redirect){
      return (<Redirect to={'/home'}/>)
    }

     return (
      <div className="row" id="Body">
        <div className="medium-5 columns left">
        <h4>Login</h4>
        <form className="form-style-4"onSubmit={this.handleLogin}>
          <label>Username</label><br></br>
          <input type="text" id="username" name="username" placeholder="Username" onChange={this.handleChange}/><br></br><br></br>

          <label>Password</label><br></br>
          <input type="password" id="password" name="password"  placeholder="Password" onChange={this.handleChange}/><br></br><br></br>

          <input type="submit" value="Submit" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="button" value="Register" onClick="/signup" />
        </form><br></br>

        </div>
      </div>
    );
  }
}

export default Login;
