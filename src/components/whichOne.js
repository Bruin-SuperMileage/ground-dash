import React from 'react';
import GroundDash from './groundDash'
import DriverDash from './driverDash'

class WhichOne extends React.Component {
    render() {
        let {which,
            joulemeter,
            environment,
            magnetometer,
            imu, 
            accelerometer, 
            halleffect, 
            gps, 
            all}  = this.props.whichOne;
        const Which = () => {
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
                track={all} />
            }
            else if (which === "driver" ) {
                return <DriverDash 
                speed={halleffect} 
                speedometer={halleffect} 
                lap={all} />
            }
        }
        return (
            <div>{Which()}</div>
        );
    }
};

export default WhichOne;

