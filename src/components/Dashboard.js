import React, { Component } from "react";
import { connect } from "react-redux";
import NavigationBar from "./NavigationBar";
import Question from "./Question";
import AnsweredQuestions from "./AnsweredQuestions";
import UnansweredQuestions from "./UnansweredQuestions";

class Dashboard extends Component {
  state = {
    unansweredQuestions: true,
  };

  GoToUnanswered = () => {
    this.setState({
      unansweredQuestions: true,
    });
  };

  GoToAnswered = () => {
    this.setState({
      unansweredQuestions: false,
    });
  };
  render() {
    const { authedUser, answeredQuestions, unAnsweredQuestions } = this.props;

    const answered = [];
    for (const [index, value] of answeredQuestions.entries()) {
      answered.push(
        <li key={index}>
          {" "}
          <Question id={value} buttonName="Results" />
        </li>
      );
    }

    const unAnswered = [];
    for (const [index, value] of unAnsweredQuestions.entries()) {
      unAnswered.push(
        <li key={index}>
          {" "}
          <Question id={value} buttonName="Answer" />
        </li>
      );
    }

    return (
      <div>
        <NavigationBar />
        <h3>Logged in user: </h3>
        <p>{authedUser}</p>
        <button onClick={this.GoToUnanswered}>Unanswered Questions</button>
        <button onClick={this.GoToAnswered}>Answered Questions</button>
        {
        this.state.unansweredQuestions === true ? 
          <UnansweredQuestions unAnswered={unAnswered} /> :
          <AnsweredQuestions answered={answered} />
        }
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  return {
    questionIDs: Object.keys(questions),
    questions: questions,
    authedUser: authedUser,
    users: users,
    unAnsweredQuestions:
      !authedUser &&
      Object.keys(questions).length > 0
    ? []
    : Object.keys(questions).filter(id =>
            !questions[id].optionOne.votes.includes(authedUser) &&
            !questions[id].optionTwo.votes.includes(authedUser)
        ).sort((a, b) => questions[b].timestamp - questions[a].timestamp ),
    
   answeredQuestions:
      !authedUser && Object.keys(questions).length > 0
      ? []
      : Object.keys(questions).filter(id =>
              questions[id].optionOne.votes.includes(authedUser) ||
              questions[id].optionTwo.votes.includes(authedUser)
          ).sort((a, b) => questions[b].timestamp - questions[a].timestamp ),

  };
}

export default connect(mapStateToProps)(Dashboard);
