import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link,IndexLink} from "react-router"
import NavLink from './modules/NavLink.js'
import Home from './modules/Home'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <ul >
            <li><NavLink to="about" >About</NavLink></li>
            <li><NavLink to="repos" >repos</NavLink></li>

            <li><NavLink  to="/" onlyActiveOnIndex={true}>home</NavLink></li>
          </ul>
          {this.props.children}
      </div>
    );
  }
}

export default App;
