import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
var Scroll = require('@synapsestudios/react-scroll');

var Helpers = Scroll.Helpers;

var Element = React.createClass({
  mixins: [Helpers.Element],
  render: function () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

var Link = React.createClass({
  mixins: [Helpers.Scroll],
  render: function () {
    return (
      <a onClick={this.onClick}>
        {this.props.children}
      </a>
    );
  }
});

class Introduction extends Component {


  render() {

    return (
      <div className="animated fadeIn">
        <div className="row" style={{paddingRight: '15px'}}>

          <div className="col-2" style={{backgroundColor: '#263238', color:'white'}}>
            <div style={{position: 'fixed'}}>
              <div style={{padding:'10px'}}>
                <Link to="introduction" spy={true} smooth={true} offset={-70} duration={500}> Introduction </Link>
              </div>
              <div style={{padding:'10px'}}>
                <Link to="parameterConstraints" spy={true} smooth={true} offset={-70} duration={500} > Parameter Constraints </Link> <br/>
              </div>
              <div style={{padding:'10px'}}>
                <Link to="retail" spy={true} smooth={true} offset={-70} duration={500} > Retail </Link> <br/>
              </div>
              <div style={{padding:'10px'}}>
                <Link to="merchandiseExports" spy={true} smooth={true} offset={-70} duration={500} >Merchandise Exports</Link> <br/>
              </div>
              <div style={{padding:'10px'}}>
                <Link to="Errors" spy={true} smooth={true} offset={-70} duration={500} > Errors </Link> <br/>
              </div>
            </div>
          </div>

          <div className="col-10" style={{paddingTop: '15px'}}>
            <Element name="introduction" className="element">
              <div className="card">
                <div className="card-header">
                  Introduction
                </div>
                <div className="card-block">
                  Australian Statistics API will receive a request from a third party software specifying an area of statistics, a list of regions, a list of categories (industries or commodities) and a period of time specified by start and end date.Our API returns the statistics according to the area of statistics.
                </div>
              </div>
            </Element>


            <Element name="parameterConstraints" className="element">
                <div className="card">
                  <div className="card-header">
                    Parameter Value Constraints
                  </div>
                  <div className="card-block">
                    The following documents the acceptable values that our API will receive. WHenever you pass in a parameter, it should
                    be within the given constraints. If it isn't, our API will return a relevant error back.
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    StatisticsArea
                  </div>
                  <div className="card-block">
                    The following documents the acceptable values that our API will receive. Whenever you pass in a parameter, it should
                    be within the given constraints. If it isn't, our API will return a relevant error back.<br/><br/>
                    <div className="row">
                      <div className="col align-items-center">
                        <div className="card">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Value</th>
                                <th>Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Retail</td>
                                <td>Querying the monthly retail turnover of each region and each category</td>
                              </tr>
                              <tr>
                                <td>MerchandiseExports</td>
                                <td>Querying the monthly value of each commodity listed in the categories, for each region</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    State
                  </div>
                  <div className="card-block">
                   The state parameter should be given as a list of one or more regions below, separated by a "," character.
                   The API will only return statistical data from the regions specified here.<br/><br/>
                    <div className="row">
                      <div className="col align-items-center">
                        <div className="card">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Region</th>
                                <th>Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>AUS</td>
                                <td>Australia (Entire)</td>
                              </tr>
                              <tr>
                                <td>NSW</td>
                                <td>New South Wales</td>
                              </tr>
                              <tr>
                                <td>VIC</td>
                                <td>Victoria</td>
                              </tr>
                              <tr>
                                <td>QLD</td>
                                <td>Queensland</td>
                              </tr>
                              <tr>
                                <td>SA</td>
                                <td>South Australia</td>
                              </tr>
                              <tr>
                                <td>WA</td>
                                <td>Western Australia</td>
                              </tr>
                              <tr>
                                <td>TAS</td>
                                <td>Tasmania</td>
                              </tr>
                              <tr>
                                <td>NT</td>
                                <td>Northern Territory</td>
                              </tr>
                              <tr>
                                <td>ACT</td>
                                <td>Australian Capital Territory</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    Category
                  </div>
                  <div className="card-block">
                    The category parameter indicates the categories in the specified statistical area, being either
                    Retail or Merchandise Exports. Categories should be given as a list, with each item separated
                    by a "," character. Entered categories should match the statistical area, else an
                    error will be returned.<br/><br/>
                    <div className="row">
                      <div className="col align-items-center">
                        <div className="card">
                          <div className="card-header">
                            Retail Categories
                          </div>
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Value</th>
                                <th>Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Total</td>
                                <td>Retrieves every single category below</td>
                              </tr>
                              <tr>
                                <td>Food</td>
                                <td>Retrieves food related statistical data</td>
                              </tr>
                              <tr>
                                <td>HouseholdGood</td>
                                <td>Retrieves data related to household goods</td>
                              </tr>
                              <tr>
                                <td>ClothingFootwareAndPersonalAccessory</td>
                                <td>Retrieves data related to clothing, footware and personal accessories.</td>
                              </tr>
                              <tr>
                                <td>DepartmentStores</td>
                                <td>Retrieves data related to all department stores</td>
                              </tr>
                              <tr>
                                <td>CafesResturantsAndTakeawayFood</td>
                                <td>Retrieves data related to all eateries around the region (cafes, restaurants, takeaway spots)</td>
                              </tr>
                              <tr>
                                <td>Other</td>
                                <td>Retrieves miscellaneous data that does not belong to any category</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="col align-items-center">
                        <div className="card">
                          <div className="card-header">
                            Merchandise Export Categories
                          </div>
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Value</th>
                                <th>Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Total</td>
                                <td>Retrieves every single category below</td>
                              </tr>
                              <tr>
                                <td>FoodAndLiveAnimals</td>
                                <td>Retrieves export data on food and live animals in the region</td>
                              </tr>
                              <tr>
                                <td>BeveragesAndTobacco</td>
                                <td>Retrieves data on beverages and tobacco exported in the region</td>
                              </tr>
                              <tr>
                                <td>CrudMaterialAndInedible</td>
                                <td>Retrieves data on crud material and inedibles exported in the region</td>
                              </tr>
                              <tr>
                                <td>MineralFuelLubricentAndRelatedMaterial</td>
                                <td>Retrieves data on minerals, fuels and lubricents exported in the region</td>
                              </tr>
                              <tr>
                                <td>AnimalAndVegitableOilFatAndWaxes</td>
                                <td>Retrieves data on animal and vegetable oils, fats and waxes exported in the region</td>
                              </tr>
                              <tr>
                                <td>ChemicalsAndRelatedProducts</td>
                                <td>Retrieves data on chemicals and other chemical-related products exported in the region</td>
                              </tr>
                              <tr>
                                <td>ManufacturedGoods</td>
                                <td>Retrieves data on manufactured goods exported in the region</td>
                              </tr>
                              <tr>
                                <td>MachineryAndTransportEquipments</td>
                                <td>Retrieves data on machinery and transport equipments exported in the region</td>
                              </tr>
                              <tr>
                                <td>OtherManufacturedArticles</td>
                                <td>Retrieves data on other manufactured articles that have been exported in the region</td>
                              </tr>
                              <tr>
                                <td>Unclassified</td>
                                <td>Spooky! Retrieves unclassified exports in the region</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    Date
                  </div>
                  <div className="card-block">
                    There are two date parameters that need to be specified - a start date, as well as an end date. <br/><br/>
                    Both dates are required to be in the format of YYYY-MM-DD (example, for the 2nd of March, 2017,
                    you would need to enter 2017-03-02). <br/><br/>
                    The start date must exist before the end date, or else an error will be returned by the API.
                  </div>
                </div>
            </Element>




            <Element name="retail" className="element">
              <div className="row">
                <div className="col-7">
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
                        "http://45.76.114.158/api/?StatisticsArea=Retail&State=NSW&Category=DepartmentStores&startDate=2013-12-01&endDate=2014-01-01&pretty=true"
                      }
                      </SyntaxHighlighter>
                      Our API will return the following JSON response: <br/>
                      <SyntaxHighlighter language='javascript' style={docco}>
                      {
                                    "{\n" +
                          "  \"header\" : {\n" +
                          "    \"status\" : \"success\",\n" +
                          "    \"requestNumber\" : \"201704122331449\"\n" +
                          "  },\n" +
                          "  \"data\" : {\n" +
                          "    \"MonthlyRetailData\" : [ {\n" +
                          "      \"RegionalData\" : [ {\n" +
                          "        \"State\" : \"NSW\",\n" +
                          "        \"Data\" : [ {\n" +
                          "          \"Date\" : \"2013-12-31\",\n" +
                          "          \"Turnover\" : 883.5\n" +
                          "        }, {\n" +
                          "          \"Date\" : \"2014-01-31\",\n" +
                          "          \"Turnover\" : 473.5\n" +
                          "        } ]\n" +
                          "      } ],\n" +
                          "      \"RetailIndustry\" : \"DepartmentStores\"\n" +
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
                                  <td>MonthlyRetailData</td>
                                  <td>Array</td>
                                  <td>RegionalData[...] & RetailIndustry</td>
                                  <td>An array of retail categories and actual Data by regions</td>
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
                                  <td>RetailIndustry</td>
                                  <td>Category</td>
                                  <td>Category</td>
                                  <td>Returns one category in the area</td>
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
                        "http://45.76.114.158/api/?StatisticsArea=Retail&State=NSW&Category=DepartmentStores&startDate=2013-12-01&endDate=2014-01-01&pretty=true"
                      }
                      </SyntaxHighlighter>
                      Our API will return the following JSON response: <br/>
                      <SyntaxHighlighter language='javascript' style={docco}>
                      {
                              "{\n" +
                        "  \"header\" : {\n" +
                        "    \"status\" : \"success\",\n" +
                        "    \"requestNumber\" : \"20170412234231\"\n" +
                        "  },\n" +
                        "  \"data\" : {\n" +
                        "    \"MonthlyRetailData\" : [ {\n" +
                        "      \"RegionalData\" : [ {\n" +
                        "        \"State\" : \"NSW\",\n" +
                        "        \"Data\" : [ {\n" +
                        "          \"Date\" : \"2013-12-31\",\n" +
                        "          \"Turnover\" : 883.5\n" +
                        "        }, {\n" +
                        "          \"Date\" : \"2014-01-31\",\n" +
                        "          \"Turnover\" : 473.5\n" +
                        "        } ]\n" +
                        "      } ],\n" +
                        "      \"RetailIndustry\" : \"DepartmentStores\"\n" +
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
            </Element>

            <Element name="merchandiseExports" className="element">
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

            </Element>

            <Element name="Errors" className="Element">
              <div className="card">
                <div className="card-header">
                  Errors
                </div>
                <div className="card-block">
                  In the case that you call the API with incorrect parameters or improper syntax, the API will return a JSON response
                  with an error message. The error information will be included inside the data object in the returned JSON. In the case
                  that no error message is returned, please report this to our team! <br/>
                  The Australian Statistics API returns errors in the form of codes. The table below will indicate what each error code
                  means: <br/><br/>

                    <table className="table">
                    <thead>
                      <tr>
                        <th>Error Code</th>
                        <th>Meaning</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>-1</td>
                        <td>MissingServletRequestParameterException – Required parameters Articles missing.</td>
                      </tr>
                      <tr>
                        <td>0</td>
                        <td>MethodArgumentNotValidException – Your request contains improper arguments.</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>MethodArgumentTypeMismatchException – Your request is in an illegal format.</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>CannotParseStatsTypeException – The area you specified is not supported yet.</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>CannotParseCategoryException – The Category you specificed does not exist.</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>CannotParseStateException – The State you specificed does not exist.</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>  CannotParseJSONException – Our database is currently down. Please stay tuned for updates.</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>CannotFetchDataException – Our database is currently down. Please stay tuned for updates.</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>ConstraintViolationException – Bad reqeust. You are sending some invalid data.</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>NullPointerException – We have a problem with our server. Please alert the team.</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>ConversionFailedException – We’re temporarily offline for maintenance. Please try again later.</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>NoDataAvailableException – Our database does not contain the data you specified.</td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>DateInvalidException – No trolling please!</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Element>

          </div>
        </div>
      </div>
    )
  }
}


export default Introduction;
