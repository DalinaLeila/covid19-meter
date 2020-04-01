import React from "react";
import { Rate } from "./Hr";
import "./App.css";
const Rates = props => {
  let criticalRate = (
    (props.select.critical / props.select.cases) *
    100
  ).toFixed(2);
  let recoveryRate = (
    (props.select.recovered / props.select.cases) *
    100
  ).toFixed(2);
  let fatalityRate = ((props.select.deaths / props.select.cases) * 100).toFixed(
    2
  );

  let mildRate = (
    ((props.select.active - props.select.critical) / props.select.cases) *
    100
  ).toFixed(2);

  return (
    <div className="rates">
      <h3>{props.select.country}'s Infection Rates</h3>
      {/* {props.select.active + props.select.recovered + props.select.deaths} same as all cases*/}
      <div className="flex-container ">
        <div className="flex-item">
          <Rate color="#3b8d68">{recoveryRate}%</Rate>
          <h4>Recovery Rate*</h4>
        </div>
        <div className="flex-item">
          <Rate color="#e64d4d">{fatalityRate}%</Rate>
          <h4>Fatality Rate*</h4>
        </div>
        <div className="flex-item">
          <Rate color="#efb81f">{criticalRate}%</Rate>
          <h4>Critical Rate*</h4>
        </div>
        <div className="flex-item">
          <Rate color="#7b95b5">{mildRate}%</Rate>

          <h4>Mild Rate*</h4>
        </div>
      </div>
      <p>*rate calculated by dividing its sum by total number of cases</p>
    </div>
  );
};

export default Rates;
