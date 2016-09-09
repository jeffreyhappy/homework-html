import React ,{Component} from 'react';

class Counter extends Component{
  render(){
    const {value ,onIncrement ,onDecrement } = this.props;
    return (
      <div>
        Clicked: {value} times
        <div>
          <button onClick={onIncrement}>增加</button>
          <button onClick={onDecrement}>减少</button>
        </div>
      </div>
    )
  }
}


export default Counter
