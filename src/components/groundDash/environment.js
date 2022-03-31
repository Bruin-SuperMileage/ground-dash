import React from 'react';

class Environment extends React.Component{

  render() {
    return (
      <div className="battery">
         <div className="card-content">
          <p className="title is-5">Environment</p>
          <p className="subtitle is-6">Altitude: {this.props.environment.altitude} ft</p>
          <p className="subtitle is-6">Temperature: {this.props.environment.temperature} °C</p>
         </div>
      </div>
    );
   }
};

   
export default Environment;