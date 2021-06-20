import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";

class NavigationBar extends Component {
  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null));
  };

  handleAddQuestion = () => {
    return <Redirect to="/add" />;
  };

  render() {
    return (
      <div>
        <NavLink to="/">Home </NavLink>
        <NavLink to="/add"> Add Question </NavLink>

        <NavLink to="/leaderboard"> Leader Board </NavLink>

        <button id="logout" onClick={this.handleLogout}>
          Logout
        </button>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NavigationBar);
