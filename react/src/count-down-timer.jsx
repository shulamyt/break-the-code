import React, { Component } from 'react';

class CountDownTimer  extends Component {

  constructor(props) {
    super(props);
    this.state = {
      remainingTimeInSeconds: 0
    };
  };

  tick() {
    this.setState({remainingTimeInSeconds: this.state.remainingTimeInSeconds - 1});
    if (this.state.remainingTimeInSeconds <= 0) {
      clearInterval(this.interval);
      if(this.props.timeIsOver){
        this.props.timeIsOver();
      }
    }
  }

  componentDidMount() {
    this.setState({ remainingTimeInSeconds: this.props.startTime });
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  getMinutes(){
    var minutes = parseInt(this.state.remainingTimeInSeconds / 60, 10) % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes;
  }

  getSeconds(){
    let seconds = parseInt(this.state.remainingTimeInSeconds% 60, 10);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return seconds;
  }

  render() {
    return(
      <div>
        <spane>{this.getMinutes()} : </spane>
        <spane>{this.getSeconds()}</spane>
      </div>
    )
  }
}

export default CountDownTimer ;
