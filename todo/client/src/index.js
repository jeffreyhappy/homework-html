import React from 'react';
import ReactDOM from 'react-dom';
import CountApp from './components/CountApp';
import './index.css';

import {createStore} from 'redux';


function counter(state=0,action){
  switch (action.type) {
    case 'INCREASE':
      return state+1;
      break;
    case 'DECREMENT':
      return state-1;
      break;
    default:

  }
}

let store = createStore(counter);

store.subscribe(()=>{
  console.log("store subscribe " + require('util').inspect(store, { depth: null }));
  ReactDOM.render(
    <CountApp store={store}/>,
    document.getElementById('root')
  );
})

ReactDOM.render(
  <CountApp store={store}/>,
  document.getElementById('root')
);
