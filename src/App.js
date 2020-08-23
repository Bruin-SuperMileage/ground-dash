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
      battery: {},
      driver: {},            
      gps: {},
      imu: {},
      joulemeter: {},
      lap: {},
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
    database.ref("Latest Time").on('value', (snapshot) => {
      var latestTime1 = snapshot.val();

      //sets the trial
      database.ref("Latest Trial").on('value', (snapshot) => {
        var latestTrial1 = snapshot.val();

        //sets the data
        database.ref(latestTrial1).child(latestTime1).on('value', (snapshot) => {
          var latestData1 = {};
          latestData1 = snapshot.val();
          var battery = latestData1["battery"]
          var driver = latestData1["driver"]
          var gps = latestData1["gps"]
          var imu = latestData1["IMU"]
          var joulemeter = latestData1["joulemeter"]
          var lap = latestData1["lap"]
          var motor = latestData1["motor"]
          var speed = latestData1["speed"]
          var track = latestData1["track"]

          this.setState({
            latestData: latestData1,
            battery: battery,
            driver: driver,
            gps: gps,
            imu: imu,
            joulemeter: joulemeter,
            lap: lap,
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
            <Car battery={this.state.battery} motor={this.state.motor} imu={this.state.imu} joulemeter={this.state.joulemeter} speed={this.state.speed} />
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