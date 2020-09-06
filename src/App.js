import React from 'react';
import firebase from './firebase.js'
import './App.css';

// HERE IS THE WEBSITE IM USING FOR THE GRAPH EXAMPLES SUPER HELPFUL
// https://github.com/jerairrest/react-chartjs-2/blob/master/example/src/components/line.js
// http://jerairrest.github.io/react-chartjs-2/

import Header from './components/header';

import Driver from './components/driver';
import Car from './components/car';
import Track from './components/track';

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
      driver: {},
      environment: {},     
      gps: {},
      halleffect: {},
      imu: {},
      joulemeter: {},
      lap: {},
      magnetometer: {},
      motor: {},
      speed: {},
      track: {},
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
    //sets the time
    database.ref("Previous Time").on('value', (snapshot) => {
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
          let driver;
          let environment;
          let gps;
          let halleffect;
          let imu;
          let joulemeter;
          let lap;
          let magnetometer;
          let motor;
          let speed;
          let track;
          if (exists === true) {
            console.log("if");
            latestData1 = snapshot.val();
            accelerometer = latestData1["accelerometer"];
            battery = latestData1["battery"];
            driver = latestData1["driver"];
            environment = latestData1["environment"];
            gps = latestData1["gps"];
            halleffect = latestData1["hall-effect"];
            imu = latestData1["IMU"];
            joulemeter = latestData1["joulemeter"];
            lap = latestData1["lap"];
            magnetometer = latestData1["magnetometer"];
            motor = latestData1["motor"];
            speed = latestData1["speed"];
            track = latestData1["track"];
          }
          else {
            console.log("else");
            accelerometer = 0;
            battery = 0;
            driver = 0;
            environment = 0;
            gps = 0;
            halleffect = 0;
            imu = 0;
            joulemeter = 0;
            lap = 0;
            magnetometer = 0;
            motor = 0;
            speed = 0;
            track = 0;
          }
          
          this.setState({
            latestData: latestData1,
            accelerometer: accelerometer,
            battery: battery,
            driver: driver,
            environment: environment,
            gps: gps,
            halleffect: halleffect,
            imu: imu,
            joulemeter: joulemeter,
            lap: lap,
            magnetometer: magnetometer,
            motor: motor,
            speed: speed,
            track: track,
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

  render() {
    return (
      <div className="canvas color-dark" style={{paddingTop: '45px'}}>
        <Header/>
        <div className="columns">
          <div className="column">  
            <Driver driver={this.state.driver} />
            <Car joulemeter={this.state.joulemeter} environment={this.state.environment} magnetometer={this.state.magnetometer} imu={this.state.imu} accelerometer={this.state.accelerometer} halleffect={this.state.halleffect} />
            {/* <Car battery={this.state.battery} motor={this.state.motor} imu={this.state.imu} joulemeter={this.state.joulemeter} speed={this.state.speed} /> */}
           </div>
          <div className="column">
            <Track gps={this.state.gps} lap={this.state.all} track={this.state.track} /> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
