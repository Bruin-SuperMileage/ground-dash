import React from 'react';

class Joulemeter extends React.Component{

    render() {
        return (
          <div className="joulemeter">
               <div className="card-content">
                    <p className="title is-5">Joulemeter</p>
                    <p className="title is-6">{this.props.joulemeter.volt} V | {this.props.joulemeter.amp} A</p>
                    <p className="title is-6 is-spaced">Instant Power: {this.props.joulemeter.instant} W</p>
                    <p className="subtitle is-6">Avg Efficiency: {this.props.joulemeter.avg} mi/kWh</p>
                    <p className="subtitle is-6">Peak Efficiency: {this.props.joulemeter.peak} mi/kWh</p>
                    <p className="subtitle is-6">Altitude: {this.props.joulemeter.Altitude} </p>
                    <p className="subtitle is-6">GyX: {this.props.joulemeter.GyX}°</p>
                    <p className="subtitle is-6">GyY: {this.props.joulemeter.GyY}°</p>
                    <p className="subtitle is-6">GyZ: {this.props.joulemeter.GyZ}°</p>
               </div>
          </div>
        );
     }
};

     
export default Joulemeter;