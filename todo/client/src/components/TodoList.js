import React ,{Component,PropTypes} from 'react'
import Todo from './Todo.js';


class TodoList extends Component{


  render(){
    console.log("TodoList render " + require('util').inspect(this.props, { depth: null }));
    return(
      <ul className="list-group marginTop20">
        {this.props.todos.map((todo,index)=>{
          return (<Todo {...todo}
                key={index}
                onClick={()=>{
                  this.props.onTodoClick(index,todo.id)
                }}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  cursor:todo.completed ? 'default':'pointer'}}
                />)
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
