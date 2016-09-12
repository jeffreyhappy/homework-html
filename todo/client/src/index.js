import React from 'react';
import ReactDOM,{render} from 'react-dom';
import TodoApp from './components/TodoApp';
import './css/TodoApp.css';

import {createStore ,applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import todoAppReducers from './reducers/reducers'
import createLogger from 'redux-logger'


let rootElement = document.getElementById('root');

const loggerMiddleware = createLogger()
const createStoreWithMiddleware = applyMiddleware(
  loggerMiddleware
)(createStore)


let store = createStoreWithMiddleware(todoAppReducers);
render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
)
// ReactDOM.render(
//   <TodoApp />,
//   document.getElementById('root')
// );

//这里是todo的
// function counter(state=0,action){
//   switch (action.type) {
//     case 'INCREASE':
//       return state+1;
//       break;
//     case 'DECREMENT':
//       return state-1;
//       break;
//     default:
//
//   }
// }
//
// let store = createStore(counter);
//
// store.subscribe(()=>{
//   console.log("store subscribe " + require('util').inspect(store, { depth: null }));
//   ReactDOM.render(
//     <CountApp store={store}/>,
//     document.getElementById('root')
//   );
// })
//
// ReactDOM.render(
//   <CountApp store={store}/>,
//   document.getElementById('root')
// );
