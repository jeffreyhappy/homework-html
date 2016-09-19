export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';


export const USER_BOOK_TODAY = 'USER_BOOK_TODAY';
export const USER_UNBOOK_TODAY = 'USER_UNBOOK_TODAY';

export const TODAY_LIST = "TODAY_LIST"


import fetch from 'isomorphic-fetch'
import Cookies from 'js-cookie'


// var  apiHost = "http://" + window.location.host + "/apis/"
var apiHost = "http://192.168.0.160:3456/apis"

export function initTodayData(todayList){
  return {type:TODAY_LIST,todayList}
}
export function initTodayDataAsyc(){

  return dispatch=>{
    return fetch(apiHost+'/today_list')
        .then(response=>{
          console.log("initDataAsyc middle" + require('util').inspect(response, { depth: null }));
          return response.json();
        })
        .then(value=>{
          console.log("initDataAsyc end" + require('util').inspect(value, { depth: null }));
          // Cookies.set('todo_user', value.todo.userid, { expires: 30 });
          dispatch(initTodayData(value.users));
        })
  }
}

import { browserHistory } from 'react-router'


export function loginAsyc(username,psw){
  return dispatch=>{
    let loginUrl = apiHost + '/login?username='+username+'&psw='+psw;
    return fetch(loginUrl)
            .then(response=>{
              console.log("initDataAsyc middle" + require('util').inspect(response, { depth: null }));
              return response.json();
            })
            .then(result=>{
              console.log("initDataAsyc end" + require('util').inspect(result, { depth: null }));
              if (result.code == 0) {
                alert('登陆成功')
                // Go to /some/path.
                browserHistory.push('/')
              }else {
                alert('登陆失败' + result.msg)
              }
              // Cookies.set('todo_user', value.todo.userid, { expires: 30 });
              // dispatch(initTodayData(result.result));
            })
        }
  }
