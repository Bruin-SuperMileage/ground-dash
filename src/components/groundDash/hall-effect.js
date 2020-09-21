import React from 'react';

class HallEffect extends React.Component{

    render() {
        return (
          <div className="speed">
               <div className="card-content">
                    <p className="title is-4">Speed: {this.props.halleffect.speed} m/s</p>
                    <p className="title speed-title is-6 is-spaced">RPM: {this.props.halleffect.rpm} rpm</p>
                    <p className="subtitle speed-title is-6 is-spaced">Throttle: {this.props.halleffect.throttle}%</p>
               </div>
          </div>
        );
     }
};

export default HallEffect;