import React from 'react';

class Joulemeter extends React.Component{

  render() {
    return (
        <div className="joulemeter">
            <div className="card-content">
                <p className="title is-4">Joulemeter</p>
                <p className="title is-6">{this.props.joulemeter.voltage} V | {this.props.joulemeter.current} A</p>
                <p className="title is-6 is-spaced">Power: {this.props.joulemeter.power} W</p>
            </div>
        </div>
    );
  }
};

     
export default Joulemeter;