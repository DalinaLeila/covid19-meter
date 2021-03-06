import React, { Component } from "react";

import Chart from "./Chart";
import PieChart from "./PieChart";
import { countryCodes } from "./checkCountryCode";
import Rates from "./Rates";
import axios from "axios";
import "./App.css";
import { checkCountryCode } from "./checkCountryCode";
import { Main } from "./Hr";
import { Row } from "react-bootstrap";

class CountryDetails extends Component {
  state = {
    timeline: [],
    select: [],
  };

  numberWithCommas(x) {
    if (!x) return x;
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getTimeline = () => {
    let nameTimeline = this.props.match.params.country.toLowerCase();
    const baseURL = `https://api.coronastatistics.live/timeline/${checkCountryCode(
      nameTimeline
    )}`;

    axios
      .get(baseURL)
      .then((res) => {
        this.setState({
          timeline: res.data.data.timeline,
        });
      })
      .catch((err) => console.log(err));
  };

  getCountry = () => {
    const countryCode = this.props.match.params.country;

    const baseURL = `https://api.coronastatistics.live/countries/${countryCode}`;

    axios
      .get(baseURL)
      .then((res) => {
        this.setState({
          select: res.data,
        });
      })
      .catch((err) => console.log(err));
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
    let code = countryCodes[select.country];
    if (!select.cases && !select.deaths && !select.recovered) {
      return <div></div>;
    }
    return (
      <div id="details">
        <div className="flex-row flex-center center-text">
          {!code ? (
            <img
              className="flag"
              width="50px"
              height="40px"
              src={require("./assets/flags/unknown.svg")}
              alt={`${select.country}`}
            />
          ) : (
            <>
              <img
                className="flag"
                width="50px"
                src={require(`./assets/flags/${code.toLowerCase()}.svg`)}
                alt={`${select.country}`}
              />
            </>
          )}
          <h1>{select.country}</h1>
        </div>
        <Row className="mainOverview">
          <Main className="col" color="var(--mainBlue)">
            <div>
              <h4>Cases</h4>
              <div className="flex-col center">
                <h2>{this.numberWithCommas(select.cases)}</h2>
                <p>
                  {" "}
                  {this.numberWithCommas(select.todayCases)
                    ? `${this.numberWithCommas(select.todayCases)} Today`
                    : ""}
                </p>
              </div>
            </div>
          </Main>
          <Main className="col" color="var(--mainRed)">
            <div>
              <h4>Deaths</h4>
              <div className="flex-col center">
                <h2>{this.numberWithCommas(select.deaths)}</h2>
                <p>
                  {this.numberWithCommas(select.todayDeaths)
                    ? `${this.numberWithCommas(select.todayDeaths)} Today`
                    : ""}
                </p>
              </div>
            </div>
          </Main>
          <Main className="col" color="var(--green)">
            <div>
              <h4>Recovered</h4>
              <div className="flex-col center">
                <h2>{this.numberWithCommas(select.recovered)}</h2>
                <p>
                  {this.numberWithCommas(
                    select.cases - select.deaths - select.recovered
                  )
                    ? `${this.numberWithCommas(
                        select.cases - select.deaths - select.recovered
                      )}  Remaining`
                    : ""}
                </p>
              </div>
            </div>
          </Main>
        </Row>
        <div className="container-stats flex-row flex-space-between ">
          <PieChart
            timeline={timeline}
            select={select}
            numberWithCommas={this.numberWithCommas}
          />
          <Rates select={select} />
        </div>
        <Chart timeline={timeline} select={select} />
      </div>
    );
  }
}

export default CountryDetails;
