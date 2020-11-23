import React, { Component } from "react";
import { useLocation } from "react-router-dom";

class NoFoundPage extends Component {
  render() {
    // const location = useLocation();
    return (
      <div>
        <h3>
          No Found
          {/* No match for <code>{location.pathname}</code> */}
        </h3>
      </div>
    );
  }
}

export default NoFoundPage;
