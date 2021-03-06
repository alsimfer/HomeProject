import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import InputPreview from "../components/InputPreview";
import { setMessage } from "../actions/message";

class Home extends Component {
  _onChange = value => {
    this.props.dispatch(setMessage(value));
  };

  render() {
    const { message } = this.props.messageReducer;
    return (
      <div>
        <InputPreview value={message} onChange={this._onChange} />
        <Link to="/about">
          <button>Go to About</button>
        </Link>
      </div>
    );
  }
}

export default connect(state => state)(Home);

Home.propTypes = {};
