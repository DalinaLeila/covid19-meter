import React, { Component } from "react";
import moment from "moment";
import { Bar, Line, Pie } from "react-chartjs-2";
import "./App.css";
class PieChart extends Component {
  state = {
    chartData: {}
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        chartData: {
          labels: ["Critical", "Recovered", "Deaths"],
          datasets: [
            {
              data: [
                this.props.select.critical,
                this.props.select.recovered,
                this.props.select.deaths
              ],
              backgroundColor: ["#efb81f", "#3b8d68", "#e64d4d"],
              hoverBackgroundColor: ["#efb81f", "#3b8d68", "#e64d4d"]
            }
          ]
        }
      });
    }
  }

  render() {
    console.log(this.props.select);

    return (
      <div className="pie-chart">
        <Pie
          height={200}
          width={400}
          data={this.state.chartData}
          options={{
            maintainAspectRatio: false,
            responsive: false,
            responsiveAnimationDuration: 0.3,
            legend: {
              position: "left",
              labels: {
                boxWidth: 10
              }
            }
            // legend: {
            //   display: true,
            //   position: "top"
            // },
            // responsive: true,
            // maintainAspectRatio: true,
          }}
        />
      </div>
    );
  }
}

export default PieChart;
