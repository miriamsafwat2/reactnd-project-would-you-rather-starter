import React, { Component } from "react";
import { connect } from "react-redux";
import { handleReceiveData } from "../actions/shared";
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion"
import NotFound from "./NotFound";
import Login from "./Login";
import LeaderBoardContainer from "./LeaderBoardContainer";
import LoadingBar from "react-redux-loading";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewAnswerQuestion from "./ViewAnswerQuestion";
import AnswerQuestion from "./AnswerQuestion";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveData());
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.authedUser === null ? (
          <Login />
        ) : (
          <Router>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/home" component={Dashboard} />
              <Route path="/login" component={Login} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/questions/:id" component={ViewAnswerQuestion} />
              <Route path="/leaderboard" component={LeaderBoardContainer} />
              <Route path="*" component={NotFound} />
              <Route path="/404" component={NotFound} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};
export default connect(mapStateToProps)(App);
