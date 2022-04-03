import React from 'react';

class Speed extends React.Component{

  render() {
    console.log(this.props.speed)
    return (
      <div className="speed">
            <div className="card-content">
                <p className="title is-4">RPM Speed: {this.props.speed.RPMspeed} mph</p>
                <p className="title is-4">GPS Speed: {this.props.speed.GPSspeed} mph</p>
                {/* <p className="title is-4">Speed: {this.props.speed.speed} m/s</p>
                
                <p className="title speed-title is-6 is-spaced">RPM: {this.props.speed.rpm} rpm</p>
                <p className="subtitle speed-title is-6 is-spaced">Throttle: {this.props.speed.throttle}%</p>
                <p className="subtitle speed-title is-6 is-spaced">X Accel: {this.props.speed["acceleration x"]} m/s<sup>2</sup></p>
                <p className="subtitle speed-title is-6 is-spaced">Y Accel: {this.props.speed["acceleration y"]} m/s<sup>2</sup></p>
                <p className="subtitle speed-title is-6 is-spaced">Z Accel: {this.props.speed["acceleration z"]} m/s<sup>2</sup></p>
                
                <p className="subtitle is-6">Avg Speed: {this.props.speed.avg} mph</p>
                <p className="subtitle is-6"></p> */}
            </div>
      </div>
    );
  }
};

export default Speed;