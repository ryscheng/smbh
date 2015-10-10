import React from "react";
import { Link } from "react-router";
import LeftNav from "material-ui/lib/left-nav";

export const App = React.createClass({
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/dashboard" activeClassName="active">Dashboard</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});
