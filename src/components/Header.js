import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path="/map"
              render={() => {
                window.location.href = "map.html";
              }}
            />
            <Route
              exact
              path="/tasks"
              render={() => {
                window.location.href = "tasks.html";
              }}
            />
            <Route
              exact
              path="/dashboard"
              render={() => {
                window.location.href = "dashboard.html";
              }}
            />
            <Route
              exact
              path="/admin"
              render={() => {
                window.location.href = "admin.html";
              }}
            />
          </Switch>
        </div>
      </Router>

      <div className="topnav-bar">
        <a href="/App.js" className="topnav-left">
          LiveEO
        </a>
        <div className="topnav-right">
          <a href="/map.html">Map</a>
          <a href="/tasks.html">Tasks</a>
          <a href="/dashboard.html">Dashboard</a>
          <a href="/App.js">Comments</a>
          <a href="/admin.html" className="topnav-admin">
            Admin
          </a>

          <span className="material-icons watch">watch_later</span>
        </div>
      </div>
    </>
  );
}

export default Header;
