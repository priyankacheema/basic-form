import React, { Component } from "react";
import PropTypes from "prop-types";

class BasicForm extends Component {
  state = {
    inputText: ""
  };
  handleChange = e => {
    this.setState({ inputText: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.inputText);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }
}

export default BasicForm;
