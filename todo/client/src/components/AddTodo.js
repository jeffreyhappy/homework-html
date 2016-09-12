import React, { findDOMNode, Component, PropTypes } from 'react';



class AddTodo extends Component{

  render(){
    return(
      <div className="input-group ">
        <input type="text" className="form-control " placeholder="请输入待办事项" ref="input" onKeyDown={this.handleSubmit.bind(this)}></input>
        <span  className="input-group-btn">
          <button onClick={
            e=>{
              this.handleClick(e)
            }
          } className="btn btn-default">添加</button>
        </span>
      </div>

    )
  }

  handleSubmit(e){
    if (e.which === 13 ) {
      this.handleClick(e);
    }
  }

  handleClick(e){
    // const node = findDOMNode(this.refs.input);
    const text = this.refs.input.value.trim();
    if (text =="" || text == null) {
      alert('请输入文字')
      return;
    }
    this.props.onAddClick(text);
    // node.value='';
    this.refs.input.value = '';

    console.log("handleClick");
  }
}

AddTodo.PropTypes={
  onAddClick:PropTypes.func.isRequired
}

export default AddTodo;
