import React from "react";
import { Component } from "react/cjs/react.development";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };

    this.handleChange=this.handleChange.bind(this)

  }
<<<<<<< HEAD

  handleChange(event){

    this.setState({
      name:event.target.value
    })
  }
 
=======
 myClick() {
    this.setState({ count: this.state.count});
  }
myClick1() {
    this.setState({ count: this.state.count});
}
>>>>>>> e997f55d225f27c2a3ff235a3f06958d2318f4b3

render() {
    return (
      <React.Fragment>
        <div>
          <h1>Enter the Name</h1>
          <input type="text" onChange={this.handleChange}></input>
          <h1>{this.state.name}</h1>
          
        </div>
      </React.Fragment>
    );
  }
}
export default Card;
