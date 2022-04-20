import React from "react";
class Counter extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       counter: 0,
  //     };
  //   }
  state = {
    counter: 0,
  };

  handleIncrement = () => {
    //   never mutate the state directly
    // if you want to mutate the state use setState
    this.setState({ counter: this.state.counter + 1 });
  };
  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <p>count:{this.state.counter}</p>

        <button onClick={this.handleIncrement} className="btn btn-info ml-2">
          Increment
        </button>
        <button onClick={this.handleDecrement} className="btn btn-info ml-2">
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
