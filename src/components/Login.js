import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser} from '../actions/authedUser'

class Login extends Component {
  handleSubmit = () => {
    const loginName = document.getElementById("username");
    this.props.dispatch(setAuthedUser(loginName.value));
  };
  render() {
    const { usersId, authedUser } = this.props;

    console.log("AUTHEDDD: ", authedUser);

    if (authedUser !== null) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <input type="input" id="username"></input>
        <button id="btnLogin" onClick={this.handleSubmit}>
          Login
        </button>
        <p>Available usernames: </p>
        <ul>
          {usersId.map((id) => (
            <li key={id}>{id}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users: users === undefined ? [] : users,
    usersId: Object.keys(users),
    authedUser,
  };
}

export default connect(mapStateToProps)(Login);


