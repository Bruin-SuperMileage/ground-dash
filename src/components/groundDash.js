import React from 'react';

import Header from './groundDash/header';
import Driver from './groundDash/driver';
import Car from './groundDash/car';
import Track from './groundDash/track';
import LineGraph from './groundDash/line'

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

class GroundDash extends React.Component{
  render() {
    var name1 = this.props.dialogState1.split("|")[1].split(' ').map(capitalize).join(' ');
    var name2 = this.props.dialogState2.split("|")[1].split(' ').map(capitalize).join(' ');
    return (
      <div className="groundDash canvas color-dark" style={{paddingTop: '45px'}}>
        <Header/>
        <div className="columns">
          <div className="column">  
            <Driver/>
            <Car 
            joulemeter={this.props.joulemeter} 
            environment={this.props.environment} 
            magnetometer={this.props.magnetometer} 
            imu={this.props.imu} 
            accelerometer={this.props.accelerometer} 
            halleffect={this.props.halleffect} />
          </div>
          <div className="column">
            <Track 
            gps={this.props.gps} 
            lap={this.props.lap} 
            track={this.props.track}
            />
          </div>
        </div>
        {/* <div className="columns">
          <div className="column">
            <LineGraph labels={this.props.labels} vals={this.props.graphOneVals} name={name1} changeDialogState={this.props.changeDialogState} lapLabels={this.props.lapLabels} pause={this.props.pause}/>
          </div>
          <div className="column">
            <LineGraph labels={this.props.labels} vals={this.props.graphTwoVals} name={name2} changeDialogState={this.props.changeDialogStateTwo} lapLabels={this.props.lapLabels} pause={this.props.pause}/>
          </div>
        </div> */}
      </div>
    );
  }
};
     
export default GroundDash;