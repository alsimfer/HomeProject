import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class Graphics extends Component {
  render() {
    return (
      <Link to="/">
        <Button>Go Home</Button>
      </Link>
    );
  }
}

Graphics.propTypes = {};
