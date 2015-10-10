import React from "react";
import { Link } from "react-router";
import LeftNav from "material-ui/lib/left-nav";

export const App = React.createClass({
  render() {
    return (
      <div>
        <h1>SMBH</h1>
        <ul>
          <li><Link to="/dashboard" activeClassName="active">Dashboard</Link></li>
          <li><Link to="/settings" activeClassName="active">Settings</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});
