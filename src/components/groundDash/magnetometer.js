import React from 'react';

class Magnetometer extends React.Component{

  render() {
    return (
      <div className="battery">
         <div className="card-content">
          <p className="title is-5">Magnetometer</p>
          <p className="subtitle is-6">Magnetism X: {this.props.magnetometer.MagX} m/s²</p>
          <p className="subtitle is-6">Magnetism Y: {this.props.magnetometer.MagY} m/s²</p>
          <p className="subtitle is-6">Magnetism Z: {this.props.magnetometer.MagZ} m/s²</p>
         </div>
      </div>
    );
   }
};

   
export default Magnetometer;