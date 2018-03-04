import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import AppEntry from "./AppEntry";
import Home from "../components/Home";
import Graphics from "../components/Graphics";
import DB from "../components/DB";
import { Nav, Navbar, NavItem, MenuItem, NavDropdown, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class Main extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={() => <Home extraProp={"Hallo"}/>} />
        <Route path='/graphics' component={Graphics} />
        <Route path='/db' component={DB} />
      </Switch>
    );
  };
}

Main.propTypes = {

};