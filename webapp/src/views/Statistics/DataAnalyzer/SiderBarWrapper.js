import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import DataFetcher from './DataFetcher.js';
import {Row,Col} from 'reactstrap';

class SiderBarWrapper extends Component{

  constructor(props){
    super(props);
  }


  render(){
    var sidebarContent =<DataFetcher expert={this.props.expert} toggleExpert={this.props.toggleExpert} addDataEntry={this.props.addDataEntry}/>

    return(
        <Sidebar sidebar={sidebarContent}
            open={this.props.sidebarOpen}
            onSetOpen={this.props.onSetSidebarOpen}
            />
    );
  }
}

export default SiderBarWrapper;
