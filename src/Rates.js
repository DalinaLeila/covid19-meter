import React from "react";
import { Rate } from "./Hr";
import "./App.css";
const Rates = props => {
  return (
    <div className="rates">
      <h3>{props.select.country}'s Infection Rates</h3>
      {/* {props.select.active + props.select.recovered + props.select.deaths} same as all cases*/}
      <div className="flex-container ">
        <div className="flex-item">
          <Rate color="#3b8d68">
            {(
              (props.select.recovered /
                (props.select.deaths + props.select.recovered)) *
              100
            ).toFixed(2)}
            %
          </Rate>
          <h4>Recovery Rate</h4>
        </div>
        <div className="flex-item">
          <Rate color="#e64d4d">
            {((props.select.deaths / props.select.cases) * 100).toFixed(2)}%
          </Rate>
          <h4>Fatality Rate</h4>
        </div>
        <div className="flex-item">
          <Rate color="#efb81f">
            {((props.select.critical / props.select.active) * 100).toFixed(2)}%
          </Rate>
          <h4>Critical Rate</h4>
        </div>
        <div className="flex-item">
          <Rate color="#7b95b5">
            {(
              ((props.select.active - props.select.critical) /
                props.select.active) *
              100
            ).toFixed(2)}
            %
          </Rate>

          <h4>Mild Cases</h4>
        </div>
      </div>
    </div>
  );
};

export default Rates;
