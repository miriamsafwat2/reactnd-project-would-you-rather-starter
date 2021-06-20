import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class BackButton extends Component {
  state = {
    returnHome: false,
  };
  
  handleBack = () => {
    this.setState({
      returnHome: true,
    });
  };

  render() {
    if (this.state.returnHome) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <button id="back" onClick={this.handleBack}>
          Back
        </button>
      </div>
    );
  }
}


export default BackButton;
