import {Link} from 'react-router'
import React from 'react'
import '../App.css'
export default React.createClass({
  render(){
    return(
      <Link {...this.props} activeClassName='active'/>
    )
  }
})
