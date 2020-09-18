import React from 'react';

class Driver extends React.Component{
     // render() {
     //      return (
     //      <div className="card driver">
     //           <div className="columns">
     //           <div className="card-content column">
     //                <div>
     //                     <figure className="image is-96x96">
     //                          <img src={this.props.driver["image"]} alt=""/>
     //                     </figure>

     //                     <div className="media-content">
     //                     <p className="title is-4">{this.props.driver["name"]}</p>
     //                     <p className="title is-6">{this.props.driver["social"]}</p>
     //                     </div>

     //                     <div className="content">
     //                          <p className="title is-6">{this.props.driver["message"]}</p>
     //                     </div>
     //                </div>
     //           </div>

     //           <div className="column">
     //                <img className="car-image is-pulled-right" src="./images/car.png" alt=""/>  
     //           </div>
     //           </div>
     //      </div>
     //    );
     // }
     render() {
          return (
          <div className="card driver">
               <div className="columns">
               <div className="card-content column">
                    <div>
                         <figure className="image is-96x96">
                              <img src="./images/Caroline.jpg" alt=""/>
                         </figure>

                         <div className="media-content">
                         <p className="title is-4">Caroline</p>
                         <p className="title is-6">@CarolineDriver</p>
                         </div>

                         <div className="content">
                              <p className="title is-6">I Believe In You!!!</p>
                         </div>
                    </div>
               </div>

               <div className="column">
                    <img className="car-image is-pulled-right" src="./images/car.png" alt=""/>  
               </div>
               </div>
          </div>
        );
     }
};

     
export default Driver;