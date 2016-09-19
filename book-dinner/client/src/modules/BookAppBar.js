import React from 'react'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

export default React.createClass({
    render(){
      const {user} = this.props;
      console.log(require('util').inspect(user, { depth: null }));
      let div
      if (user != null && user != {} && user != undefined) {
        div = (
          <div>
            {user.name}
            <FlatButton label="退出"/>
          </div>
        )
      }else {
        div = (
          <div>
            <FlatButton label="登录"/>
          </div>
        )
      }
      return (
        <div>
          <AppBar title="今日订餐"
            iconElementRight={
              div
            } >
          </AppBar>
        </div>
      )
    }
})
