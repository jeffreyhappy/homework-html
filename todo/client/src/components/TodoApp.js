import React ,{Component,PropTypes} from 'React'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

class TodoApp extends Component{
  render(){
    return (
      <div>
        <AddTodo onAddClick={text=>{
          console.log("AddTodo text = " + text);
        }} />
        <TodoList
          todos={
            [
              {
                text:'use redux',
                completed:true
              },
              {
                text:'use redux line 2',
                completed:true
              }
            ]
          }

          onTodoClick={todo=>{
            console.log('todo click = ' + todo.text);
          }}
        />
        <Footer
            onFilterChange={e=>{
                console.log('Footer click = ' + e);
            }}
            filter={'SHOW_ALL'}
        />
      </div>
    )
  }
}

export default TodoApp;
