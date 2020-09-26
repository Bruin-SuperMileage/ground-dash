import React from 'react';

class LapDriver extends React.Component{
  constructor(props) {
    super(props)
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    isRunning: "False",
    lapNumber: 1
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
      isRunning: "True"
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ 
      timerOn: false,
      isRunning: "False"
     });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStart: Date.now(),
      timerTime: 0,
    });
  };

  componentDidMount = () => {
    if (this.props.lap["drivingLap"] === "True") {
      if (this.props.lap["drivingLap"] === "True") {
        this.resetTimer();
        this.startTimer();
      }
      else if (this.props.lap["drivingLap"] === "False") {
        this.stopTimer();
      }
    }

  };

  componentDidUpdate = () => {
    const {isRunning, lapNumber } = this.state;
    if (isRunning !== this.props.lap["drivingLap"]) {
      if (this.props.lap["drivingLap"] === "True") {
        this.startTimer();
        this.resetTimer();
        this.setState({
          isRunning: "True"
        })
      }
      else if (this.props.lap["drivingLap"] === "False") {
        this.stopTimer();
        this.setState({
          isRunning: "False"
        })
      }
    }
    if (lapNumber !== this.props.lap["Lap"]) {
      this.resetTimer();
      this.setState({
        lapNumber: this.props.lap["Lap"]
      })
    }
  }

  render = () => {
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    const fourptthree = 260000 - timerTime;
    let fourptthreecentiseconds = ("0" + (Math.floor(fourptthree / 10) % 100)).slice(-2);
    let fourptthreeseconds = ("0" + (Math.floor(fourptthree / 1000) % 60)).slice(-2);
    let fourptthreeminutes = ("0" + (Math.floor(fourptthree / 60000) % 60)).slice(-2);
    return (
      <div>
        <div className="lap">
            <div className="card-content columns">
                <div className="column">
                  <p>Lap {this.props.lap.Lap}</p>
                  <p>Remaining</p>
                </div>
                <div className="column">
                  <p>{minutes} : {seconds} : {centiseconds}</p>
                  <p>{fourptthreeminutes} : {fourptthreeseconds} : {fourptthreecentiseconds}</p>
                </div>
            </div>
        </div>
      </div>
    );
  }

};
     
export default LapDriver;