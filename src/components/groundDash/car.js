import React from 'react';
import Accelerometer from './accelerometer';
import Environment from './environment';
import HallEffect from './hall-effect'
import Motor from './motor';
import Imu from './imu';
import Speed from './speed';
import Joulemeter from './joulemeter';

class Car extends React.Component{
    render() {
        return (
          <div className="card car">
               <div className="columns">
                    <div className="column">
                         {/* <J oulemeter joulemeter={this.props.joulemeter} /> */}
                         <Accelerometer accelerometer={this.props.accelerometer} />
                         <Environment environment={this.props.environment} />
                         
                    </div>
                    <div className="column">
                         {/* <HallEffect halleffect={this.props.halleffect} /> */}
                         {/* <Magnetometer magnetometer={this.props.magnetometer}/> */}
                         <Motor motor={this.props.motor}/>
                         <Imu imu={this.props.imu}/>
                    </div>
                    <div className="column">
                        <Speed speed={{GPSspeed:this.props.gps.speed,RPMspeed:this.props.motor.speed}}/>
                    </div>
               </div>
          </div>
        );
     }
};

     
export default Car;