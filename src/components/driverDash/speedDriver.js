import React from 'react';

class SpeedDriver extends React.Component{
    render() {
        return (
          <div className="columns">
               <div className="column">
                    <p className = "speed has-text-centered big">{this.props.speed.speed}</p>
                    <p className = "speed has-text-centered km">km/h</p>
               </div>
          </div>
        );
     }
};

export default SpeedDriver;