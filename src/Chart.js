import React, { Component } from "react";
import moment from "moment";
import { Bar, Line, Pie } from "react-chartjs-2";
import "./App.css";
class Chart extends Component {
  state = {
    chartData: {}
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      let deaths = this.props.timeline.map(el => {
        return el.deaths;
      });

      let cases = this.props.timeline.map(el => {
        return el.cases;
      });

      let recovered = this.props.timeline.map(el => {
        return el.recovered;
      });

      let dates = this.props.timeline.map(el => {
        return moment(el.date).format("MMM Do");
      });

      this.setState({
        chartData: {
          labels: dates,

          datasets: [
            {
              label: "Cases",
              // lineTension: 0.1,

              backgroundColor: "#7b95b5",
              borderColor: "#7b95b5",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "#7b95b5",
              pointBackgroundColor: "#fff",
              // pointBorderWidth: 1,
              // pointHoverRadius: 5,
              pointHoverBackgroundColor: "#7b95b5",
              pointHoverBorderColor: "#7b95b5",
              // pointHoverBorderWidth: 2,
              // pointRadius: 1,
              // pointHitRadius: 10,
              data: cases
              // fill: false
            },
            {
              label: "Recovered",
              // lineTension: 0.1,
              borderColor: "#3b8d68",
              backgroundColor: "#3b8d68",
              pointBorderColor: "#3b8d68",
              pointBackgroundColor: "#fff",
              pointHoverBackgroundColor: "#3b8d68",
              pointHoverBorderColor: "#3b8d68",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              // pointBorderWidth: 1,
              // pointHoverRadius: 5,

              // pointHoverBorderWidth: 2,
              // pointRadius: 1,
              // pointHitRadius: 10,
              data: recovered,
              fill: true
            },
            {
              label: "Deaths",
              // lineTension: 0.1,
              backgroundColor: `#e64d4d`,
              borderColor: `#e64d4d`,
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: `#e64d4d`,
              pointBackgroundColor: "#fff",
              // pointBorderWidth: 1,
              // pointHoverRadius: 5,
              pointHoverBackgroundColor: `#e64d4d`,
              pointHoverBorderColor: `#e64d4d`,
              // pointHoverBorderWidth: 2,
              // pointRadius: 1,
              // pointHitRadius: 10,
              fill: true,
              data: deaths
            }
          ]
        }
      });
    }
  }

  render() {
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: "Infections History",
              fontSize: 20
            },
            legend: {
              display: true,
              position: "bottom"
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ],
              yAxes: [
                {
                  gridLines: {
                    color: true
                  },

                  ticks: {
                    beginAtZero: true,
                    userCallback: function(value, index, values) {
                      value = value.toString();
                      value = value.split(/(?=(?:...)*$)/);
                      value = value.join(",");
                      return value;
                    }
                  }
                }
              ]
            },
            responsive: true,
            maintainAspectRatio: true,
            responsiveAnimationDuration: 0.3
          }}
        />
      </div>
    );
  }
}

export default Chart;
