import React from 'react';
import GroundDash from './groundDash'
import DriverDash from './driverDash'

class WhichOne extends React.Component {
    render() {
        let whichOne = this.props.whichOne.which;
        const Which = () => {
            if (whichOne === "ground") {
                return <GroundDash joulemeter={this.props.whichOne.joulemeter} environment={this.props.whichOne.environment} magnetometer={this.props.whichOne.magnetometer} imu={this.props.whichOne.imu} accelerometer={this.props.whichOne.accelerometer} halleffect={this.props.whichOne.halleffect} gps={this.props.whichOne.gps} lap={this.props.whichOne.all} track={this.props.whichOne.all} />
            }
            else if (whichOne === "driver" ) {
                return <DriverDash speed={this.props.whichOne.halleffect} speedometer={this.props.whichOne.halleffect} lap={this.props.whichOne.all} />
            }
        }
        return (
            <div>{Which()}</div>
        );
    }
};

export default WhichOne;

