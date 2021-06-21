import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import { connect } from "react-redux";
import ViewQuestion from "./ViewQuestion";
import AnswerQuestion from "./AnswerQuestion";
import { Redirect } from "react-router-dom";

class ViewAnswerQuestion extends Component {

  render() {
    const {id, question, user} = this.props;
    if(!question){
        return <Redirect to="/notfound" />;
    }

    const answer = user.answers[question.id];

    if(answer === undefined){
    return (
      <div>
        <NavigationBar />
        <p>View / Answer Question</p>
        <AnswerQuestion id={id} />
      </div>
    );}else{
        return (
          <div>
            <NavigationBar />
            <p>View / Answer Question</p>
            <ViewQuestion id={id} />
          </div>
        );
  }
}
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params;
  return{
    authedUser,
    id,
    question: questions[id],
    user: users[authedUser]
  };
}

export default connect(mapStateToProps)(ViewAnswerQuestion);
