import React,{Component} from 'react'
import {Card} from 'material-ui/Card';
import '../App.css'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {USER_LOGIN,loginAsyc} from '../actions/BookAction'
import { connect } from 'react-redux'
class Login extends Component{
  login(){
    // console.log(require('util').inspect(this.refs.username.getValue()));
    const username = this.refs.username.getValue().trim();
    const psw = this.refs.psw.getValue().trim();
    this.props.dispatch(loginAsyc(username,psw));
    // alert("login un= " + username + " psw= " + psw)
  }
  render(){
    return (
      <div className="login_box">
      <TextField
        hintText="用户名"
        ref="username"
        floatingLabelText="用户名"
      />
      <br />
      <TextField
        hintText="密码"
        ref="psw"
        floatingLabelText="密码"
        type="password"
      />
      <br />
      <RaisedButton label="登录" primary={true} className="marginTop20" onClick={this.login.bind(this)} />
      </div>
    )
  }
}
// export default Login;

export default connect()(Login);
