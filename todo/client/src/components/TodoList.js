import React ,{Component,PropTypes} from 'React'
import Todo from './Todo.js';


class TodoList extends Component{
  render(){
    return(
      <ul>
        {this.props.todos.map((todo,index)=>{
          console.log("todo map " + todo.text);
          return (<Todo {...todo}
                key={index}
                onClick={this.props.onTodoClick} />)
        })}
      </ul>
    )
  }
}

TodoList.propTypes={
  onTodoClick:PropTypes.func.isRequired,
  todos:PropTypes.arrayOf(PropTypes.shape({
    text:PropTypes.string.isRequired,
    completed:PropTypes.bool.isRequired
  }).isRequired).isRequired
}

export default TodoList;
