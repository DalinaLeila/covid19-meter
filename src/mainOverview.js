import React, { Component } from "react";
import { Hr, Main } from "./Hr";
import { Row, Col, Container } from "react-bootstrap";

const MainOverview = (props) => {
  return (
    <div className="containerOverview">
      <Main overallCard color="var(--mainBlue)">
        <div>
          <h4>Cases</h4>
          <h2>{props.numberWithCommas(props.overview.cases)}</h2>
        </div>
      </Main>
      <Main overallCard color="var(--mainRed)">
        <div>
          <h4>Deaths</h4>
          <h2>{props.numberWithCommas(props.overview.deaths)}</h2>
        </div>
      </Main>
      <Main overallCard color="var(--green)">
        <div>
          <h4>Recovered</h4>
          <h2>{props.numberWithCommas(props.overview.recovered)}</h2>
        </div>
      </Main>
    </div>
  );
};

export default MainOverview;
