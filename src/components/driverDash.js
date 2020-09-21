import React from 'react';

import LapDriver from './driverDash/lapDriver';
import SpeedDriver from './driverDash/speedDriver';
import SpeedometerDriver from './driverDash/speedometerDriver';

class Driver extends React.Component{
    render() {
        return (
            <div className="canvas color-dark driverDash" style={{paddingTop: '45px'}}>
              <div className="columns is-vcentered">
                <div className="column is-one-third">   
                  <SpeedDriver speed={this.props.speed} />
                </div>
                <div className="column">
                  <SpeedometerDriver speedometer={this.props.speed}/>
                  <LapDriver lap={this.props.lap} />  
                </div>
              </div>
            </div>
        );
     }
};

     
export default Driver;