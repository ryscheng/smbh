import React from "react";
import RaisedButton from "material-ui/lib/raised-button";

export const Dashboard = React.createClass({
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <RaisedButton label="PUSH ME"/>
      </div>
    );
  }
});
