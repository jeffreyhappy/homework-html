import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router,Route,hasHistory,IndexRoute,browserHistory} from 'react-router'
import About from './modules/About.js'
import Repo  from './modules/Repo.js'
import Repos  from './modules/Repos.js'
import Home  from './modules/Home.js'

ReactDOM.render(
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>

    </Route>

  </Router>,
  document.getElementById('root')
);
