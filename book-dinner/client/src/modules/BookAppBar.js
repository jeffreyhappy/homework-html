import React from 'react'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router'
import {isEmpty} from '../utils/isEmpty'
export default React.createClass({
    render(){
      const {user} = this.props;
      console.log('BookAppBar' + require('util').inspect(user, { depth: null }));
      let div
      if (!isEmpty(user)) {
        div = (
          <div>
            {user.name}
            <FlatButton label="退出"/>
          </div>
        )
      }else {
        div = (
          <div>
            <Link to='/login'><FlatButton label="登录"/></Link>
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
