import React, { Component } from 'react';

class GettingStarted extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
            <div className="card">
              <div className="card-block">
              <h1> Australian Statistics API </h1>
                We have developed an Australian Statistics API that will receive a request from any third party, with specifications
                on various filters such as area of statistics, regions, list of categories (industries or commodities) and a time
                period. Our API then returns the relevant statistics to the user.
                <br/><br/>
                <a className="btn btn-primary btn-lg" href="#/dataAnalyzer" role="button">Try It Out</a><br/><br/>
                Users are able to call our API using HTTP request methods. In this case, our API will return the relevant statistical
                results back in a JSON format. <br/><a href="#/about">Click here to view our developer API documentation.</a>
                <br/><br/>
                Our website also offers an interface to test various calls to our API, for demonstration purposes.
                <br/><a href="#/about">Click here to view our Data Analyser documentation.</a>
                <br/><br/>



              </div>
            </div>
        </div>
      </div>
    )
  }
}


export default GettingStarted;
