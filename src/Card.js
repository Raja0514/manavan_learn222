import React from "react";
import { Component } from "react/cjs/react.development";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { count: '' };
  }
 myClick() {
    this.setState({ count: this.state.count});
  }
myClick1() {
    this.setState({ count: this.state.count});
}

render() {
    return (
      <React.Fragment>
        <div>
          <h1>Counter App</h1>
          <h1>Count:{this.state.count}</h1>
          <button onClick={this.myClick.bind(this)}>Increment</button>
          <br></br>
          <button onClick={this.myClick1.bind(this)}>Decrement</button>
        </div>
      </React.Fragment>
    );
  }
}
export default Card;
