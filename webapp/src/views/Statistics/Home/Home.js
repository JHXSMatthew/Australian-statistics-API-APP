import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import homeBackground from './home_background.png' // relative path to image 

class Home extends Component {

  render() {
    return (

      <div className="animated fadeIn">

      <div style={{height: '400px'}}>
        <Parallax bgImage={homeBackground} strength={-300} style={{height: '300px'}}>
          <br/>
          <h1 style={{textAlign: 'center', color: 'white'}}><br/><br/>Team Rocket <br/> Statistics API <br/></h1>
          <div style={{height: '400px'}}></div> 
        </Parallax>
      </div>

        <div className="row">
            <div className="card">
              <div className="card-header">
                Welcome
              </div>
              <div className="card-block">
                We have developed an Australian Statistics API that will receive a request from any third party, with specifications
                on various filters such as area of statistics, regions, list of categories (industried or commodities) and a time
                period. Our API then returns the relevant statistics to the user.
                <br/><br/>
                Users are able to call our API using HTTP request methods. In this case, our API will return the relevant statistical
                results back through a JSON format. <br/><a href="#/documentation/DeveloperAPI">Click here to view our developer API documentation.</a>
                <br/><br/>
                Our website also offers an interface to test various calls to our API, for demonstration purposes.
                <br/><a href="#/dataAnalyzer">Click here to use our Data Analyser Software.</a>
                <br/><a href="#/documentation/DataAnalyzerDoc">Click here to view our Data Analyser documentation.</a>
              </div>
            </div>
        </div>
      </div>
    )
  }
}


export default Home;
