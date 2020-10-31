import React from 'react';
import {Line} from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import 'chartjs-plugin-streaming';

class LineGraph extends React.Component{
  constructor(props) {
    super(props)
    this.onRefresh = this.onRefresh.bind(this);
  }

  onRefresh = (chart) => {
    var dataVals = this.props.vals;
    chart.data.datasets.forEach(function (dataset){
      dataset.data.push({
        x: Date.now(),
        y: dataVals
      });
    });
  }

  render() {
    var pause = this.props.pause;
    var data = {
      labels: this.props.labels,
      datasets: [{
        label: this.props.name,
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      }]
    }
    var options = {
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          //type: 'realtime',
          gridLines: { display: true }, 
          type: "time", 
          time: { parser: "DD/MM/YYYY" },
          realtime: {
            refresh: 250,
            onRefresh: this.onRefresh,
            delay: 1000,
            pause: pause,
          }
        }]
      }
    }
    var changeDialogState = this.props.changeDialogState;
    return (
      <div>
        <select onChange={changeDialogState}>
          <option style={{display: "none"}}>Pick parameter to display</option>
          <option value="hall-effect|rpm">RPM</option>
          <option value="hall-effect|speed">Speed</option>
          <option value="hall-effect|throttle">Throttle</option>
          <option value="accelerometer|acceleration x">Acceleration X</option>
          <option value="accelerometer|acceleration y">Acceleration Y</option>
          <option value="accelerometer|acceleration z">Acceleration Z</option>
          <option value="joulemeter|current">Current</option>
          <option value="joulemeter|power">Power</option>
          <option value="joulemeter|voltage">Voltage</option>
          <option value="magnetometer|MagX">MagX</option>
          <option value="magnetometer|MagY">MagY</option>
          <option value="magnetometer|MagZ">MagZ</option>
          <option value="gyroscope|GyX">GyX</option>
          <option value="gyroscope|GyY">GyY</option>
          <option value="gyroscope|GyZ">GyZ</option>
          <option value="gyroscope|heading">Heading</option>
          <option value="gyroscope|pitch">Pitch</option>
          <option value="gyroscope|roll">Roll</option>
          <option value="gps|latitude">Latitude</option>
          <option value="gps|longitude">Longitude</option>
          <option value="environment|altitude">Altitude</option>
          <option value="environment|temperature">Temperature</option>
        </select>
        <div className="card">
          <div className="card-image">
            <Line ref="chart" data={data} height={1000} options={options} />
          </div>
        </div>
      </div>
    );
  }
};

export default LineGraph;
