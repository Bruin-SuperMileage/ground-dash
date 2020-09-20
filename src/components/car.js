import React from 'react';

import Accelerometer from './accelerometer';
import Environment from './environment';
import HallEffect from './hall-effect'
import Magnetometer from './magnetometer';
//import Motor from './motor';
//import Battery from './battery';
import Imu from './imu';
import Joulemeter from './joulemeter';
//import Speed from './speed';

class Car extends React.Component{
    render() {
        return (
          <div className="card car">
               <div className="columns">
                    <div className="column">
                         <Joulemeter joulemeter={this.props.joulemeter} />
                         <Accelerometer accelerometer={this.props.accelerometer} />
                         <Environment environment={this.props.environment} />
                         
                    </div>
                    <div className="column">
                         <HallEffect halleffect={this.props.halleffect} />
                         <Magnetometer magnetometer={this.props.magnetometer}/>
                         <Imu imu={this.props.imu}/>
                    </div>
               </div>
          </div>
        );
     }
};

     
export default Car;