import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

class Retail extends Component {

  render() {
    return (
      <div>
        <div className="animated fadeIn">
          <div className="row">
              <div className="card">
                <div className="card-header">
                  Retail Data
                </div>
                <div className="card-block">
                  RANDOM PLACEHOLDER BS INFORMATION ABOUT RETAIL <br/><br/>
                </div>
              </div>
          </div>
        </div>
      <div className="animated fadeIn">
          <div className="row">
              <div className="card">
                <div className="card-header">
                  Get Retail Data
                </div>
                <div className="card-block">
                  The API should return the monthly turnover of each region and each category, for the specified
                  period of time. <br/><br/>

                HTTP Request <br/>
                GET http://45.75.114.158/api/
                <br/><br/>

                Required Query Parameters
                <div className="row">
                  <div className="col align-items-center">
                    <div className="card">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Parameter</th>
                            <th>Default</th>
                            <th>Values</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>StatisticsArea</td>
                            <td>null</td>
                            <td>Retail</td>
                            <td>must be set to retail in order to retrieve retial data</td>
                          </tr>
                          <tr>
                            <td>State</td>
                            <td>null</td>
                            <td>State</td>
                            <td>A list of one or more regions seperated by a "," character</td>
                          </tr>
                          <tr>
                            <td>Category</td>
                            <td>null</td>
                            <td>Category</td>
                            <td>A list of one or more categories separated by a "," character</td>
                          </tr>
                          <tr>
                            <td>startDate</td>
                            <td>null</td>
                            <td>Date</td>
                            <td>The starting search date</td>
                          </tr>
                          <tr>
                            <td>endDate</td>
                            <td>null</td>
                            <td>Date</td>
                            <td>The ending search date</td>
                          </tr>                                                                              
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                Optional Query Parameters
                <div className="row">
                  <div className="col align-items-center">
                    <div className="card">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Parameter</th>
                            <th>Default</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>pretty</td>
                            <td>null</td>
                            <td>Returns a result JSON file that is much more human-readable</td>
                          </tr>                                                                           
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <Collapsible trigger="Start here">
                  <p>
                  &emsp; hi 
                  </p>
                </Collapsible>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Retail;
