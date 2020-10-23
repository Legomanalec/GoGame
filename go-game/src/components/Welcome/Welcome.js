import React, {Component} from 'react';
import './Welcome.css';
import Login from '../Login/Login.js'
import { Redirect } from 'react-router-dom'


class Welcome extends Component {
//   state = {
//     redirectSignup: false,
//     redirectLogin: false,
//     redirectFindGame: false,
//     target: ''
//   }
//
// setRedirectLogin = () => {
//   this.setState({
//     redirectLogin:true,
//     target: '../Login/Login.js'
//   })
// }
//
// setRedirectLogin = () => {
//   this.setState({
//     redirectSignup:true,
//     target: '../Signup/Signup.js'
//   })
// }
//
// setRedirectLogin = () => {
//   this.setState({
//     redirectFindGame:true,
//     target: '../FindGame/FindGameAsGuest/FindGameAsGuest.js'
//   })
// }
//
// renderRedirect = () => {
//   if (this.state.redirectLogin || this.state.redirectSignup || this.state.redirectFindGame) {
//     return <Redirect to="{target}" />
//   }
// }


render() {
  const { redirect } = this.setState;
return (
<div className="row">
<div className="medium-12 columns">
<h2 id="welcomeText">Go Game</h2>

<a href="/login" className="button">Login</a><br></br>
<a href="/signup" className="button">Signup</a><br></br>
<a href="/findGameAsGuest" className="button">Find Game As Guest</a><br></br>


</div>
</div>
);
}
}
export default Welcome;
