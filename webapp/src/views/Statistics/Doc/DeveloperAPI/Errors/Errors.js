import React, { Component } from 'react';

class Errors extends Component {

  render() {
    return (
      <div>
        <div className="animated fadeIn">
          <div className="row">
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
          </div>
        </div>
      </div>
    )
  }
}


export default Errors;
