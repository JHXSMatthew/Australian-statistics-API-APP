import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <a href="#/about">TeamRocket</a> 2017 SENG3011 UNSW
        <span className="float-right">Powered by <a href="http://coreui.io">CoreUI</a></span>
      </footer>
    )
  }
}

export default Footer;
