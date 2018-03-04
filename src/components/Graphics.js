import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem, MenuItem, NavDropdown, Button } from "react-bootstrap";


export default class Graphics extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Link to="/">
        <Button>Go Home</Button>
      </Link>
    );
  }
}

Graphics.propTypes = {

};


