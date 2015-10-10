import React from "react";
import ReactDOM from "react-dom";
import InjectTapEventPlugin from "react-tap-event-plugin";
import { Router, Route, Link, IndexRoute } from "react-router";
import { App } from "./app";
import { Home } from "./home";
import { Dashboard } from "./dashboard";
import { Settings } from "./settings";

InjectTapEventPlugin();

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="settings" component={Settings} />
    </Route>
  </Router>
), document.getElementById("content"));

