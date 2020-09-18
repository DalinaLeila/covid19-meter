import React, { Component } from "react";
import moment from "moment";
import { Line } from "react-chartjs-2";
import "./App.css";
class Chart extends Component {
  state = {
    chartData: {},
  };

  setData = () => {
    let deaths = this.props.timeline.map((el) => {
      return el.deaths;
    });

    let cases = this.props.timeline.map((el) => {
      return el.cases;
    });

    let recovered = this.props.timeline.map((el) => {
      return el.recovered;
    });

    let dates = this.props.timeline.map((el) => {
      return moment(el.date).format("MMM D");
    });

    this.setState({
      // middle: dates[Math.round((dates.length - 1) / 2)],
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
            pointHoverBackgroundColor: "#7b95b5",
            pointHoverBorderColor: "#7b95b5",
            data: cases,
          },
          {
            label: "Recovered",
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

            data: recovered,
            fill: true,
          },
          {
            label: "Deaths",
            backgroundColor: `#e64d4d`,
            borderColor: `#e64d4d`,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: `#e64d4d`,
            pointBackgroundColor: "#fff",
            pointHoverBackgroundColor: `#e64d4d`,
            pointHoverBorderColor: `#e64d4d`,
            fill: true,
            data: deaths,
          },
        ],
      },
    });
  };
  componentDidMount() {
    this.setData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setData();
    }
  }

  render() {
    return (
      <div className="chart">
        <h3>{this.props.select.country}'s Infection History</h3>

        <Line
          className="desktop-hide"
          data={this.state.chartData}
          options={{
            legend: {
              display: true,
              position: "bottom",
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    color: "#f1f1f1",
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                  },
                  gridLines: {
                    color: "#f1f1f1",
                  },

                  ticks: {
                    beginAtZero: true,
                    userCallback: function(value, index, values) {
                      value = value.toString();
                      value = value.split(/(?=(?:...)*$)/);
                      value = value.join(",");
                      return value;
                    },
                  },
                },
              ],
            },
            responsive: true,
            maintainAspectRatio: true,
            responsiveAnimationDuration: 0.3,
          }}
        />
      </div>
    );
  }
}

export default Chart;
