import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import homeBackground from './home_background.png' // relative path to image 
import titleFont from './Fins-Regular.otf';

class Home extends Component {

  render() {
    return (

      <div className="animated fadeIn">

        <div style={{height: '400px'}}>
          <Parallax bgImage={homeBackground} strength={-300} style={{height: '300px'}}>
            <br/>
            <h1 style={{textAlign: 'center', color: 'white', textShadow: "1px 1px black"}}><br/><br/>Team Rocket <br/> Statistics API <br/></h1>
            <div style={{height: '400px'}}></div> 
          </Parallax>
        </div>



        <div className="card">
          <h1 style={{textAlign: 'center '}}><br/>Statistics available at rocket speeds.<br/></h1>
          <h2></h2>

            <h6>Our team has developed an API that retrieves Statistics on retail and merchandise export data within Australia. 
            The user is able to access and specify various fields of statistical areas such as data types, geographical regions,
            categories of data and time period. Leave the rest to us - the information requested will be delivered at lightning
            fast speeds, available for viewing and analysis on our analytics platform, or as raw JSON.</h6>

            <br/><br/>
            Users are able to call our API using HTTP request methods. In this case, our API will return the relevant statistical
            results back through a JSON format. <br/><a href="#/documentation/DeveloperAPI">Click here to view our developer API documentation.</a>
            <br/><br/>
            Our website also offers an interface to test various calls to our API, for demonstration purposes.
            <br/><a href="#/dataAnalyzer">Click here to use our Data Analyser Software.</a>
            <br/><a href="#/documentation/DataAnalyzerDoc">Click here to view our Data Analyser documentation.</a>
        </div>
      </div>
    )
  }
}


export default Home;
