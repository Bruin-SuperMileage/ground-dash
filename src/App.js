import React from 'react';
import firebase from './firebase.js'
import './App.css';

// HERE IS THE WEBSITE IM USING FOR THE GRAPH EXAMPLES SUPER HELPFUL
// https://github.com/jerairrest/react-chartjs-2/blob/master/example/src/components/line.js
// http://jerairrest.github.io/react-chartjs-2/

import ToggleButton from './components/toggleButton';
import WhichOne from './components/whichOne'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      all: {},
      latestTime: '',
      latestTrial: '',
      latestData: {},
      accelerometer: {},
      battery: {},
      environment: {},     
      gps: {},
      halleffect: {},
      imu: {},
      joulemeter: {},
      lap: {},
      lapTimes: {},
      magnetometer: {},
      motor: {},
      speed: {},
      track: {},
      latestTimeUpdate: new Date(),
      which: "driver",
    };
  }

  componentDidMount() {
    let database = firebase.database();
    database.ref().on('value', (snapshot) => {
      var all = snapshot.val();
      this.setState({
        all: all
      })
    });
    database.ref("Latest Time").on('value', (snapshot) => {
      database.ref("Running").on('value', (snapshot) => {
        var running = snapshot.val();
        if (running === "True") {
          var dateUpdate = new Date();
          this.setState({
            latestTimeUpdate: dateUpdate
          })
        }
        setInterval(() => {
          var current = new Date();
          var difference = Math.abs(this.state.latestTimeUpdate - current);
          //console.log(difference);
          if (difference > 5000) {
            //console.log("update");
            var update = {};
            update["Running"] = "False";
            database.ref().update(update);
            clearInterval(this.intervalID);
          }
        }, 5000);
      });
    }); 
    
    //sets the time
    database.ref("Latest Time").on('value', (snapshot) => {
      var latestTime1 = snapshot.val();
      //sets the trial
      database.ref("Latest Trial").on('value', (snapshot) => {
        var latestTrial1 = snapshot.val();
        //sets the data
        database.ref(latestTrial1).child(latestTime1).on('value', (snapshot) => {
          var latestData1 = {};
          let exists = snapshot.exists();
          let accelerometer;
          let battery;
          let environment;
          let gps;
          let halleffect;
          let imu;
          let joulemeter;
          let lap;
          let lapTimes;
          let magnetometer;
          let motor;
          let speed;
          if (exists === true) {
            latestData1 = snapshot.val();
            accelerometer = latestData1["accelerometer"];
            battery = latestData1["battery"];
            environment = latestData1["environment"];
            gps = latestData1["gps"];
            halleffect = latestData1["hall-effect"];
            imu = latestData1["gyroscope"];
            joulemeter = latestData1["joulemeter"];
            lap = latestData1["lap"];
            lapTimes = latestData1["lap times"];
            magnetometer = latestData1["magnetometer"];
            motor = latestData1["motor"];
            speed = latestData1["speed"];
          }
          else {
            accelerometer = 0;
            battery = 0;
            environment = 0;
            gps = 0;
            halleffect = 0;
            imu = 0;
            joulemeter = 0;
            lap = 0;
            lapTimes = 0;
            magnetometer = 0;
            motor = 0;
            speed = 0;
          }
          
          this.setState({
            latestData: latestData1,
            accelerometer: accelerometer,
            battery: battery,
            environment: environment,
            gps: gps,
            halleffect: halleffect,
            imu: imu,
            joulemeter: joulemeter,
            lap: lap,
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

  setDriver() {
    this.setState({which: "driver"})
  }

  setGround() {
    this.setState({which: "ground"})
  }

  render() {
    const whichOneIsIt = this.state.which;
    let button;
    if (whichOneIsIt === "ground") {
      button = <ToggleButton onClick={()=> this.setDriver()} />;
    } else if (whichOneIsIt === "driver"){
      button = <ToggleButton onClick={()=> this.setGround()} />;
    }

    return (
      <div>
        <WhichOne whichOne={this.state} />
        {button}
      </div>
      );
  }
}

export default App;

