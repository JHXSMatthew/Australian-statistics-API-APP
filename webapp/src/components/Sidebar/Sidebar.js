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
            <li className="nav-title">
              Australian Statistics
            </li>
            <li className="nav-item">
              <Link to={'/Home'} className="nav-link" activeClassName="active"><i className="icon-home"></i> Home </Link>
            </li>
            <li className="nav-item">
              <Link to={'/release'} className="nav-link" activeClassName="active"><i className="icon-tag"></i> Release </Link>
            </li>
            <li className="nav-item">
              <Link to={'/dataAnalyzer'} className="nav-link" activeClassName="active"><i className="icon-eye"></i> Data Analyzer </Link>
            </li>
            <li className={this.activeRoute("/documentation")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-folder"></i> Documentation</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/documentation/DataAnalyzerDoc'} className="nav-link" activeClassName="active"><i className="icon-folder"></i> Data Analyzer</Link>
                </li>
                <li className={this.activeRoute("/developerAPI")}>
                  <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-folder"></i> Developer API</a>
                  <ul className="nav-dropdown-items">
                    <li className="nav-item">
                      <Link to={'/documentation/DeveloperAPI'} className="nav-link" activeClassName="active"><i className="icon-folder"></i> Introduction</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={'/documentation/ParameterConstraints'} className="nav-link" activeClassName="active"><i className="icon-folder"></i> Parameter Constraints</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={'/documentation/MerchandiseExports'} className="nav-link" activeClassName="active"><i className="icon-folder"></i> Merchandise Exports</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={'/documentation/Retail'} className="nav-link" activeClassName="active"><i className="icon-folder"></i> Retail</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={'/documentation/Errors'} className="nav-link" activeClassName="active"><i className="icon-folder"></i> Errors</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-title">
              Others
            </li>
            <li className="nav-item">
              <Link to={'/about'} className="nav-link" activeClassName="active"><i className="icon-rocket"></i> About </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
