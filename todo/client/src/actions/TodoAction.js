
/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const TODO_FETCH = 'TODO_FETCH'; //远程拉取todo
/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETE: 'SHOW_COMPLETE',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action 创建函数
 */

export function addTodo(text) {

  console.log("addTodo");
  return { type: ADD_TODO, text }
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index }
}

export function toggleTodo(index){
  return {type:TOGGLE_TODO,index}
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function preloadTodo(todos){
  return {type:TODO_FETCH,todos};
}

import fetch from 'isomorphic-fetch'
import Cookies from 'js-cookie'

export function addTodoAsync(text){
  console.log("addTodoAsync start");
  return dispatch =>{
    var userid = Cookies.get('todo_user');
    var paramsId =  userid == undefined ? '': ('&user='+userid);
    return fetch('http://localhost:3333/asyctodo?text=' + text +paramsId)
          .then(response=>{
            console.log("addTodoAsync middle" + require('util').inspect(response, { depth: null }));
            return response.json();
          })
          .then(value=>{
            console.log("addTodoAsync end" + require('util').inspect(value, { depth: null }));
            Cookies.set('todo_user', value.userid, { expires: 30 });
            dispatch(addTodo(value.text));
          })
  }
}

export function preloadTodo(){
  console.log("asyctodo/all start");
  return dispatch =>{
    var userid = Cookies.get('todo_user');
    if (userid == undefined) {
      return null;
    }else {
      return fetch('http://localhost:3333/asyctodo/all?userid='+userid)
              .then(response=>{
                console.log("asyctodo/all middle" + require('util').inspect(response, { depth: null }));
                return response.json();
              })
              .then(value=>{
                console.log("asyctodo/all end" + require('util').inspect(value, { depth: null }));
                if (value.result=='ok') {
                  dispatch(preloadTodo(value.todos));
                }
              })
    }
  }
}
