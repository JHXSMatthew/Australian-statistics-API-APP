import React, { Component } from 'react';

class DataAnalyzerDoc extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="card">
              <div className="card-header">
                API Overview
              </div>
              <div className="card-block">
                This is a live API interface to display the data sets obtained from the Team Rocket’s Australian Statistics API. The data will be displayed on the data table and plotted against the chart by regions.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card">
                <div className="card-header">
                  Data Fetcher
                </div>
                <div className="card-block">
                  <p><b>Statistics Area</b>: Obtaining data sets from main areas, Retail and Merchandise Exports.</p>
                  <p><b>Regions</b>: Regions separated by Australian states.</p>
                  <p><b>Category</b>: Industries (Retail) or Commodities of interest (Merchandise Exports) listed under the statistics area</p>
                  <p><b>Date Range</b>: The range by month and year of the data required. </p>
                </div>
              </div>
          </div>
          <div className="col-sm-6 col-md-4">
              <div className="card">
                <div className="card-header">
                  Data Set
                </div>
                <div className="card-block">
                  This table will initially list categories and display their corresponding average values fetched by the data fetcher. The table can expand the data set with the arrow on the left of the rows to show the averages of the value per state requested. it can further expand to display individual values for the months requested.
                  <p>Values</p>
                  <p>If Retail is the selected, the Monthly Retail Turnover by Industry Group is returned in ($ millions).</p>
                  <p>If Merchandise Export is selected, the Monthly Value of Exports by Commodity is returned in ($ thousands).</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
              <div className="card">
                <div className="card-header">
                  Charts
                </div>
                <div className="card-block">
                  The line charts display the data values for each region for the Industry (Retail) or Commodity of interest (Merchandise Exports) for selected area. There is a separate chart for each category, that can be navigated through by the tabs. Charts are plotted values to date.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DataAnalyzerDoc;
