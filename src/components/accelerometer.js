import React from 'react';

class Accelerometer extends React.Component{

    render() {
        return (
          <div className="joulemeter">
               <div className="card-content">
                    <p className="title is-5">Accelerometer</p>
                    <p className="subtitle is-6">Acceleration X: {this.props.accelerometer["acceleration x"]} m/s²</p>
                    <p className="subtitle is-6">Acceleration Y: {this.props.accelerometer["acceleration y"]} m/s²</p>
                    <p className="subtitle is-6">Acceleration Z: {this.props.accelerometer["acceleration z"]} m/s²</p>
                    
               </div>
          </div>
        );
     }
};

     
export default Accelerometer;