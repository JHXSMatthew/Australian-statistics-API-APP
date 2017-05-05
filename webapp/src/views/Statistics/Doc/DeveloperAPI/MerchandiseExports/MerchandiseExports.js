import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

class MerchandiseExports extends Component {

  render() {
    return (
      <div>
      <div className="animated fadeIn">
          <div className="row">
            <div className="col-7">
                <div className="card">
                  <div className="card-header">
                    Get Merchandise Exports Data
                  </div>
                  <div className="card-block">
                    The API will return the monthly value of each commodity listed in the categories, for each region and within
                    the defined time period. <br/><br/>


                  HTTP Request <br/>
                  GET http://45.75.114.158/api/
                  <br/><br/>

                  <h5>Required Query Parameters</h5>
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
                              <td>MerchandiseExports</td>
                              <td>must be set to MerchandiseExports in order to retrieve retial data</td>
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

                  <h5>Optional Query Parameters</h5>
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
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="card">
                <div className="card-header">
                  Retail Example Request and Response
                </div>
                <div className="card-block">
                  <p>
                  For the following sample request:
                  <SyntaxHighlighter language='javascript' style={docco}>
                  {
                    "http://45.76.114.158/api/?StatisticsArea=MerchandiseExports&State=NSW&Category=CrudMaterialAndInedible&startDate=2013-12-01&endDate=2014-01-01&pretty=true"
                  }
                  </SyntaxHighlighter>
                  Our API will return the following JSON response: <br/>
                  <SyntaxHighlighter language='javascript' style={docco}>
                  {
                              "{\n" +
                     "  \"header\" : {\n" +
                     "    \"status\" : \"success\",\n" +
                     "    \"requestNumber\" : \"201704122321416\"\n" +
                     "  },\n" +
                     "  \"data\" : {\n" +
                     "    \"MonthlyCommodityExportData\" : [ {\n" +
                     "      \"RegionalData\" : [ {\n" +
                     "        \"State\" : \"NSW\",\n" +
                     "        \"Data\" : [ {\n" +
                     "          \"Date\" : \"2013-12-31\",\n" +
                     "          \"Value\" : 461563.709\n" +
                     "        }, {\n" +
                     "          \"Date\" : \"2014-01-31\",\n" +
                     "          \"Value\" : 317914.026\n" +
                     "        } ]\n" +
                     "      } ],\n" +
                     "      \"Commodity\" : \"CrudMaterialAndInedible\"\n" +
                     "    } ]\n" +
                     "  }\n" +
                     "}"
                  }
                  </SyntaxHighlighter>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-7">
                <div className="card">
                  <div className="card-header">
                    Response Format
                  </div>
                  <div className="card-block">
                    The API will send back a response in JSON format. The response object contains both
                    a header, as well as data. The following explains the different attributes in the response.<br/><br/><br/>

                  <h5>Header</h5>
                  <div className="row">
                    <div className="col align-items-center">
                      <div className="card">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Attribute</th>
                              <th>Type</th>
                              <th>Values</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Status</td>
                              <td>String</td>
                              <td>Success, Error</td>
                              <td>Returns success if the API call has been successful, else will return error to indicate the call has failed</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <br/><br/>
                  <h5>Data</h5>
                  <h6>Data object</h6>
                  <div className="row">
                    <div className="col align-items-center">
                      <div className="card">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Attribute</th>
                              <th>Type</th>
                              <th>Values</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>MonthlyCommodityExportData</td>
                              <td>Array</td>
                              <td>RegionalData[...] & Commodity</td>
                              <td>An array of monthly commodity values and actual Data by regions</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <br/>
                  <h6>MonthlyRetailData objects</h6>
                  <div className="row">
                    <div className="col align-items-center">
                      <div className="card">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Attribute</th>
                              <th>Type</th>
                              <th>Values</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>RegionalData</td>
                              <td>Array</td>
                              <td>State & Data[...]</td>
                              <td>An array of regional data</td>
                            </tr>
                            <tr>
                              <td>Commodity</td>
                              <td>Category</td>
                              <td>Category</td>
                              <td>Returns one category of commodities in the area</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <br/>
                  <h6>RegionalData objects</h6>
                  <div className="row">
                    <div className="col align-items-center">
                      <div className="card">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Attribute</th>
                              <th>Type</th>
                              <th>Values</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Data</td>
                              <td>Array</td>
                              <td>Date & Turnover</td>
                              <td>An array which includes the date and turnover data</td>
                            </tr>
                            <tr>
                              <td>State</td>
                              <td>State</td>
                              <td>State</td>
                              <td>An array which contains the regional information</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="card">
                <div className="card-header">
                  Retail Example Request and Response
                </div>
                <div className="card-block">
                  <p>
                  For the following sample request:
                  <SyntaxHighlighter language='javascript' style={docco}>
                  {
                    "http://45.76.114.158/api/?StatisticsArea=MerchandiseExports&State=NSW&Category=CrudMaterialAndInedible&startDate=2013-12-01&endDate=2014-01-01&pretty=true"
                  }
                  </SyntaxHighlighter>
                  Our API will return the following JSON response: <br/>
                  <SyntaxHighlighter language='javascript' style={docco}>
                  {
                            "{\n" +
                    "  \"header\" : {\n" +
                    "    \"status\" : \"success\",\n" +
                    "    \"requestNumber\" : \"201704122324541\"\n" +
                    "  },\n" +
                    "  \"data\" : {\n" +
                    "    \"MonthlyCommodityExportData\" : [ {\n" +
                    "      \"RegionalData\" : [ {\n" +
                    "        \"State\" : \"NSW\",\n" +
                    "        \"Data\" : [ {\n" +
                    "          \"Date\" : \"2013-12-31\",\n" +
                    "          \"Value\" : 461563.709\n" +
                    "        }, {\n" +
                    "          \"Date\" : \"2014-01-31\",\n" +
                    "          \"Value\" : 317914.026\n" +
                    "        } ]\n" +
                    "      } ],\n" +
                    "      \"Commodity\" : \"CrudMaterialAndInedible\"\n" +
                    "    } ]\n" +
                    "  }\n" +
                    "}"
                  }
                  </SyntaxHighlighter>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default MerchandiseExports;
