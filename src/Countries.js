import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { countryCodes } from "./checkCountryCode";

class Countries extends Component {
  render() {
    return (
      <div className="container flex-col">
        <div className="search-function">
          <input
            name="search"
            value={this.props.search}
            onChange={this.props.handleInput}
            type="text"
            placeholder="Search Country"
          />
          <select onChange={this.props.handleInput} name="sort" id="sort">
            <option value="cases">Total Cases</option>
            <option value="todayCases">Today Cases</option>
            <option value="deaths">Total Deaths</option>
            <option value="todayDeaths">Today Deaths</option>
            <option value="recovered">Total Recoveries</option>
          </select>
        </div>
        <div className="country-list">
          {this.props.countries.map((country, index) => {
            let code = countryCodes[country.country];

            return (
              <Link
                onClick={this.props.resetSearch}
                className="countryCard"
                key={index}
                to={`/countries/${country.country}`}
              >
                <div>
                  <div className="countryCard-wrapper flex-center">
                    {!code ? (
                      <img
                        className="flag"
                        width="40px"
                        height="30px"
                        src={require("./assets/flags/unknown.svg")}
                        alt={`${country.country}`}
                      />
                    ) : (
                      <img
                        className="flag"
                        width="40px"
                        height="30px"
                        src={require(`./assets/flags/${code.toLowerCase()}.svg`)}
                        alt={`${country.country}`}
                      />
                    )}
                    <h5>{country.country}</h5>
                  </div>
                  <p className="phone-hide">
                    <span className="bold cases  ">
                      {this.props.numberWithCommas(country.cases)} Cases
                    </span>{" "}
                    {""}
                    &amp; 
                    {""}
                    <span className="bold deaths">
                      {this.props.numberWithCommas(country.deaths)} Deaths
                    </span>
                  </p>
                </div>
                <div className="today-countryCard ">
                  <p className="cases">
                    +{this.props.numberWithCommas(country.todayCases)} Cases
                  </p>
                  <p className="deaths">
                    +{this.props.numberWithCommas(country.todayDeaths)} Deaths
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Countries;
