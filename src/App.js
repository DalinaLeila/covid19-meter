import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Countries from "./Countries";
import MainOverview from "./mainOverview";
import Navigation from "./Navbar";
import CountryDetails from "./CountryDetails";
import Timer from "./Timer";
class App extends Component {
  state = {
    overview: [],
    countries: [],
    search: "",
    sort: "cases"
  };

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getOverview = () => {
    const baseURL = "http://api.coronastatistics.live/all";
    axios
      .get(baseURL)
      .then(res => {
        this.setState({
          overview: res.data
        });
      })
      .catch(err => console.log(err));
  };

  getCountryData = () => {
    const baseURL = "http://api.coronastatistics.live/countries";
    axios
      .get(baseURL)
      .then(res => {
        let filtered = res.data.filter(country => {
          return country.country.toLowerCase().includes(this.state.search);
        });
        this.setState({
          countries: filtered
        });
      })
      .catch(err => console.log(err));
  };

  sortCountryData = () => {
    const baseURL = `http://api.coronastatistics.live/countries?sort=${this.state.sort}`;
    axios
      .get(baseURL)
      .then(res => {
        let sorted = res.data.sort((a, b) => {
          return b[this.state.sort] - a[this.state.sort];
        });
        this.setState({
          countries: sorted,
          search: ""
        });
      })
      .catch(err => console.log(err));
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
    e.target.name === "search" ? this.getCountryData() : this.sortCountryData();
  };

  resetSearch = () => {
    this.setState({
      search: ""
    });
  };
  componentDidMount() {
    this.getOverview();
    this.sortCountryData();
  }

  render() {
    //     country: "China"
    // cases: 81439
    // todayCases: 45
    // deaths: 3300
    // todayDeaths: 5
    // recovered: 75448
    // active: 2691
    // critical: 742
    // casesPerOneMillion: 57
    // deathsPerOneMillion: 2
    {
      /* <h3>{country.country}</h3>
          <h5>Cases: {country.cases}</h5>
          <h5>Today Cases: {country.todayCases}</h5>
          <h5>Deaths: {country.deaths}</h5>
          <h5>Today Deaths: {country.todayDeaths}</h5> */
    }
    {
      /* <h5>Recovered: {country.recovered}</h5>
          <h5>Critical: {country.critical}</h5> */
    }
    const { overview, countries } = this.state;
    if (!overview.cases && !overview.deaths && !overview.recovered) {
      return <div></div>;
    }
    return (
      <div className="App">
        <Navigation />
        <div className="flex-row">
          <div className="flex-col">
            <Timer />
            <MainOverview
              numberWithCommas={this.numberWithCommas}
              overview={overview}
            />
            <Countries
              resetSearch={this.resetSearch}
              search={this.state.search}
              numberWithCommas={this.numberWithCommas}
              handleInput={this.handleInput}
              countries={countries}
            />
          </div>
          <div>
            <Route
              exact
              path="/"
              render={props => <Timer {...props} />}
            ></Route>
            <Route
              exact
              path="/countries/:country"
              render={props => <CountryDetails {...props} />}
            ></Route>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
