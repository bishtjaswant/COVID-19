import React, { Component } from "react";
import './Summary.css';


class Summary extends Component {
  render() {
    const { summary, countries, date } = this.props;
    return (
      <div className="dashboard">
        <div className="NewConfirmed">
          <h1>NewConfirmed</h1>
          <h5> {summary.NewConfirmed} </h5>
          <strong> {new Date(date).toDateString()}</strong>
        </div>
        <div className="NewDeaths">
          <h1>NewDeaths</h1>
          <h5> {summary.NewDeaths} </h5>
          <strong> {new Date(date).toDateString()}</strong>
        </div>
        <div className="NewRecovered">
          <h1>NewRecovered</h1>
          <h5> {summary.NewRecovered} </h5>
          <strong> {new Date(date).toDateString()}</strong>
        </div>
        <div className="TotalConfirmed">
          <h1>TotalConfirmed</h1>
          <h5> {summary.TotalConfirmed} </h5>
          <strong> {new Date(date).toDateString()}</strong>
        </div>

           <div className="TotalDeaths">
          <h1>TotalDeaths</h1>
          <h5> {summary.TotalDeaths} </h5>
          <strong> {new Date(date).toDateString()}</strong>
        </div>

        <div className="TotalRecovered">
          <h1>TotalRecovered</h1>
          <h5> {summary.TotalRecovered} </h5>
          <strong> {new Date(date).toDateString()}</strong>
        </div>
      </div>
    );
  }
}

export default Summary;
