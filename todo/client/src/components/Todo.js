import React ,{Component,PropTypes} from 'react'

class Todo extends Component{
  render(){
    console.log("Todo text = " + this.props.text);
    return(
      <li className="list-group-item" style={this.props.style}  onClick={this.props.onClick}>
        {this.props.text}
      </li>
    )
  }
}
Todo.propTypes={
  text:PropTypes.string.isRequired
};

export default Todo;
