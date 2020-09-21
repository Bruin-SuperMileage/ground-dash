import React from 'react';
import ReactSpeedometer from "react-d3-speedometer"

class SpeedometerDriver extends React.Component{
    render() {
        return (
          <div className="columns">
               <div className="column has-text-centered">
                <ReactSpeedometer
                    minValue={0}
                    maxValue={70}
                    needleHeightRatio={0.8}
                    maxSegmentLabels={8}
                    segments={5555}
                    value={this.props.speedometer.speed}
                    textColor={"white"}
                    width={1000}
                    height={450}
                    needleTransition={"easePolyIn"}
                    ringWidth={120}
                    paddingVertical={150}
                    valueTextFontSize={'0'}
                    labelFontSize={'50'}
                    paddingHorizontal={100}
                />
               </div>
          </div>
        );
     }
};

export default SpeedometerDriver;