import React, { Component } from "react";
import { connect } from "react-redux";
import NavigationBar from "./NavigationBar";
import Question from "./Question";

class Dashboard extends Component {

  render() {
    const { authedUser, answeredQuestions, unAnsweredQuestions } = this.props;

  const answered = []
  for (const [index, value] of answeredQuestions.entries()) {
    answered.push(
      <li key={index}>
        {" "}
        <Question id={value} buttonName="Results"/>
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
        <h3>Answered Questions: </h3>
        <ul>{answered}</ul>

        <h3>Unanswered Questions: </h3>
        <ul>{unAnswered}</ul>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
 // const userAnswers = users[authedUser].answers;
  return {
    questionIDs: Object.keys(questions),
    questions: questions,
    authedUser: authedUser,
    users: users,
    // answeredQuestions: authedUser !== null ? users[authedUser].questions : [],
    unAnsweredQuestions:
      !authedUser &&
      Object.keys(questions).length > 0
    ? []
    : Object.keys(questions).filter(id =>
            !questions[id].optionOne.votes.includes(authedUser) &&
            !questions[id].optionTwo.votes.includes(authedUser)
        ).sort((a, b) => questions[b].timestamp - questions[a].timestamp ),
      /*Object.values(questions)
        .filter((question) => {
          return Object.keys(users[authedUser].answers).includes(question.id);
        })
        .sort((a, b) => b.timestamp - a.timestamp),*/
   answeredQuestions:
      !authedUser && Object.keys(questions).length > 0
      ? []
      : Object.keys(questions).filter(id =>
              questions[id].optionOne.votes.includes(authedUser) ||
              questions[id].optionTwo.votes.includes(authedUser)
          ).sort((a, b) => questions[b].timestamp - questions[a].timestamp ),
      /*Object.values(questions)
        .filter((question) => {
          return !Object.keys(users[authedUser].answers).includes(question.id);
        })
        .sort((a, b) => b.timestamp - a.timestamp),*/
  };
}

export default connect(mapStateToProps)(Dashboard);
