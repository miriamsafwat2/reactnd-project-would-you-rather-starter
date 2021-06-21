import React, { Component } from "react";
import { connect } from "react-redux";
import BackButton from "./BackButton";
import NavigationBar from "./NavigationBar";

class ViewQuestion extends Component {

  render() {
      const { id } = this.props;//this.props.match.params;
      const { question, users, authedUser} = this.props;
      const votesOne = question.optionOne["votes"].length;
      const votesTwo = question.optionTwo["votes"].length;
      const persentageOne = votesOne === 0 ? 0 : ((votesOne / (votesOne + votesTwo)) * 100)
      const persentageTwo = votesTwo === 0
    ? 0
    : ((votesTwo / (votesOne + votesTwo)) * 100);
      return (
        <div>
          <h1>View Question</h1>
          {/*<h3>ID is:{id}</h3>*/}
          <h3>Results:</h3>
          <p>Option 1 {question.optionOne["text"]}</p>
          <p>Number of votes: {votesOne}</p>
          <p>Total votes:{votesOne + votesTwo}</p>
          <p>Percentage: {persentageOne}%</p>
          {users[authedUser].answers[id] === "optionOne" ? (
            <p>You answered this</p>
          ) : (
            <p></p>
          )}

          <br />
          <p>Option 2 {question.optionTwo["text"]}</p>
          <p>Number of votes: {votesTwo}</p>
          <p>Total votes:{votesOne + votesTwo}</p>
          <p>Percentage: {persentageTwo}%</p>
          {console.log("QQQQ", question)}
          {users[authedUser].answers[id] === "optionTwo" ? (
            <p>You answered this</p>
          ) : (
            <p></p>
          )}
          <BackButton />
        </div>
      );}
}
function mapStateToProps({ questions, authedUser, users }, props) {
  //props.match.params;
  const id = props.id;
  const question = questions[id];
  return {
    authedUser,
    question: question,
    users,
    id,
    questions,
  };
}

export default connect(mapStateToProps)(ViewQuestion);