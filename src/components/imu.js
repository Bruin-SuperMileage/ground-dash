import React from 'react';

class Imu extends React.Component{
    render() {
        return (
            <div className="joulemeter">
                <div className="card-content">
                    <p className="title is-5">IMU</p>
                    <p className="subtitle is-6">Heading: {this.props.imu.Heading}</p>
                    <p className="subtitle is-6">Magnitude X: {this.props.imu.MagX}</p>
                    <p className="subtitle is-6">Magnitude Y: {this.props.imu.MagY}</p>
                    <p className="subtitle is-6">Magnitude Z: {this.props.imu.MagZ}</p>
                    <p className="subtitle is-6">Pitch: {this.props.imu.Pitch} W</p>
                    <p className="subtitle is-6">Roll: {this.props.imu.Roll} W</p>
                </div>
            </div>
        );
    }
};

export default Imu;