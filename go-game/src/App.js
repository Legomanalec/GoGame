import React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Redirect } from 'react-router-dom'
import Routes from './routes'
import Signup from './components/Signup/Signup'

class App extends Component {

  constructor(){
    super();
    this.state={
      appName: "GO Game",
      home:false
    }
  }

  render() {
    return (
      <div className="off-canvas-wrapper">
      <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
      <div className="off-canvas-content" data-off-canvas-content>
      <div className="App">

            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Routes name={this.state.appName}/>


              <br></br><a
                className="myButton"
                href="https://en.wikipedia.org/wiki/Go_(game)"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read About GO
              </a>
            </header>
          </div>
      </div>
      </div>
      </div>
    );
  }
}
export default App;
