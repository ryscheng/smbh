import React from "react";
import { Link, History } from "react-router";
import { 
  LeftNav, AppCanvas, AppBar,
  IconButton, Icons
} from "material-ui";

const menuItems = [
  { route: "/home", text: "Home" },
  { route: "/dashboard", text: "Dashboard" },
  { route: "/settings", text: "Settings" },
];
var menuMap = {};

export const App = React.createClass({
  mixins: [ History ],
  _menuMap: {},

  getInitialState() {
    menuItems.forEach((elt) => {
      this._menuMap[elt.route] = elt.text; 
    });
    // Default title
    this._menuMap["/"] = "SMBH"
    return { title: this._menuMap[this.props.location.pathname] };
  },

  render() {
    return (
      <AppCanvas>
        <AppBar
          ref="appbar"
          title={this.state.title}
          iconElementLeft={<IconButton onClick={this._toggleLeftNav}><Icons.NavigationMenu /></IconButton>}
          onLeftIconButtonTouchTap={this._toggleLeftNav} />
        <LeftNav ref="leftNav" 
          docked={false} 
          header={<IconButton onClick={this._toggleLeftNav}><Icons.NavigationMenu /></IconButton>}
          onChange={this._onLeftNavChange}
          menuItems={menuItems} />
        <div id="app-page">
          {this.props.children}
        </div>
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
    this.setState({ title: this._menuMap[payload.route] });
  },
});

