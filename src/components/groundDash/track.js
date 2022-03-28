import React from 'react';
import Lap from './lap';
import GPS from './gps';
import Controls from './controls';

class Track extends React.Component{
     render() {
          return (
               <div className="card track">
                    <div className="columns">
                         <div className="column">
                              <div className="card-content">
                                   <p className="title is-4">Indianapolis Motor Speedway</p>
                                   <p className="title is-6">{this.props.track["Latest Trial"]} </p>
                              </div>
                              <GPS gps={this.props.gps}/>
                         </div>
                    </div>
                    {/* <Lap lap={this.props.lap}/> */}
                    <div className="card-image">
                         {/* <Controls/> */}
                    </div>
               </div>
          );
     }
};
     
export default Track;