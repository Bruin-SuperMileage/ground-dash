import React from 'react';

class Accelerometer extends React.Component{

    render() {
        var acceleration = ((this.props.accelerometer["acceleration x"]**2 + 
        this.props.accelerometer["acceleration y"]**2 +
        this.props.accelerometer["acceleration z"]**2)**0.5).toFixed(3);
        return (
          <div className="joulemeter">
               <div className="card-content">
                    <p className="title is-5">Accelerometer</p>
                    <p className="subtitle is-6">Acceleration X: {this.props.accelerometer["acceleration x"]} g</p>
                    <p className="subtitle is-6">Acceleration Y: {this.props.accelerometer["acceleration y"]} g</p>
                    <p className="subtitle is-6">Acceleration Z: {this.props.accelerometer["acceleration z"]} g</p>
                    <p className="subtitle is-6">Acceleration: {acceleration} g</p>
               </div>h
          </div>
        );
     }
};

     
export default Accelerometer;