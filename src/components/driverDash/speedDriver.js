import React from 'react';

class SpeedDriver extends React.Component{
    render() {
        return (
          <div className="columns">
               <div className="column">
                    <p className = "speed has-text-centered big">{parseFloat(this.props.speed.speed*2.23694).toFixed(1)}</p>
                    <p className = "speed has-text-centered km">mph</p>
               </div>
          </div>
        );
     }
};

export default SpeedDriver;