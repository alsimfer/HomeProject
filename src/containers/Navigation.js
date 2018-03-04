import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import AppEntry from "./AppEntry";
import { Home } from "../components/Home";
import { Graphics } from "../components/Graphics";
import { DB } from "../components/DB";
import { Nav, Navbar, NavItem, MenuItem, NavDropdown, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class Navigation extends Component {
  static propTypes = {

  }

  render() {
    return (
      <header>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <LinkContainer to='/home'>
                Icon will be here
              </LinkContainer>
            </Navbar.Brand>
          </Navbar.Header>
            <Nav>
              <LinkContainer to='/home'>
                <NavItem>
                  Home
              </NavItem>
              </LinkContainer>
              <LinkContainer to='/graphics'>
                <NavItem>
                  Graphics
              </NavItem>
              </LinkContainer>
              <LinkContainer to='/db'>
                <NavItem>
                  DB
              </NavItem>
              </LinkContainer>
            </Nav>
        </Navbar>;
      </header>
    );
  }
}
