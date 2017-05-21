import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TimePoint from './TimePoint.js';


class AnalyticsView extends Component{
    constructor(props){
        super(props);
    }


    //fetch method, fetch relation of company based on category

    //on props update, simply update state based on props.


    //yes, what's more?


    render(){
      console.log(this.props);
      return(
        <TimePoint time={this.props.date} category={this.props.category} dataType={this.props.dataType}/>
      )
    }

}


export default AnalyticsView;
