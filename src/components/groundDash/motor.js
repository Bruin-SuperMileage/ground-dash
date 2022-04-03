import React from 'react';

class Motor extends React.Component{
  render() {
    return (
      <div className="motor">
        <div className="card-content">
          <p className="title is-5">Motor</p>
          <p className="subtitle is-6">Cruise: {this.props.motor.cruise}</p>
          <p className="subtitle is-6">Desired RPM: {this.props.motor["desiredRPM"]} RPM</p>
          <p className="subtitle is-6">Filtered RPM: {this.props.motor["filteredRPM"]} RPM</p>
          <p classname="subtitle is-6">Speed: {this.props.motor.speed} mph</p>
          {/* <p className="subtitle is-6">Temp: {this.props.motor.temp} F</p> */}
        </div>
      </div>
    );
   }
};

   
export default Motor;