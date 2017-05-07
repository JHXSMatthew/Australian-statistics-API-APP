import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
    return (
      <header className="app-header navbar" style={{backgroundColor: '#263238'}}>
        <a className="navbar-brand" href="#" style={{backgroundColor: '#263238'}}></a>
        <ul className="nav navbar-nav hidden-md-down">
          <li className="nav-item px-1">
            <a className="nav-link" href="#/home" style={{color:'white'}}>Home</a>
          </li>
          <li className="nav-item px-1">
            <a className="nav-link" href="#/release" style={{color:'white'}}>Release</a>
          </li>
          <li className="nav-item px-1">
            <a className="nav-link" href="#/documentation/DeveloperAPI" style={{color:'white'}}>Documentation</a>
          </li>
          <li className="nav-item px-1">
            <a className="nav-link" href="#/about" style={{color:'white'}}>About</a>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header;
