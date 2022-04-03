import React,{useState,useEffect,useReducer} from 'react';
import firebase from './firebase';
import 'firebase/database';
import './App.css';

import ToggleButton from './components/toggleButton';
import GroundDash from './components/groundDash';
import DriverDash from './components/driverDash';
import { database } from 'firebase';

const App = () => {
  const [all, setAll] = useState({});
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
  const [motor, setMotor] = useState({});
  const [speed, setSpeed] = useState(0);
  const [latestData, setLatestData] = useState({})

  // const [latestTimeUpdate, setLatestTimeUpdate] = useState("")

  // setInterval(() => {
  //   console.log("checkdifference");
  //   let database = firebase.database();
  //   var current = new Date();
  //   var difference = Math.abs(this.state.latestTimeUpdate - current);
  //   if (difference > 2500) {
  //     var update = {};
  //     update["Running"] = "False";
  //     database.ref().update(update);
  //     setPause(true);
  //   }
  // },5000);

  useEffect( ()=> {
    let database = firebase.database();
    var latestTime1;
    database.ref("Latest Time").on('value', (snapshot) => {
      latestTime1 = snapshot.val();
      var latestTrial1;
      setLatestTime(latestTime1);
      database.ref("Latest Trial").on('value', (snapshot) => {
        latestTrial1 = snapshot.val();
        setLatestTrial(latestTrial1);
        database.ref(latestTrial1).child(latestTime1).on('value', (snapshot) => {
          if (snapshot.exists() === false)
            return;
          var latestData = snapshot.val();
          setLatestData(latestData);
          setAccelerometer(latestData["accelerometer"]);
          setEnvironment(latestData["environment"]);
          setGPS(latestData["gps"]);
          setHallEffect(latestData["hall-effect"]);
          setIMU(latestData["gyroscope"]);
          setJoulemeter(latestData["joulemeter"]);
          setLapTimes(latestData["lap times"]);
          setMagnetometer(latestData["magnetometer"]);
          setMotor(latestData["motorController"]);
          setSpeed(latestData["speed"]);
        });
      });
    });
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
    currentLap,
    labels,
    graphOneVals,
    graphTwoVals,
    dialogState1,
    dialogState2,
    lapLabels,
    pause,
    motor,
    latestTrial}  = props.props;
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
      lap={currentLap} 
      track={{}}
      labels={labels}
      graphTwoVals={graphTwoVals}
      graphOneVals={graphOneVals}
      changeDialogState={changeDialogState}
      changeDialogStateTwo={changeDialogStateTwo}
      dialogState1={dialogState1}
      dialogState2={dialogState2}
      lapLabels={lapLabels}
      pause={pause}
      latestTrial={latestTrial}
      motor={motor}
       />
  }
  else if (which === "driver" ) {
      return <DriverDash 
      speed={halleffect} 
      speedometer={halleffect} 
      lap={currentLap} />
  }
}

