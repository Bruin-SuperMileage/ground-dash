import React from 'react';
import firebase from '../firebase.js';

class Lap extends React.Component{
     constructor(props) {
     super(props)
     this.startTimer = this.startTimer.bind(this)
     this.stopTimer = this.stopTimer.bind(this)
     this.resetTimer = this.resetTimer.bind(this)
     this.resetTimer2 = this.resetTimer2.bind(this)
     }
        
     state = {
          timerOn: false,
          timerStart: 0,
          timerStart2: 0,
          timerTime: 0,
          timerTimeReset: 0,
          isRunning: "False",
          lapNumber: 1
     };
     
     startTimer = () => {
          this.setState({
               timerOn: true,
               timerTime: this.state.timerTime,
               timerTimeReset: this.state.timerTimeReset,
               timerStart: Date.now() - this.state.timerTime,
               timerStart2: Date.now() - this.state.timerTimeReset
          });
          this.timer = setInterval(() => {
               this.setState({
               timerTime: Date.now() - this.state.timerStart,
               timerTimeReset: Date.now() - this.state.timerStart2
               });
          }, 10);

     };
     
     stopTimer = () => {
          this.setState({ 
               timerOn: false 
          });
          clearInterval(this.timer);
     };
     
     resetTimer = () => {
          this.setState({
               timerStart: Date.now(),
               timerTime: 0,
          });
     };
     
     resetTimer2 = () => {
          this.setState({
               timerStart2: Date.now(),
               timerTimeReset: 0,
          });
     };

     componentDidMount = () => {
          if (this.props.lap["Running"] === "True") {
               if (this.props.lap["Running"] === "True") {
                    this.resetTimer();
                    this.startTimer();
                    this.setState({
                         isRunning: "True",
                    })
                }
               else if (this.props.lap["Running"] === "False") {
                    this.stopTimer();
                    this.setState({
                         isRunning: "False"
                    })
               }    
          }
     };
      
     componentDidUpdate = () => {
          const {isRunning, lapNumber} = this.state;
          if (isRunning !== this.props.lap["Running"]) {
               if (this.props.lap["Running"] === "True") {
                    this.startTimer();
                    this.resetTimer();
                    this.setState({
                         isRunning: "True"
                    })
               }
               else if (this.props.lap["Running"] === "False") {
                    this.stopTimer();
                    this.setState({
                         isRunning: "False"
                    })
               }
          }
          if (lapNumber !== this.props.lap["Lap"]) {
               this.resetTimer2();
               this.setState({
                    lapNumber: this.props.lap["Lap"]
               })
          }
     }

     render() {
          // let database = firebase.database();
          // let firebaseData = {};
          // database.ref().on('value', (snapshot) => {
          //      firebaseData = snapshot.val();
          // });
          //this.props.lap[]
          let latestTrial// = firebaseData["Latest Trial"];
          let peakTimes = {};
          let database = firebase.database();
          let exists;
          database.ref("Latest Trial").on('value', (snapshot) => {
              latestTrial = snapshot.val();
          });
          database.ref(latestTrial).on('value', (snapshot) => {
               exists = snapshot.child("lap times").exists();
          })
          database.ref(latestTrial + "/lap times").on('value', (snapshot) => {
               peakTimes = snapshot.val();
          });
          let slowestTime = "";
          let fastestTime = "";
          if (exists === true) {
               slowestTime = peakTimes[this.props.lap["Slowest"]];
               fastestTime = peakTimes[this.props.lap["Fastest"]];
          }
          const { timerTime, timerTimeReset } = this.state;
          let centiseconds = ("0" + (Math.floor(timerTimeReset / 10) % 100)).slice(-2);
          let seconds = ("0" + (Math.floor(timerTimeReset / 1000) % 60)).slice(-2);
          let minutes = ("0" + (Math.floor(timerTimeReset / 60000) % 60)).slice(-2);
          const fourptthree = 1800000 - timerTime;
          let fourptthreecentiseconds = ("0" + (Math.floor(fourptthree / 10) % 100)).slice(-2);
          let fourptthreeseconds = ("0" + (Math.floor(fourptthree / 1000) % 60)).slice(-2);
          let fourptthreeminutes = ("0" + (Math.floor(fourptthree / 60000) % 60)).slice(-2);
          return (
          <div>
               <div className="columns">
                    <div className="column">
                         <div className="card-content">
                              <p className="title is-6">Lap: {this.props.lap["Lap"]}</p>
                              <p className="subtitle is-6">Lap Time: {minutes}:{seconds}.{centiseconds} </p>
                              <p className="subtitle is-6">Time Remaining: {fourptthreeminutes}:{fourptthreeseconds}.{fourptthreecentiseconds} </p>
                         </div>
                    </div>
                    <div className="column">
                         <div className="card-content">
                              <p className="subtitle is-6">
                                   Slowest Lap: {this.props.lap["Slowest"]} {slowestTime}
                              </p>
                              <p className="subtitle is-6">
                                   Fastest Lap: {this.props.lap["Fastest"]} {fastestTime}
                              </p>
                         </div>
                    </div>
               </div>

          </div>
          );
     }
};

     
export default Lap;