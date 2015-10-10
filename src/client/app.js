import React from "react";
import { Link, History } from "react-router";
import LeftNav from "material-ui/lib/left-nav";
import AppCanvas from "material-ui/lib/app-canvas";
import AppBar from "material-ui/lib/app-bar";
import IconButton from "material-ui/lib/icon-button";
import MenuButton from "material-ui/lib/svg-icons/navigation/menu";

const menuItems = [
  { route: "/home", text: "Home" },
  { route: "/dashboard", text: "Dashboard" },
  { route: "/settings", text: "Settings" },
];

export const App = React.createClass({
  mixins: [ History ],

  render() {
    return (
      <AppCanvas>
        <AppBar
          title="SMBH"
          iconElementLeft={<IconButton onClick={this._toggleLeftNav}><MenuButton /></IconButton>}
          onLeftIconButtonTouchTap={this._toggleLeftNav} />
        <LeftNav ref="leftNav" 
          docked={false} 
          header={<IconButton onClick={this._toggleLeftNav}><MenuButton /></IconButton>}
          onChange={this._onLeftNavChange}
          menuItems={menuItems} />
        {this.props.children}
      </AppCanvas>
    );
  },

  _toggleLeftNav(e) {
    e.preventDefault();
    this.refs.leftNav.toggle();
  },

  _onLeftNavChange(e, key, payload) {
    e.preventDefault();
    this.history.pushState(null, payload.route);
  },
});

