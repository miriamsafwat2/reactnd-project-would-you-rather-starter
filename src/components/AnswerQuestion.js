import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveAnswer } from "../actions/shared";
import BackButton from "./BackButton";
import { Redirect } from "react-router-dom";
import NavigationBar from "./NavigationBar";

class AnswerQuestion extends Component {
  state = {
    viewResult: false,
  };
  handleOne = (e) => {
    e.preventDefault();
    const authedUser = this.props.authedUser;
    console.log("AUTHED: ", authedUser);
    const { id } = this.props;//this.props.match.params;
    const qid = id;
    console.log("QID: ", qid);

    const answer = "optionOne";
    this.props.dispatch(handleSaveAnswer({ authedUser, qid, answer }));
     this.setState({
       viewResult: true,
     });
  };

  handleTwo = (e) => {
    e.preventDefault();
    const authedUser = this.props.authedUser;
    console.log("AUTHED: ", authedUser);
    const { id } = this.props; //this.props.match.params;
    const qid = id;
    console.log("QID: ", qid);

    const answer = "optionTwo";
    this.props.dispatch(handleSaveAnswer({ authedUser, qid, answer }));
    this.setState({
      viewResult: true,
    });
  };

  render() {
  console.log("this.state.viewResult: ", this.state.viewResult);
       
    const { id, question } = this.props;//this.props.match.params;

    if (this.state.viewResult) {
        //const url = `/questions/${id}`;
        //return <Redirect to={url} />;
    }
    return (
      <div>
        <h1>Answer Question</h1>
        <h3>ID is:{id}</h3>
        <p>Would you rather:</p>
        <button id="option1" onClick={this.handleOne}>
          {question.optionOne["text"]}
        </button>
        <p>Or</p>
        <button id="option2" onClick={this.handleTwo}>
          {question.optionTwo["text"]}
        </button>
        <BackButton />
      </div>
    );
  }
}
function mapStateToProps({ questions, authedUser, users }, props) {
  const id = props.id;
  //console.log("QUESTIONsss: ", questions);
  const question = questions[id];
  console.log("QUESTION IN ANSWER_QUESTION: ", question)
  return {
    authedUser,
    question: question,
    users,
    id,
  };
}

export default connect(mapStateToProps)(AnswerQuestion);
