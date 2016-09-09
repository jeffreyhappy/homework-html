import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Counter from './components/Counter.js'

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);

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
  // console.log(store.getState());
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
})
