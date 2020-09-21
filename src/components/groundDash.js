import React from 'react';

import Header from './groundDash/header';
import Driver from './groundDash/driver';
import Car from './groundDash/car';
import Track from './groundDash/track';

class GroundDash extends React.Component{
    render() {
        return (
            <div className="groundDash canvas color-dark" style={{paddingTop: '45px'}}>
              <Header/>
              <div className="columns">
                <div className="column">  
                  <Driver/>
                  <Car joulemeter={this.props.joulemeter} environment={this.props.environment} magnetometer={this.props.magnetometer} imu={this.props.imu} accelerometer={this.props.accelerometer} halleffect={this.props.halleffect} />
                 </div>
                <div className="column">
                  <Track gps={this.props.gps} lap={this.props.lap} track={this.props.track} /> 
                </div>
              </div>
            </div>
          );
     }
};

     
export default GroundDash;