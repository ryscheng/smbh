import React from "react";
import ReactDOM from "react-dom";
import InjectTapEventPlugin from "react-tap-event-plugin";
import { Router, Route, Link } from "react-router";
import { createHistory, useBasename } from "history";
import { App } from "./app";
import { Dashboard } from "./dashboard";

const history = useBasename(createHistory)({
  basename: "/app"
});

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="dashboard" component={Dashboard} />
    </Route>
  </Router>
), document.getElementById("content"));

