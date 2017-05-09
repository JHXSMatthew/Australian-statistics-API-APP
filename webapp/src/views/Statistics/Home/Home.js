import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import homeBackground from './home_background_copy.png' // relative path to image
import rocketMin from './rocket_img.png' // relative path to image
import Icon from 'react-icons-kit';
      import { graphs } from 'react-icons-kit/metrize/graphs';
      import { bolt } from 'react-icons-kit/metrize/bolt'
      import { optionsSettings } from 'react-icons-kit/metrize/optionsSettings';
      import { bars } from 'react-icons-kit/metrize/bars';
      import { circles } from 'react-icons-kit/metrize/circles';
      import { hddRaid } from 'react-icons-kit/metrize/hddRaid'

class Home extends Component {

  handleClick(e) {
    e.preventDefault();
    this.props.history.push('/about');
  }

  render() {
    return (

      <div className="animated fadeIn">
        <div style={{height: '450px'}}>
          <Parallax bgImage={homeBackground} strength={200} style={{height: '500px'}}>
            <h1 style={{textAlign: 'center', color: 'white', textShadow: "2px 2px 20px black", fontFamily: "signPainter", fontSize: '80px'}}>
            <br/>Team Rocket <br/> Statistics API<br/></h1>
            <div style={{textAlign:'center', marginTop: '150px'}}>
              <a  href="#dataAnalyzer" style={{textAlign: "center", borderRadius:"25px", padding: '15px ', backgroundColor: '#288BE4', color: 'white', fontSize:'20px'}}>Analytics Platform</a>
            </div>
            <div style={{height: '110px'}}></div>
          </Parallax>
        </div>

        <div style={{backgroundColor: 'white', marginTop: '90px'}}>
          <h1 style={{textAlign: 'center'}}><br/>Statistics available at rocket speeds.<br/></h1><br/>
            <h6 style={{textAlign: 'center', padding: '20px', lineHeight: '20px'}}>
            Our team has developed an API that retrieves Statistics on retail and merchandise export data within Australia.
            The user is able to access and specify various fields of statistical areas such as data types, geographical regions,
            categories of data and time period. Leave the rest to us - the information requested will be delivered at lightning
            fast speeds, available for viewing and analysis on our analytics platform, or as raw JSON.</h6>

            <h6 style={{textAlign: 'center', padding: '20px', paddingTop:'0px', lineHeight: '20px'}}>
            Users are able to call our API through standard HTTP request methods. </h6>

            <div style={{textAlign: 'center', padding: '10px'}}>
              <a href="#Documentation/DeveloperAPI" style={{textAlign: "center", borderRadius:"25px", padding: '15px', backgroundColor: '#288BE4', color: 'white', fontSize:'20px'}}>Documentation</a>
            </div>
            <img src={rocketMin} style={{width: '100%',paddingTop:'20px'}}/>
        </div>

        <div className="card" style={{backgroundColor: '#263238', color: 'white', padding: '20px'}}>
        <h1 style={{textAlign: "center"}}>Features</h1>
        <br/><br/>
         <div className="row" style={{textAlign: "center"}}>
           <div className="col">
             <div>
               <Icon icon={bolt} size={100}/>
               <br/>
               <h5>Speed</h5>
               <h10>15ms average response times means less time waiting, and more time doing.</h10>
             </div>
           </div>

           <div className="col">
             <div>
               <Icon icon={graphs} size={100}/>
               <br/>
               <h5>Analytics</h5>
               <h10>Visualisation and comparison tools gives full perspective of the data, all in one place. </h10>
             </div>
           </div>

            <div className="col">
             <div>
               <Icon icon={hddRaid} size={100}/>
               <br/>
               <h5>Caching</h5>
               <h10>Caching data allows for fast data access, even without a connection to ABS. </h10>
             </div>
            </div>
          </div>

          <br/><br/>
         <div className="row" style={{textAlign: "center"}}>
           <div className="col">
             <div>
               <Icon icon={circles} size={100}/>
               <br/>
               <h5>Integrations</h5>
               <h10>Integrations with external APIs gives more tools for data analysis. </h10>
             </div>
           </div>

           <div className="col">
             <div>
               <Icon icon={bars} size={100}/>
               <br/>
               <h5>Data</h5>
               <h10>Using ABS as the backbone of our database means access to thousands of statistics. </h10>
             </div>
           </div>

            <div className="col">
             <div>
               <Icon icon={optionsSettings} size={100}/>
               <br/>
               <h5>Support</h5>
               <h10>Complete documentation available online, and fast support response. </h10>
             </div>
            </div>
          </div>
          <br/><br/>
        </div>
      </div>
    )
  }
}


export default Home;
