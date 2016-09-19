
import  {TODAY_LIST} from '../actions/BookAction.js'

function book(state,action){
  console.log("reducer start " +require('util').inspect(state, { depth: null }));
  switch (action.type) {
      case TODAY_LIST:
       var ret = Object.assign({},{todayList:action.todayList});
       console.log("reducer ret " + require('util').inspect(ret, { depth: null }));
       return ret;
  }
  return state;
}



export default book;
