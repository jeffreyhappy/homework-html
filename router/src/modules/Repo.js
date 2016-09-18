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

class Repo extends Component{
  render(){
    return (
      <div>repoName = {this.props.params.repoName} ,userName = {this.props.params.userName}</div>
    )
  }
}


export default Repo;
