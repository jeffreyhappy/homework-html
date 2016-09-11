import React ,{Component,PropTypes} from 'React'

class Todo extends Component{
  render(){
    console.log("Todo text = " + this.props.text);
    return(
      <li>
        {this.props.text}
      </li>
    )
  }
}
Todo.propTypes={
  text:PropTypes.string.isRequired
};

export default Todo;
