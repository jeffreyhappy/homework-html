import React, { Component ,PropTypes} from 'react';
import logo from './logo.svg';
import './App.css';
import BookAppBar from './modules/BookAppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BookList from './modules/BookList.js'
import BottomBtn from './modules/BottomBtn.js'
import { connect } from 'react-redux'
import {initTodayDataAsyc} from './actions/BookAction'

class App extends Component {



  render() {
    // const {user ,todayList} = this.props;
    var test= {};
  
    return (
      <MuiThemeProvider>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}


// todayList:[
//   {
//     name:'li',
//     icon:'icon',
//     time:'1990:00:00'
//   },
//   {
//     name:'li2',
//     icon:'icon',
//     time:'1990:00:00'
//   },
//   {
//     name:'li3',
//     icon:'icon',
//     time:'1990:00:00'
//   }
// ]
export default connect()(App);
