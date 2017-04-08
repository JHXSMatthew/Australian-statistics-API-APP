import React, { Component } from 'react';
import { Link } from 'react-router'

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/dashboard'} className="nav-link" activeClassName="active"><i className="icon-speedometer"></i> Overview <span className="badge badge-info"></span></Link>
              <Link to={'/api'} className="nav-link" activeClassName="active"><i className="icon-speedometer"></i> API <span className="badge badge-info">NEW</span></Link>
              <Link to={'/doc'} className="nav-link" activeClassName="active"><i className="icon-speedometer"></i> Documentation <span className="badge badge-info"></span></Link>
              <Link to={'/about'} className="nav-link" activeClassName="active"><i className="icon-speedometer"></i> About Us <span className="badge badge-info"></span></Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
