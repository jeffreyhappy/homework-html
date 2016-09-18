import React from 'react'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

export default React.createClass({
    render(){
      return (
        <div>
          <AppBar title="今日订餐"
            iconElementRight={<FlatButton label="订餐"/>} />
        </div>
      )
    }
})
