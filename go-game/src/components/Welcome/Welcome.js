import React, {Component} from 'react';
import './Welcome.css';
import { Redirect } from 'react-router-dom'


class Welcome extends Component {

render() {
    const { redirect } = this.setState;

    return (
      <div className="row">
        <div className="medium-12 columns">
          <h2 id="welcomeText">Go Game</h2>
          <a href="/login" className="button">Login/Register</a><br></br><br></br>
          <a href="/findGameAsGuest" className="button">Find Game As Guest</a><br></br><br></br>
        </div>
      </div>
    );
  }
}
export default Welcome;
