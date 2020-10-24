import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './Signup.css';

class Signup extends Component {

  constructor(){
    super();

    this.state = {
      fields: {},
      errors: {},
     redirectToReferrer: false
   }
     this.handleChange = this.handleChange.bind(this);
     this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    };

  handleChange(e) {
        this.setState({[e.target.name]:e.target.value});
      }

  submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            alert("Username: " + this.state.fields["username"] + " Password: " + this.state.fields["password"]);
            let fields = {};
            fields["username"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
            this.props.history.push('/');
        }
      }


  validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

      if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }

        if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.\n\
          At least 8 characters,\n 1 special symbol from @#$%&,\n 1 capital letter, 1 small letter, 1 number";
        }
      }

        this.setState({
          errors: errors
        });
        return formIsValid;
      }

  render() {

     if (this.state.redirectToReferrer) {
      return (<Redirect to={'/home'}/>)
    }

    if(sessionStorage.getItem('userData')){
      return (<Redirect to={'/home'}/>)
    }

     return (
      <div className="row" id="main-registration-container">
        <div className="medium-5 columns left" id="register">
        <h4>Registration</h4>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>Username </label>
        <input type="text" name="username" placeholder="username" value={this.state.fields.username} onChange={this.handleChange}/><br></br>
        <div style={{ fontSize: 12, color: "red" }} className="errorMsg">{this.state.errors.username}</div>
        <label>Password </label>
        <input type="password" name="password" placeholder="password" value={this.state.fields.password} onChange={this.handleChange}/><br></br>
        <div style={{ fontSize: 12, color: "red" }} className="errorMsg">{this.state.errors.password}</div>
        <input type="submit" className="button" value="Register"/><br></br>
        </form>
        <a style={{ fontSize: 12}} href="/" className="button">Home</a><br></br>
        </div>
      </div>
    );
  }
}

export default Signup;
