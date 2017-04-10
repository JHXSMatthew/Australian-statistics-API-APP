import React, { Component } from 'react';

class Introduction extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
            <div className="card">
              <div className="card-header">
                Introduction
              </div>
              <div className="card-block">
                Australian Statistics API will receive a request from a third party software specifying an area of statistics, a list of regions, a list of categories (industries or commodities) and a period of time specified by start and end date.Our API returns the statistics according to the area of statistics.
              </div>
            </div>
        </div>
      </div>
    )
  }
}


export default Introduction;
