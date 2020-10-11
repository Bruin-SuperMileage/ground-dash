import React from 'react';
import GroundDash from '../components/groundDash'
import DriverDash from '../components/driverDash'

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
            all,
            labels,
            speedVals,
            rpmVals,}  = this.props.whichOne;
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
                track={all}
                labels={labels}
                rpmVals={rpmVals}
                speedVals={speedVals} />
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

