import React, { findDOMNode, Component, PropTypes } from 'react';



class AddTodo extends Component{
  render(){
    return(
      <div>
        <input placeholder="请输入待办事项" ref="input"></input>
        <button onClick={
          e=>{
            this.handleClick(e)
          }
        }>添加</button>
      </div>
    )
  }

  handleClick(e){
    const node = findDOMNode(this.refs.input);
    const text = node.value.trim();
    this.props.onAddClick(text);
  }
}

AddTodo.PropTypes={
  onAddClick:PropTypes.func.isRequired
}

export default AddTodo;
