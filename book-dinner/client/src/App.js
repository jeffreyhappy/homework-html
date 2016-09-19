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

  componentDidMount(){
    console.log("App componentDidMount")
    this.props.dispatch(initTodayDataAsyc())
  }

  render() {
    const {user ,todayList} = this.props;
    return (
      <MuiThemeProvider>
        <div className="App">
          <BookAppBar user = {user}/>
          <BookList todayList = {todayList}/>
          <BottomBtn />
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  user:PropTypes.shape({
    name:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
  }).isRequired,
  todayList:PropTypes.arrayOf(PropTypes.shape({
    name:PropTypes.string.isRequired,
    time:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired,
  }).isRequired).isRequired
}

function connectFilter(state){
  console.log('connectFilter' + require('util').inspect(state, { depth: null }));
  return {
    user:state == undefined?{}:state.user,
    todayList:state == undefined ?[] :state.todayList
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
export default connect(connectFilter)(App);
