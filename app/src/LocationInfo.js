import { Component } from "react";
import { useLocation, withRouter } from "react-router-dom";

// Class

class LocationInfoCls extends Component {
  render() {
    const { location } = this.props;
    return <>Current URL: {location.pathname}</>;
  }
}

export default withRouter(LocationInfoCls);

// Function

const LocationInfoFun = () => {
  const location = useLocation();
  return <>Current URL: {location.pathname}</>;
};

//export default LocationInfoFun;
