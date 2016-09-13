import {combineReducers} from 'redux'

import  {ADD_TODO,TODO_FETCH,COMPLETE_TODO,TOGGLE_TODO,SET_VISIBILITY_FILTER,VisibilityFilters} from '../actions/TodoAction.js'
// import {SHOW_ALL} = VisibilityFilters;

function visibilityFilter(state ,action){
  console.log("reducer visibilityFilter");
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return VisibilityFilters.SHOW_ALL;
  }
}


function todos(state=[],action){

    console.log("reducer todos");
    switch (action.type) {
      case ADD_TODO:
        return [...state,{
          text:action.text,
          completed:false
        }]
        break;
      case COMPLETE_TODO:
        return [
          ...state.slice(0,action.index),
          Object.assign({},state[action.index],{
            completed:true
          }),
          ...state.slice(action.index+1)
        ]
        break;
      case TOGGLE_TODO:
        return [
          ...state.slice(0,action.index),
          Object.assign({},state[action.index],{
            completed:!state[action.index].completed
          }),
          ...state.slice(action.index+1)
        ]
      case TODO_FETCH:
       return [...state,Array.prototype.slice.call(action.todos)];
      default:
      return state;
    }
}

// function todosFetch(state=[],action){
//   switch (action.type) {
//     case TODO_FETCH:
//       return state;
//     default:
//       return state;
//   }
// }

const todoAppReducers = combineReducers({
  visibilityFilter,
  todos
})

export default todoAppReducers
