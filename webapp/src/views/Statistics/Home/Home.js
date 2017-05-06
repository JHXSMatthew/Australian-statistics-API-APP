import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import homeBackground from './home_background.png' // relative path to image 
import titleFont from './Fins-Regular.otf';

class Home extends Component {

  render() {
    return (

      <div className="animated fadeIn">

        <div style={{height: '450px'}}>
          <Parallax bgImage={homeBackground} strength={-300} style={{height: '350px'}}>
            <br/>
            <h1 style={{textAlign: 'center', color: 'white', textShadow: "1px 1px black"}}><br/><br/>Team Rocket <br/> Statistics API <br/></h1>
            <div style={{height: '250px'}}></div> 
          </Parallax>
        </div>

        <div style={{backgroundColor: 'white'}}>
          <h1 style={{textAlign: 'center'}}><br/>Statistics available at rocket speeds.<br/></h1><br/>

            <h6 style={{textAlign: 'center', padding: '20px', lineHeight: '20px'}}>
            Our team has developed an API that retrieves Statistics on retail and merchandise export data within Australia. 
            The user is able to access and specify various fields of statistical areas such as data types, geographical regions,
            categories of data and time period. Leave the rest to us - the information requested will be delivered at lightning
            fast speeds, available for viewing and analysis on our analytics platform, or as raw JSON.</h6>

            <h6 style={{textAlign: 'center', padding: '20px', lineHeight: '20px'}}>
            Users are able to call our API through standard HTTP request methods. To learn about the relevant parameters and
            expected inputs and outputs to use our API through this method,
            <a href="#/documentation/DeveloperAPI">visit our documentation here.</a></h6>

            <h6 style={{textAlign: 'center', padding: '20px', lineHeight: '20px'}}>
            Users are able to test and use our API live through our analytics interface. 
            <a href="#/dataAnalyzer">Visit our analytics interface here.</a></h6>
            <br/>
        </div>
        <div className="card" style={{backgroundColor: '#263238'}}>
          hello darkness my old friend
        </div>
      </div>
    )
  }
}


export default Home;
