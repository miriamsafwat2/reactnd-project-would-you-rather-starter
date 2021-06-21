import React, { Component } from "react";

class AnsweredQuestions extends Component {
  render() {
    return (
      <div>
        <h3>Answered Questions: </h3>
        <ul>{this.props.answered}</ul>
      </div>
    );
  }
}

export default AnsweredQuestions;
