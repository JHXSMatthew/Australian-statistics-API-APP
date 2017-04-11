import React, { Component } from 'react';

class ParameterConstraints extends Component {

  render() {
    return (
      <div>
        <div className="animated fadeIn">
          <div className="row">
              <div className="card">
                <div className="card-header">
                  Parameter Value Constraints
                </div>
                <div className="card-block">
                  The following documents the acceptable values that our API will receive. WHenever you pass in a parameter, it should
                  be within the given constraints. If it isn't, our API will return a relevant error back.
                </div>
              </div>
          </div>
        </div>
        <div className="animated fadeIn">
          <div className="row">
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
          </div>
        </div>
        <div className="animated fadeIn">
          <div className="row">
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
          </div>
        </div>
        <div className="animated fadeIn">
          <div className="row">
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
                  </div>
                  <div className="row">
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
          </div>
        </div>
        <div className="animated fadeIn">
          <div className="row">
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
          </div>
        </div>
      </div>
    )
  }
}



export default ParameterConstraints;
