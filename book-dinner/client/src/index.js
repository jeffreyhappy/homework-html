import React from 'react';
import ReactDOM ,{render}from 'react-dom';
import App from './App';
import Today from './modules/Today.js'
import Login from './modules/Login.js'
import './index.css';
import {Provider} from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import createLogger from 'redux-logger'
import {createStore ,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import bookReducer from './reducers/BookReducer.js'
import {Router,Route,hasHistory,IndexRoute,browserHistory} from 'react-router'

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  thunk,loggerMiddleware
)(createStore);

let store = createStoreWithMiddleware(bookReducer)


injectTapEventPlugin();
render(
  <Provider store={store}>
         <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Today} />
                <Route path="login" component={Login}/>
            </Route>
          </Router>
  </Provider>,
  document.getElementById('root')
);


// //参考
// <Provider store={store}>
//      <Router history={history}>
//         <Route path="/" component={Header}>
//             <IndexRoute component={MainContainer} />
//             <Route path="buy" component={Buy}/>
//             <Route path="actives" component={Inbox}/>
//           <Route path='user' component={LoginResister} >
//             <Route path=":id" component={LoginResister} onEnter={userAuth} />
//           </Route>
//         </Route>
//       </Router>
//   </Provider>,
