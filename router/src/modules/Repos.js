// import React from 'react'
//
// export default class React.createClass({
//   render(){
//     return (<div>Repo</div>)
//   }
// })
// import React from 'react'
// export default React.createClass({
//   render() {
//     return <div>Repos</div>
//   }
// })
import React ,{Component} from 'react'
import {Link} from 'react-router'
import NavLink from './NavLink.js'
import {browserHistory} from 'react-router'
class Repos extends Component{

  handleSubmit(event){
      event.preventDefault();
      const userName = event.target.elements[0].value;
      const repo = event.target.elements[1].value;
      const path =  `/repos/${userName}/${repo} `
      console.log(path);
      browserHistory.push(path)
  }



  render(){
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to='/repos/reactjs/react-router'>react router</NavLink></li>
          <li><NavLink to='/repos/facebook/react'>react</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName"/>{' '}
              <input type="text" placeholder="repo"/>{' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}


export default Repos;
