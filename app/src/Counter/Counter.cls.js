import { Component } from "react";
import propTypes from "prop-types";
import { withCounter } from "../withCounter";

export class Counter extends Component {
  static propTypes = {
    // Provided by withCounter
    value: propTypes.number.isRequired,
    incr: propTypes.func.isRequired,
  };

  render() {
    return (
      <>
        <span>Value (state) = {this.props.value}</span>
        <button onClick={this.props.incr}>⬆</button>
      </>
    );
  }
}

export default withCounter(Counter);
