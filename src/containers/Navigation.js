import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Nav, Navbar, NavItem, MenuItem, NavDropdown, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AppEntry from "./AppEntry";

export default class Navigation extends Component {
  static propTypes = {};

  render() {
    return (
      <header>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>Icon will be here</Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem componentClass="span">
              <Link to="/home">Home</Link>
            </NavItem>

            <NavItem componentClass="span">
              <Link to="/graphics">Graphics</Link>
            </NavItem>

            <NavItem componentClass="span">
              <Link to="/db">DB</Link>
            </NavItem>
          </Nav>
        </Navbar>;
      </header>
    );
  }
}
