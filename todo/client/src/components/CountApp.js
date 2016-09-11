import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Counter from './Counter.js'

class CountApp extends Component {
  render() {
    console.log("app log  " + require('util').inspect(this.props,{depth:3}));
    var store = this.props.store;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter
          value={store.getState()}
          onIncrement={()=>{
            console.log("app log onIncrement " + require('util').inspect(store,{depth:3}));
            store.dispatch({type:'INCREASE'})
          }}
          onDecrement={()=>{
            store.dispatch({type:'DECREMENT'})
          }}/>

      </div>
    );
  }
}





export default CountApp;
