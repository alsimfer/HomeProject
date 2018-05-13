import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";

import AppEntry from "./AppEntry";
import Home from "../components/Home";
import Graphics from "../components/Graphics";
import DB from "../components/DB";
import About from "../components/About";

export default class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={() => <Home extraProp="Hallo" />} />
        <Route path="/home" component={Home} />
        <Route path="/graphics" component={Graphics} />
        <Route path="/db" component={DB} />
        <Route path="/about" component={About} />
      </Switch>
    );
  }
}

Main.propTypes = {};
