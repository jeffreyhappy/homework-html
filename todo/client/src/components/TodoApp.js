import React ,{Component,PropTypes} from 'react'
import {addTodo ,addTodoAsync,completeTodo,toggleTodo,setVisibilityFilter,VisibilityFilters} from '../actions/TodoAction';
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'
import { connect } from 'react-redux'

class TodoApp extends Component{
  render(){
    const {dispatch,visibleTodos,visibilityFilter}  = this.props;
    return (
      <div className="container">
        <div className="row text-center marginTop50">
          <div className="col-md-4 col-md-offset-4">
            <div className="title">TODOS</div>
            <AddTodo onAddClick={text=>{
              console.log("AddTodo onAddClick");
              dispatch(addTodoAsync(text));
            }}/>
            <TodoList
              todos = {visibleTodos}
              onTodoClick={index=>{
                console.log('todo click = ' + index);
                dispatch(toggleTodo(index))
              }}
            />
            <div className="bottom-txt"> 点击条目，可以完成该todo</div>
            <Footer
                onFilterChange={nextFilter=>{
                    console.log('Footer click = ' + nextFilter);
                    dispatch(setVisibilityFilter(nextFilter))
                }}
                filter={visibilityFilter}
            />

          </div>
        </div>
      </div>
    )
  }
}

TodoApp.propTypes = {
  visibleTodos:PropTypes.arrayOf(PropTypes.shape({
    text:PropTypes.string.isRequired,
    completed:PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter:PropTypes.oneOf([
    VisibilityFilters.SHOW_ALL,
    VisibilityFilters.SHOW_COMPLETE,
    VisibilityFilters.SHOW_ACTIVE
  ]).isRequired
}


function selectTodos(todos,filter){
  // console.log("selectTodos todo=" + require('util').inspect(todos, { depth: null }));
  // console.log("selectTodos filter = " + filter + " complete = " + VisibilityFilters.SHOW_COMPLETE);
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;

    case VisibilityFilters.SHOW_COMPLETE:
      var ret = todos.filter(todo =>{
        return todo.completed;
      });
      // console.log("selectTodos complete todo=" + require('util').inspect(ret, { depth: null }));
      return  ret;

    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo =>{
        return !todo.completed;
      })

  }
}

function select(state){
  // console.log("TodoApp select" + console.log(require('util').inspect(state.todos, { depth: null })));
  return {
    visibleTodos:selectTodos(state.todos,state.visibilityFilter),
    visibilityFilter:state.visibilityFilter
  }
}

export default connect(select)(TodoApp);
