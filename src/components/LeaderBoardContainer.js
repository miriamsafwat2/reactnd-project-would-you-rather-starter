import React, { Component } from "react";
import { connect } from "react-redux";
import BackButton from "./BackButton";
import LeaderBoard from "./LeaderBoard";

class LeaderBoardContainer extends Component {
  render() {
      const {users, usersId} = this.props;
      // sort ids according to total number of score
      let scores = [];
      for (const id of usersId.entries()) {
          let noOfQuestions = users[id[1]].questions.length
          let noOfAnswers = Object.keys(users[id[1]].answers).length;
          let score = noOfQuestions + noOfAnswers;
          scores.push({id, score} );
         // console.log("USERS: ", users[id[1]])
      }

      console.log("ARRAY SCCORE: ", scores);
        scores.sort(function (a, b) {
          return b.score - a.score;
        });

        console.log("ARRAY SCCORE SORTED: ", scores);
    return (
      <div>
        <ul>
          {scores.map((id) => (
            <li key={id["id"][1]}>
              {" "}
              <LeaderBoard id={id["id"][1]} />{" "}
            </li>
          ))}
        </ul>
        <BackButton />
      </div>
    );
  }
}

function mapStateToProps({users}) {
  return {
      users,
      usersId: Object.keys(users),
  };
}
export default connect(mapStateToProps)(LeaderBoardContainer);
