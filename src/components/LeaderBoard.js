import React, {Component} from 'react'
import { connect } from "react-redux";

class LeaderBoard extends Component {
    render(){
        const {id, users} = this.props;
        const noOfQuestions = users[id].questions.length;
        const noOfAnswers = Object.keys(users[id].answers).length;

        return (
          <div>
            <h3> User Name: {users[id].name} </h3>
            <img
              src={users[id].avatarURL}
              alt="user profile"
              className="avatar"
            ></img>
            <h3>Number of questions: {noOfQuestions}</h3>
            <h3>Number of answers: {noOfAnswers}</h3>
            <h3>Total Score: {noOfQuestions + noOfAnswers} </h3>
          </div>
        );
    }
}

function mapStateToProps({users}){
return{
users
}
}
export default connect(mapStateToProps)(LeaderBoard);
