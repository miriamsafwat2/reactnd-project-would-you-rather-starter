import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/shared";
import { Redirect } from "react-router-dom";
import NavigationBar from "./NavigationBar";

class NewQuestion extends Component {
  state = {
    returnHome: false,
  };

  handleSubmit = () => {
    const questionOne = document.getElementById("option1").value;
    const questionTwo = document.getElementById("option2").value;
    const author = this.props.authedUser;
    const question = { questionOne, questionTwo, author };

    this.props.dispatch(handleAddQuestion(question));

    this.setState({
      returnHome: true,
    });
  };

  handleBack = () => {
    this.setState({
      returnHome: true,
    });
  };

  render() {
    if (this.state.returnHome) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <NavigationBar />
        <h3>Add a new question:</h3>
        <h4>Would you rather...</h4>
        <input type="input" id="option1"></input>
        <p>OR</p>
        <input type="input" id="option2"></input>
        <br />
        <button id="submit" onClick={this.handleSubmit}>
          Submit
        </button>

        <button id="back" onClick={this.handleBack}>
          Back
        </button>
      </div>
    );
  }
}

function mapStateToProps({authedUser}) {
  return{
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion);