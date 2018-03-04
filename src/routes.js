import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import AppEntry from "./containers/AppEntry";
import { Home } from "./components/Home";
import { Graphics } from "./components/Graphics";
import { DB } from "./components/DB";
import { Nav, Navbar, NavItem, MenuItem, NavDropdown, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Navigation() {
  return (
    <BrowserRouter>
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/home">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            
            <NavItem eventKey={1} href="/graphics">Graphics</NavItem>
            
            <LinkContainer to="/db">
              DB
            </LinkContainer>
            <NavDropdown eventKey={3} title="Authorization" id="basic-nav-dropdown">
              <LinkContainer to="/logout">
                <MenuItem eventKey={3.1}>Logout</MenuItem>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar>

        <Route path="/" component={Home} />
        <Route path="/graphics" component={Graphics} />
        <Route path="/db" component={DB} />
      </div>
    </BrowserRouter>
  );
};

export default withRouter(Navigation);