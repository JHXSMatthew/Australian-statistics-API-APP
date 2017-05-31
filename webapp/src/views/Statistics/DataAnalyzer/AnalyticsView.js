import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TimePoint from './TimePoint.js';
import { Row, Container} from 'reactstrap';


class AnalyticsView extends Component{
    constructor(props){
        super(props);
    }


    //fetch method, fetch relation of company based on category

    //on props update, simply update state based on props.


    //yes, what's more?


    render(){
      return(
          <TimePoint setCompany={this.props.setCompany} shouldDraw={this.props.shouldDraw} time={this.props.date} category={this.props.category} dataType={this.props.dataType}/>
      )
    }

}


export default AnalyticsView;
