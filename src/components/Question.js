import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Question extends Component {
  
  state = {
    viewAnswerQuestion: false,
  };

  handleSubmit = () => {
    console.log(this.props.id)
    this.setState({
      viewAnswerQuestion: true,
    });
    
  };

  render() {

    
    const { question, users, id } = this.props;

    if (this.state.viewAnswerQuestion) {
      const url = `/questions/${id}`;
      return <Redirect to={url} />;
      /*
      if(this.props.buttonName === 'Results'){
        const url = `/questions/${id}`
        return <Redirect to={url} />;
      }else{
        const url = `/answerquestion/${id}`;
        return <Redirect to={url} />;
      }*/
    }
    return (
      <div className="card">
        <p>Asked by: {question.author}</p>
        <img
          className="avatar"
          alt="user avatar"
          src={users[question.author].avatarURL}
        />
        <p>
          Would you rather: {question.optionOne["text"]} OR{" "}
          {question.optionTwo["text"]}?
        </p>
        <p>
          first option answered by: {question.optionOne.votes.map((v) => v)}
        </p>
        <p>
          second option answered by: {question.optionTwo.votes.map((v) => v)}
        </p>

        <button type="button" onClick={this.handleSubmit}>
          {this.props.buttonName}
        </button>
        {/*console.log("QUESTIONNNN:", question)*/}
        <div className=""></div>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }, { id }) {
  const question = questions[id]
  return {
    authedUser,
    question: question,
    users,
    id
  };
}

export default connect(mapStateToProps)(Question);