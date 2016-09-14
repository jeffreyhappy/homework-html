
/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const TODO_FETCH = 'TODO_FETCH'; //远程拉取todo

export const TOGGLE_TODO_ASYC = 'TOGGLE_TODO_ASYC';//通知远程状态


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

export function addTodo(todo) {

  console.log("addTodo");
  return { type: ADD_TODO, todo }
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index }
}

export function toggleTodo(index,todo){
  return {type:TOGGLE_TODO,index,todo}
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function preloadTodo(todos){
  return {type:TODO_FETCH,todos};
}

import fetch from 'isomorphic-fetch'
import Cookies from 'js-cookie'


var apiHost = "http://192.168.0.160:3333"
export function addTodoAsync(text){
  console.log("addTodoAsync start");
  return dispatch =>{
    var userid = Cookies.get('todo_user');
    var paramsId ="";
    if(userid != undefined && userid != 'undefined'){
      paramsId ='&user='+userid;
    }
    return fetch(apiHost+'/asyctodo?text=' + text +paramsId)
          .then(response=>{
            console.log("addTodoAsync middle" + require('util').inspect(response, { depth: null }));
            return response.json();
          })
          .then(value=>{
            console.log("addTodoAsync end" + require('util').inspect(value, { depth: null }));
            Cookies.set('todo_user', value.todo.userid, { expires: 30 });
            dispatch(addTodo(value.todo));
          })
  }
}

export function preloadTodoAsyc(){
  console.log("asyctodo/all start");
  return dispatch =>{
    var userid = Cookies.get('todo_user');
    if (userid == undefined || userid=='undefined') {
      return null;
    }else {
      return fetch(apiHost+'/asyctodo/all?userid='+userid)
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

  export function toggleTodoAsyc(index,todoId){
    console.log("toggleTodoAsyc");
    return dispatch =>{
      var userid = Cookies.get('todo_user');
      if (userid == undefined || userid=='undefined') {
        return null;
      }else {
        return fetch(apiHost+'/asyctodo/toggle?todoId='+todoId)
                .then(response=>{
                  console.log("toggleTodoAsyc middle" + require('util').inspect(response, { depth: null }));
                  return response.json();
                })
                .then(value=>{
                  console.log("toggleTodoAsyc end" + require('util').inspect(value, { depth: null }));
                  if (value.result=='ok') {
                    dispatch(toggleTodo(index,value.todos));
                  }
                })
      }
  }

}
