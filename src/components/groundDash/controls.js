import React from 'react';
import firebase from '../../firebase.js'

var startTimeMilli = "";
var convertedStart = "";
var stopTimeMilli = "";
var convertedStop = "";
var lapTimeMilli = [];
var lapTime = [];
var convertedLapTimes = [];
var lapNumber;
let database = firebase.database(); 

Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}
  
function convertTime(milliseconds) {
    var minute, seconds, milli;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    minute = minute % 60;
    milli = milliseconds % 1000
    return ((minute).pad(2) + ":" + (seconds).pad(2) + "." + (milli).pad(3))
}

class Controls extends React.Component{
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.lap = this.lap.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
    }

    lap() {
        var running;
        database.ref("Running").on('value', (snapshot) => {
            running = snapshot.val();
        });
        if (running === "True")
        {
            var latestTrial;
            database.ref("Latest Trial").on('value', (snapshot) => {
                latestTrial = snapshot.val();
            });
            database.ref("Lap").on('value', (snapshot) => {
                lapNumber = snapshot.val();
            });
            var update1 = {};
            update1["Lap"] = lapNumber+1;
            var currentTime = Date.now();
            lapTimeMilli.push(currentTime);
            var pushTime;
            if (lapTimeMilli.length === 1) {
                pushTime = currentTime - startTimeMilli;
            }
            else {
                pushTime = currentTime - lapTimeMilli[lapTimeMilli.length-2];
            }
            lapTime.push(pushTime);
            var update2 = {};
            update2["Fastest"] = lapTime.indexOf(Math.min(...lapTime))+1;
            update2["Slowest"] = lapTime.indexOf(Math.max(...lapTime))+1;
            var convertedLapTime = convertTime(pushTime);
            convertedLapTimes.push(convertedLapTime);
            firebase.database().ref().update(update1);
            var lapFirebase = (lapNumber-1);
            update2[lapFirebase] = convertedLapTime;
            firebase.database().ref(latestTrial + "/lap times").update(update2);
            this.forceUpdate();
        }
    }

    start() {
        var running;
        database.ref("Running").on('value', (snapshot) => {
            running = snapshot.val();
        });
        if (running === "True")
        {
            var postData = "True";
            var updates = {};
            updates["drivingLap"] = postData;
            updates["Lap"] = 1;
            firebase.database().ref().update(updates);
            startTimeMilli = Date.now();
            var startTime = new Date(startTimeMilli)
            convertedStart = startTime.getHours() + ":" + startTime.getMinutes() + ":" + startTime.getSeconds()
            stopTimeMilli = "";
            convertedStop = "";
            lapTimeMilli = [];
            lapTime = [];
            convertedLapTimes = [];
            this.forceUpdate();
        }
    }

    stop() {
        var running, driving;
        database.ref("Running").on('value', (snapshot) => {
            running = snapshot.val();
        });
        database.ref("drivingLap").on('value', (snapshot) => {
            driving = snapshot.val();
        });
        if (running === "True" && driving === "True")
        {
            var postData = "False";
            var updates = {};
            updates["drivingLap"] = postData;
            firebase.database().ref().update(updates);
            stopTimeMilli = Date.now();
            convertedStop = convertTime(stopTimeMilli-startTimeMilli);
            this.forceUpdate();
        }
    }

    render() {
        return (
          <div className="controls">
                <div className="card-content">
                    <div className="columns">
                        <div className="column is-one-fifth">
                        <button onClick={this.start} className="button is-primary control-button">Start</button>
                        </div>
                        <div className="column">
                            <p className="title is-5">Time: {convertedStart}</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="columns">
                        <div className="column is-one-fifth">
                        <button onClick={this.stop} className="button is-danger control-button">Stop</button>
                        </div>
                        <div className="column">
                            <p className="title is-5">Time: {convertedStop}</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="columns">
                        <div className="column is-one-fifth">
                        <button onClick={this.lap} className="button is-info control-button">Lap</button>
                        </div>
                        <div className="column padding-left">
                            <ol className="numInside">
                                <p className="title is-5">Time: {convertedLapTimes.map(item => {
                                    return <li key={item}>{item}</li>
                                    })}
                                </p>
                            </ol>
                        </div>
                    </div>
                </div>
          </div>
        );
    }
};

export default Controls;