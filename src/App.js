import React from 'react';
import firebase from './firebase.js'
import './App.css';

// HERE IS THE WEBSITE IM USING FOR THE GRAPH EXAMPLES SUPER HELPFUL
// https://github.com/jerairrest/react-chartjs-2/blob/master/example/src/components/line.js
// http://jerairrest.github.io/react-chartjs-2/

import ToggleButton from './components/toggleButton';
import GroundDash from './components/groundDash';
import DriverDash from './components/driverDash'

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
      graphOneVals: [],
      graphTwoVals: [],
      dialogState1: "|Pick a graph!",
      dialogState2: "|Pick a graph!",
      currentLap: 1,
      lapLabels: [],
    };
  }

  changeDialogState(event) {
    this.setState({dialogState1: event.target.value})
  }

  changeDialogStateTwo(event) {
    this.setState({dialogState2: event.target.value})
  }

  checkDifference = () => {
    console.log("difference");
    let database = firebase.database();
    var current = new Date();
    var difference = Math.abs(this.state.latestTimeUpdate - current);
    if (difference > 5000) {
      var update = {};
      update["Running"] = "False";
      database.ref().update(update);
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
        var dateUpdate = new Date();
        this.setState({
          latestTimeUpdate: dateUpdate
        })
      }
    });
    this.interval = setInterval(this.checkDifference, 5000);
    
    //sets the time
    database.ref("Latest Time").on('value', (snapshot) => {
      var latestTime1 = snapshot.val();
      database.ref("Latest Trial").on('value', (snapshot) => {
        var latestTrial1 = snapshot.val();
        database.ref(latestTrial1).child(latestTime1).on('value', (snapshot) => {
          database.ref(latestTrial1).on('value', (snapshot) => {
            var snap = snapshot.val();
            var labels = [];
            Object.keys(snap).forEach(key2 => {
              labels.push(key2);
            })
            this.setState({
              labels: labels,
            })
          })
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
          })
        });
  
        this.setState({
          latestTrial: latestTrial1
        })
      });

      this.setState({
        latestTime: latestTime1
      })
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.dialogState1 !== prevState.dialogState1 || this.state.dialogState2 !== prevState.dialogState2)
    {
      let database = firebase.database();
      database.ref("Latest Trial").on('value', (snapshot) => {
        var latestTrial1 = snapshot.val();
        database.ref(latestTrial1).on('value', (snapshot) => {
          var snap = snapshot.val();
          var graphOneVals = [];
          var graphTwoVals = [];
          Object.keys(snap).forEach(key2 => {
            if (Number.isInteger(Number(key2[0]))) {
              if (this.state.dialogState1 !== prevState.dialogState1) {
                var split = this.state.dialogState1.split("|");
                graphOneVals.push(snap[key2][split[0]][split[1]]);
              }
              if (this.state.dialogState2 !== prevState.dialogState2) {
                var split2 = this.state.dialogState2.split("|");
                graphTwoVals.push(snap[key2][split2[0]][split2[1]]);
              }
            }
          })
          if (this.state.dialogState1 !== prevState.dialogState1) {
            this.setState({
              graphOneVals: graphOneVals,
            });
          }
          if (this.state.dialogState2 !== prevState.dialogState2) {
            this.setState({
              graphTwoVals: graphTwoVals,
            });
          }
        })
      })
    }
    if (this.state.currentLap !== prevState.currentLap)
    {
      var lapString = this.state.currentLap-1 + "|" + this.state.labels.length;
      let currentLapArray = [...this.state.lapLabels];
      currentLapArray.push(lapString);
      this.setState({
        lapLabels: currentLapArray,
      })
    }
  }

  render() {
    const whichOneIsIt = this.state.which;
    let button;
    if (whichOneIsIt === "ground") {
      button = <ToggleButton onClick={()=> this.setState({which: "driver"})} />;
    } else if (whichOneIsIt === "driver"){
      button = <ToggleButton onClick={()=> this.setState({which: "ground"})} />;
    }
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
    }  = props.props.state;
    var changeDialogState = props.changeDialogState;
    var changeDialogStateTwo = props.changeDialogStateTwo;
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
       />
  }
  else if (which === "driver" ) {
      return <DriverDash 
      speed={halleffect} 
      speedometer={halleffect} 
      lap={all} />
  }
}

