import React from 'react';

class Imu extends React.Component{
    render() {
        return (
            <div className="joulemeter">
                <div className="card-content">
                    <p className="title is-5">Gyroscope</p>
                    <p className="subtitle is-6">Gyroscopic X: {this.props.imu.GyX} m/s²</p>
                    <p className="subtitle is-6">Gyroscopic Y: {this.props.imu.GyY} m/s²</p>
                    <p className="subtitle is-6">Gyroscopic Z: {this.props.imu.GyZ} m/s²</p>
                    <p className="subtitle is-6">Heading: {this.props.imu.heading}°</p>
                    <p className="subtitle is-6">Pitch: {this.props.imu.pitch}°</p>
                    <p className="subtitle is-6">Roll: {this.props.imu.roll}°</p>
                </div>
            </div>
        );
    }
};

export default Imu;