import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class UnansweredQuestions extends Component {
  render() {
    return (
      <div>
        <h3>Unanswered Questions: </h3>
        <ul>{this.props.unAnswered}</ul>
      </div>
    );
  }
}

export default UnansweredQuestions;
