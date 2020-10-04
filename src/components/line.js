import React from 'react';
import {Line} from 'react-chartjs-2';

class LineGraph extends React.Component{
  render() {
    var data = {
      labels: this.props.labels,
      datasets: [
      {
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
        data: this.props.vals,
      }
      ]
    }
    return (
      <div>
        <div className="card">
          <div className="card-image">
            <Line data={data} height={1200} options={{maintainAspectRatio: false}} />
          </div>
        </div>
      </div>
    );
  }
};

export default LineGraph;