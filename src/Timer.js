import React, { Component } from "react";
import moment from "moment";
import "./App.css";
class Timer extends React.Component {
  state = {
    update: ""
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      update: ""
    });
  }
  render() {
    return (
      <div className="dateCard">
        <h3>{moment().format("MMMM Do YYYY, h:mm:ss a")}</h3>
      </div>
    );
  }
}

export default Timer;
