import React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome/Welcome'
import { Redirect } from 'react-router-dom'
import Routes from './routes'

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
            <Routes name={this.state.appName}/>
              <img src={logo} className="App-logo" alt="logo" />

              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
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
