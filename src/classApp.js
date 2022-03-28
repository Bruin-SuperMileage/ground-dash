import React,{useState,useEffect} from 'react';
import firebase from './firebase';
import 'firebase/database';
import './App.css';

import ToggleButton from './components/toggleButton';
import GroundDash from './components/groundDash';
import DriverDash from './components/driverDash';
import { database } from 'firebase';

class App extends React.Component {
  constructor(props){
    super(props);
    this.changeDialogState = this.changeDialogState.bind(this);
    this.changeDialogStateTwo = this.changeDialogStateTwo.bind(this);
    this.state = {
      all: {},
      latestTime: '',
      latestTrial: '',
      latestData: {},
      accelerometer: {},
      environment: {},     
      gps: {},
      halleffect: {},
      imu: {},
      joulemeter: {},
      lapTimes: {},
      magnetometer: {},
      motor: {},
      speed: {},
      track: {},
      latestTimeUpdate: new Date(),
      which: "ground",
      labels: [],
      graphOneVals: 0,
      graphTwoVals: 0,
      dialogState1: "|Pick a graph!",
      dialogState2: "|Pick a graph!",
      currentLap: 1,
      lapLabels: [],
      pause: true,
    };
  }

  changeDialogState(event) {
    this.setState({dialogState1: event.target.value})
  }

  changeDialogStateTwo(event) {
    this.setState({dialogState2: event.target.value})
  }

  checkDifference = () => {
    console.log("checkdifference");
    let database = firebase.database();
    var current = new Date();
    var difference = Math.abs(this.state.latestTimeUpdate - current);
    if (difference > 2500) {
      var update = {};
      update["Running"] = "False";
      database.ref().update(update);
      this.setState({
        pause: true,
      })
    }
  }

  componentDidMount() {
    let database = firebase.database();
    database.ref().on('value', (snapshot) => {
      var all = snapshot.val();
      var currentLap = all.Lap;
      this.setState({
        all: all,
        currentLap: currentLap,
      })
    });
    database.ref("Running").on('value', (snapshot) => {
      var running = snapshot.val();
      if (running === "True") {
        this.setState({
          pause: false,
        })
      }
    });
    database.ref("Latest Time").on('value', (snapshot) => {
      var latestTime1 = snapshot.val();
      database.ref("Latest Trial").on('value', (snapshot) => {
        var latestTrial1 = snapshot.val();
        database.ref(latestTrial1).child(latestTime1).on('value', (snapshot) => {
          var labels = this.state.labels;
          var graphTwoVals = this.state.graphTwoVals;
          labels.push(latestTime1);
          let exists = snapshot.exists();
          let accelerometer;
          let environment;
          let gps;
          let halleffect;
          let imu;
          let joulemeter;
          let lapTimes;
          let magnetometer;
          let motor;
          let speed;
          let lapTimesExists;
          let peakTimes;

          var latestData1;
          if (exists === true) {
            latestData1 = snapshot.val();
            accelerometer = latestData1["accelerometer"];
            environment = latestData1["environment"];
            gps = latestData1["gps"];
            halleffect = latestData1["hall-effect"];
            imu = latestData1["gyroscope"];
            joulemeter = latestData1["joulemeter"];
            lapTimes = latestData1["lap times"];
            magnetometer = latestData1["magnetometer"];
            motor = latestData1["motor"];
            speed = latestData1["speed"];
          }
          else {
            accelerometer = 0;
            environment = 0;
            gps = 0;
            halleffect = 0;
            imu = 0;
            joulemeter = 0;
            lapTimes = 0;
            magnetometer = 0;
            motor = 0;
            speed = 0;
          }
          this.setState({
            latestData: latestData1,
            accelerometer: accelerometer,
            environment: environment,
            gps: gps,
            halleffect: halleffect,
            imu: imu,
            joulemeter: joulemeter,
            lapTimes: lapTimes,
            magnetometer: magnetometer,
            motor: motor,
            speed: speed,
            labels: labels,
            graphTwoVals: graphTwoVals,
          })
        });
        this.setState({
          latestTrial: latestTrial1,
          latestTime: latestTime1
        })
      })
    });
    this.interval = setInterval(this.checkDifference, 5000);
  }

  render() {
    const whichOneIsIt = this.state.which;
    let button;
    var changeDialogState = this.changeDialogState;
    var changeDialogStateTwo = this.changeDialogStateTwo;
    return (
      <div>
        <ViewToggle props={this} changeDialogState={changeDialogState} changeDialogStateTwo={changeDialogStateTwo}/>
        {button}
      </div>
      );
  }
}

export default App;

function ViewToggle(props) {
  //console.log(props)
  let {which,
    joulemeter,
    environment,
    magnetometer,
    imu, 
    accelerometer, 
    halleffect, 
    gps, 
    all,
    labels,
    graphOneVals,
    graphTwoVals,
    dialogState1,
    dialogState2,
    lapLabels,
    pause,}  = props.props.state;
    var changeDialogState = props.changeDialogState;
    var changeDialogStateTwo = props.changeDialogStateTwo;
  console.log(which)
  if (which === "ground") {
      return <GroundDash 
      joulemeter={joulemeter} 
      environment={environment} 
      magnetometer={magnetometer} 
      imu={imu} 
      accelerometer={accelerometer} 
      halleffect={halleffect} 
      gps={gps} 
      lap={all} 
      track={all}
      labels={labels}
      graphTwoVals={graphTwoVals}
      graphOneVals={graphOneVals}
      changeDialogState={changeDialogState}
      changeDialogStateTwo={changeDialogStateTwo}
      dialogState1={dialogState1}
      dialogState2={dialogState2}
      lapLabels={lapLabels}
      pause={pause}
       />
  }
  else if (which === "driver" ) {
      return <DriverDash 
      speed={halleffect} 
      speedometer={halleffect} 
      lap={all} />
  }
}

