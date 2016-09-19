import React,{Component,PropTypes} from 'react'
import BookAppBar from './BookAppBar';
import BookList from './BookList.js'
import BottomBtn from './BottomBtn.js'
import { connect } from 'react-redux'
import {initTodayDataAsyc} from '../actions/BookAction'

class Today extends Component {
  componentDidMount(){
    console.log("App componentDidMount")
    this.props.dispatch(initTodayDataAsyc())
  }


  render(){
    const {user,todayList} = this.props;
    return (
      <div className="App">
        <BookAppBar user = {user}/>
        <BookList todayList = {todayList}/>
        <BottomBtn />
      </div>
    )
  }
}



Today.propTypes = {
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
function filterUer(state){
  if (state == null || state == undefined || state == 'undefined') {
    return {};
  }else {
    return state.user
  }
}

function filterTodayList(state){
  if (state == null || state == undefined || state == 'undefined') {
    return [];
  }else {
    return state.todayList
  }
}
function connectFilter(state){
  console.log('connectFilter' + require('util').inspect(state, { depth: null }));
  return {
    user:filterUer(state),
    todayList:filterTodayList(state)
  }
}
export default connect(connectFilter)(Today);
