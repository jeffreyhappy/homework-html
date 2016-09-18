import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
ReactDOM.render(
  <App />,
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
