import React,{Component} from 'react';
import { ListGroup,ListGroupItem,Label,FormGroup,Input,CardColumns,CardHeader, Card, CardText, CardBlock,Row, Col,Container} from 'reactstrap';
import ReactTable from 'react-table'
import {CATEGORY_RT} from './DataAnalyzer.js';
import {CATEGORY_ME} from './DataAnalyzer.js';

function labelToTopics(array,label){
    var returnValue = null;
    if(label === 'All categories'){
      returnValue = [];
      for(var i = 0 ; i < array.length ; i ++){
        if(array[i].topics){
          for(var j = 0; j < array[i].topics.length ; j ++){
            returnValue.push(array[i].topics[j]);
          }
        }
      }
    }else{
      for(var i = 0 ; i < array.length ; i ++){
        if(array[i].label === label){
          return array[i].topics;
        }
      }
    }
    return returnValue;
}

class TimePoint extends Component{
  constructor(props){
    super(props);
    this.state = {
      time: this.props.time,
      category: this.props.category,
      up: 5,
      low: 5
    };
    this.setUp = this.setUp.bind(this);
    this.setLow = this.setLow.bind(this);
    this.getStarting = this.getStarting.bind(this);
    this.getEnd = this.getEnd.bind(this);

  }

  setUp(event){
    var v = event.target.value;
    this.setState({
      up: {v}
    });
  }

  setLow(event){
    var v = event.target.value;
    this.setState({
      low: {v}
    });
  }

  getDate(){
    var str = this.state.time.split("-");
    return new Date(str[0],str[1],str[2]);
  }

  getStarting(){
    var date=this.getDate();
    return date.setDate(date.getDate() - this.state.low);
  }

  getEnd(){
    var date=this.getDate();
    return date.setDate(date.getDate() + this.state.up);
  }



  render(){
      return (
        <Card>
          <CardHeader>
            Time Point at {this.state.time} for {this.props.category}
          </CardHeader>

              <ListGroup>
                <ListGroupItem>
                  <Col>
                    <Label>Days Before</Label>
                    <Input type="number" defaultValue="5" size="sm" placeholder="Days Before Time Point" onChange={this.setLow} />
                  </Col>
                  <Col>
                    <Label>Days After</Label>
                    <Input type="number" defaultValue="5" size="sm" placeholder="Days After Time Point" onChange={this.setUp} />
                  </Col>
                </ListGroupItem>

                <ListGroupItem>
                    COMPANY RETURN
                </ListGroupItem>
                <ListGroupItem>
                    <News category={this.props.category} starting={this.getStarting} ending={this.getEnd}/>
                </ListGroupItem>

              </ListGroup>
        </Card>
      )
  }
}

class News extends Component{

  constructor(props){
    super(props);
    console.log(this.props.ending());
    console.log(this.props.starting());
    this.fetch();
  }

  getDateString(d){
    d = new Date(d);
    return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
  }


  fetch(){
    var that = this;
  //http://174.138.67.207/InstrumentID/ABP.AX,AAPL/DateOfInterest/2012-12-10/List_of_Var/CM_Return,AV_Return/Upper_window/5/Lower_window/3
    var topics = labelToTopics(CATEGORY_RT,this.props.category);
    if(!topics){
      topics = labelToTopics(CATEGORY_ME,this.props.category);
    }
    var InstrumentIDs = ""; //TODO: Mathew's insturments ID
  //  var url = 'https://nickr.xyz/coolbananas/api/?TopicCodes='+ topics.join() +'&StartDate='
  //  + this.getDateString(this.props.starting()) +'T00:00:00.000Z&EndDate='+ this.getDateString(this.props.ending()) +'T00:00:00.000Z';
  //  console.log(url);
    // var url = "https://nickr.xyz/coolbananas/api/?InstrumentIDs=BHP.AX,BLT.L&TopicCodes=AMERS,COM&StartDate=2015-10-01T00:00:00.000Z&EndDate=2015-10-10T00:00:00.000Z";
    //TODO: wtf is this new API, we need somehow ask this or what.  NO DATA for relevant topics AT ALL!
    var url = "http://174.138.67.207/InstrumentID/ABP.AX,AAPL/DateOfInterest/2012-12-10/List_of_Var/CM_Return,AV_Return/Upper_window/5/Lower_window/3";

    fetch( url,{
      method: 'GET',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
      }
    })
    .then(function(response) {
      if (response.status >= 400) {
        alert("Our data source is down, please wait for a while and we'll fix it asap.")
        return;
      }
      return response.json().then(function (json) {
        console.log(json);
      })

    });

  }

  render(){

    console.log(this.props.category);
    var topics = labelToTopics(CATEGORY_RT,this.props.category);
    if(!topics){
      topics = labelToTopics(CATEGORY_ME,this.props.category);
    }

    return(
      <div>
        {topics}
      </div>
    );

  }

}


class CompanyReturn extends Component{

  constructor(props){
    super(props);

  }


  fetch(){
    var that = this;


    //http://174.138.67.207/InstrumentID/ABP.AX,AAPL/DateOfInterest/2012-12-10/List_of_Var/CM_Return,AV_Return/Upper_window/5/Lower_window/3

    var url = 'https://nickr.xyz/coolbananas/api/?InstrumentIDs=BHP.AX,BLT.L&TopicCodes=AMERS,COM&StartDate=2015-10-01T00:00:00.000Z&EndDate=2015-10-10T00:00:00.000Z'

    fetch( url,{
      method: 'GET',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
      }
    })
    .then(function(response) {
      if (response.status >= 400) {
        alert("Our data source is down, please wait for a while and we'll fix it asap.")
        return;
      }
      return response.json().then(function (json) {
        //TODO: deal with empty data
        that.props.addDataEntry(json,"Data Entry"+that.state.count++);
      })

    });

  }

}




export default TimePoint;
