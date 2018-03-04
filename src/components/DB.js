import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export default class DB extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        DB
        <Link to="/">
          <button>Go Home</button>
        </Link>
      </div>
    );
  }
}

DB.propTypes = {

};
