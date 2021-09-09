import { PureComponent } from "react";
import propTypes from "prop-types";

export const withCounter = (OriginalComponent) =>
  class ComponentWithCounter extends PureComponent {
    static propTypes = {
      initialValue: propTypes.number,
    };

    static defaultProps = {
      initialValue: 0,
    };

    // constructor(props) {
    //   super(props);

    //   this.state = { value: this.props.initialValue };
    // }

    state = { value: this.props.initialValue };

    incr = () => {
      this.setState({ value: this.state.value + 1 });
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          value={this.state.value}
          incr={this.incr}
        />
      );
    }
  };
