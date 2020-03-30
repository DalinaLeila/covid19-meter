import React, { Component } from "react";
import { Link } from "react-router-dom";
import Chart from "./Chart";
import PieChart from "./PieChart";

import axios from "axios";
import "./App.css";
import checkCountryCode from "./checkCountryCode";
import { Hr, Main } from "./Hr";
import { Row, Col, Container } from "react-bootstrap";

class CountryDetails extends Component {
  state = {
    timeline: [],
    select: []
  };

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getTimeline = () => {
    let nameTimeline = this.props.match.params.country.toLowerCase();
    const baseURL = `http://api.coronastatistics.live/timeline/${checkCountryCode(
      nameTimeline
    )}`;

    axios
      .get(baseURL)
      .then(res => {
        console.log(res, "res");
        this.setState({
          timeline: res.data.data.timeline
        });
      })
      .catch(err => console.log(err));
  };

  getCountry = () => {
    const baseURL = `http://api.coronastatistics.live/countries/${this.props.match.params.country}`;

    axios
      .get(baseURL)
      .then(res => {
        this.setState({
          select: res.data
        });
      })
      .catch(err => console.log(err));
  };
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.country !== this.props.match.params.country) {
      this.getTimeline();
      this.getCountry();
    }
  }

  componentDidMount() {
    this.getCountry();
    this.getTimeline();
  }

  render() {
    const { timeline, select } = this.state;
    console.log(timeline);

    if (!select.cases && !select.deaths && !select.recovered) {
      return <div></div>;
    }
    return (
      <div id="details">
        <div>
          <h1>{select.country}</h1>
        </div>
        <Row className="mainOverview">
          <Main className="col" color="var(--mainBlue)">
            <div>
              <h4>Cases</h4>
              <div className="flex-col">
                <h2>{this.numberWithCommas(select.cases)}</h2>
                <p> {this.numberWithCommas(select.todayCases)} Today</p>
              </div>
            </div>
          </Main>
          <Main className="col" color="var(--mainRed)">
            <div>
              <h4>Deaths</h4>
              <div className="flex-col">
                <h2>{this.numberWithCommas(select.deaths)}</h2>
                <p>{this.numberWithCommas(select.todayDeaths)} Today</p>
              </div>
            </div>
          </Main>
          <Main className="col" color="var(--green)">
            <div>
              <h4>Recovered</h4>
              <div className="flex-col">
                <h2>{this.numberWithCommas(select.recovered)}</h2>
                <p>
                  {this.numberWithCommas(
                    select.cases - select.deaths - select.recovered
                  )}{" "}
                  Remaining
                </p>
              </div>
            </div>
          </Main>
        </Row>
        <Chart timeline={timeline} />
        <PieChart
          timeline={timeline}
          select={select}
          numberWithCommas={this.numberWithCommas}
        />
      </div>
    );
  }
}

export default CountryDetails;
