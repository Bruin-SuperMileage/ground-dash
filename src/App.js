import React,{useState,useEffect,useReducer} from 'react';
import firebase from './firebase';
import 'firebase/database';
import './App.css';

import ToggleButton from './components/toggleButton';
import GroundDash from './components/groundDash';
import DriverDash from './components/driverDash';
import { database } from 'firebase';

const App = () => {
  const [all,setAll] = useState({});
  const [currentLap,setCurrentLap] = useState(0);
  const [running, setRunning] = useState(false)
  const [pause, setPause] = useState(false)
  const [latestTime, setLatestTime] = useState("")
  const [latestTrial, setLatestTrial] = useState("")
  const [accelerometer, setAccelerometer] = useState(0)
  const [environment, setEnvironment] = useState(0);
  const [gps, setGPS] = useState(0);
  const [halleffect, setHallEffect] = useState(0);
  const [imu, setIMU] = useState(0);
  const [joulemeter, setJoulemeter] = useState(0);
  const [laptimes, setLapTimes] = useState(0);
  const [magnetometer, setMagnetometer] = useState(0);
  const [motor, setMotor] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [latestData, setLatestData] = useState({})


  // useEffect ( () => {
  //   var setLatestTimeCycle = setInterval( () => {
  //     firebase.database().ref("Latest Time").once('value', (snapshot) => {
  //       setLatestTime(snapshot.val());
  //     })
  //     console.log("checking");
  //   }, 500)
  //   return () => clearInterval(setLatestTimeCycle)
  // }, [])
  var count = 0;
  useEffect( ()=> {
    // var intervalID = setInterval(() => {
    let database = firebase.database();
    var latestTime1;
    database.ref("Latest Time").on('value', (snapshot) => {
      latestTime1 = snapshot.val();
      var latestTrial1;
      database.ref("Latest Trial").on('value', (snapshot) => {
        latestTrial1 = snapshot.val();
        console.log(latestTrial1 + " " + latestTime1);
        database.ref(latestTrial1).child(latestTime1).on('value', (snapshot) => {
          console.log("before fetch: " + count);
          // var all = snapshot.val();
          console.log("after fetch: " + count);
          // count++;
          // setAll(snapshot.val());
          // setCurrentLap(snapshot.val().Lap);
          // var running1 = all["Running"];
          // setRunning(running1);
          // if (running1 === true) {
            // setPause(false)
          // }
          //var latestTime1 = all["Latest Time"];
          //setLatestTime(latestTime1);
          //var latestTrial1 = all["Latest Trial"]; 
          // setLatestTrial(latestTrial1);
          if (snapshot.exists() === false)
            return;
          var latestData = snapshot.val();
          // var exists = true;
          // if (all[latestTrial1][latestTime1] === null)
          //   exists = false;
          // if (exists === true)
          // {
          setLatestData(latestData);
          setAccelerometer(latestData["accelerometer"]);
          setEnvironment(latestData["environment"]);
          setGPS(latestData["gps"]);
          setHallEffect(latestData["hall-effect"]);
          setIMU(latestData["gyroscope"]);
          setJoulemeter(latestData["joulemeter"]);
          setLapTimes(latestData["lap times"]);
          setMagnetometer(latestData["magnetometer"]);
          setMotor(latestData["motor"]);
          setSpeed(latestData["speed"]);
          // }
        });
      });
    });
//   },100);
//   return () => {
//     clearInterval(intervalID);
//   }
    // return () => database.ref().off('value', dataChange)
  },[latestTime])

  return (
    <div>
      <ViewToggle props={{joulemeter: joulemeter,
      all: all,
      currentLap: currentLap,
      running: running,
      pause: pause,
      latestTime: latestTime,
      latestTrial: latestTrial,
      accelerometer: accelerometer,
      environment: environment,
      gps: gps,
      halleffect: halleffect,
      imu: imu,
      laptimes: laptimes,
      magnetometer: magnetometer,
      motor: motor,
      speed: speed,
      latestData: latestData,
      which: "ground",
      }} /* changeDialogState={changeDialogState} changeDialogStateTwo={changeDialogStateTwo} *//>
    </div>
    );
}

/* class App extends React.Component {
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
} */

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
    pause,}  = props.props;
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

