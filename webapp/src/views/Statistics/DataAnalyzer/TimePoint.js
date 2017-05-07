import React,{Component} from 'react';
import {ModalFooter, ModalBody, ModalHeader,Modal, Button, ListGroup,ListGroupItem,Label,FormGroup,Input,CardColumns,CardHeader, Card, CardText, CardBlock,Row, Col,Container} from 'reactstrap';
import ReactTable from 'react-table'
import {CATEGORY_RT} from './DataAnalyzer.js';
import {CATEGORY_ME} from './DataAnalyzer.js';


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
    this.getDate = this.getDate.bind(this);
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
                  <CompanyReturn category={this.props.category} date={this.getDate} up={this.state.up} low={this.state.low}/>
                </ListGroupItem>
                <ListGroupItem>
                    <News category={this.props.category} starting={this.getStarting} ending={this.getEnd}/>
                </ListGroupItem>
              </ListGroup>
        </Card>
      )
  }
}


function labelToTopics(array,label){
    var returnValue = null;
    if(label === 'All categories'){
      returnValue = [];
      for(var i = 0 ; i < array.length ; i ++){
        if(array[i].topics){
          for(var j = 0; j < array[i].topics.length ; j ++){
            if(returnValue.indexOf(array[i].topics[j]) == -1){
              returnValue.push(array[i].topics[j]);
            }
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

function getDateString(d){
  d = new Date(d);
  return d.getFullYear() + '-' +('0' + (d.getMonth()+1)).slice(-2) + '-' + ('0'+ (d.getDate()+1)).slice(-2);
}


class News extends Component{

  constructor(props){
    super(props);
    this.state = {
      table: []
    }

  }
  componentWillMount(){
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(nextProps){
    this.fetch();
  }

  fetch(){
    var that = this;
  //http://174.138.67.207/InstrumentID/ABP.AX,AAPL/DateOfInterest/2012-12-10/List_of_Var/CM_Return,AV_Return/Upper_window/5/Lower_window/3
    var topics = labelToTopics(CATEGORY_RT,this.props.category);
    if(!topics){
      topics = labelToTopics(CATEGORY_ME,this.props.category);
    }/*
    var instruments = labelToInstruments(CATEGORY_RT,this.props.category);
    if(!instruments){
      instruments = labelToInstruments(CATEGORY_ME,this.props.category);
    }
    var ids = [];
    var names = [];
    for(var i = 0 ; i < instruments.length ; i ++){
      ids.push(instruments[i].id);
      names.push(instruments[i].name);
    }


        var urlIns = 'https://nickr.xyz/coolbananas/api/?=InstrumentIDs='+ ids.join() +'&StartDate='
        + getDateString(this.props.starting()) +'T00:00:00.000Z&EndDate='+ getDateString(this.props.ending()) +'T00:00:00.000Z';
        console.log("News True URL: " + urlIns);

        fetch( proxy + urlIns,{
          method: 'GET',
        })
        .then(function(response) {
          if (response.status >= 400) {
            alert("news API data source is down, check console for details.")
            return;
          }
          return response.json().then(function (json) {
            console.log(json);
          })

        });
    */

    var proxy = "https://cors-anywhere.herokuapp.com/";
    //Cool banananananan's news API
    //var urlTopics = 'https://nickr.xyz/coolbananas/api/?TopicCodes='+ topics.join() +'&StartDate='
    //+ getDateString(this.props.starting()) +'T00:00:00.000Z&EndDate='+ getDateString(this.props.ending()) +'T00:00:00.000Z';
    var urlTopics = "https://nickr.xyz/coolbananas/api/?InstrumentIDs=BHP.AX,BLT.L&TopicCodes=AMERS,COM&StartDate=2015-10-01T00:00:00.000Z&EndDate=2015-10-10T00:00:00.000Z";
    console.log("News True URL: " + urlTopics);

    fetch( proxy + urlTopics,{
      method: 'GET',
    })
    .then(function(response) {
      if (response.status >= 400) {
        alert("news API data source is down, check console for details.")
        return;
      }
      return response.json().then(function (json) {
        json = json.NewsDataSet;
        for(var i = 0 ; i < json.length ; i ++){
          json[i].button = <NewsArticle title={json[i].Headline} article={json[i].NewsText} />
        }
        that.setState({
          table: json
        });
        console.log(json);
      })

    });



  }

  render(){
    const newsTable = [{
      header: 'News Title',
      accessor: 'Headline' // String-based value accessors!
    }, {
      header: 'Article',
      accessor: 'button',
      maxWidth: 100
    }];
    return(
        <Col md="12" xs="12">
          <ReactTable
            data={this.state.table}
            columns={newsTable}
            defaultPageSize={5}
            noDataText='Loading...'
            pageSize={(this.state.table &&  this.state.table.length) ?  this.state.table.length : 7}
          />
      </Col>
    );

  }

}

class NewsArticle extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="info" onClick={this.toggle}>View</Button>
        <Modal size="modal-lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            {this.props.article.split("\n").map(i => {
              return <div key={i} >{i}</div>;
            })}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


function labelToInstruments(array,label){
    var returnValue = null;
    if(label === 'All categories'){
      returnValue = [];
      for(var i = 0 ; i < array.length ; i ++){
        if(array[i].instruments){
          for(var j = 0; j < array[i].instruments.length ; j ++){
            if(returnValue.indexOf(array[i].instruments[j]) == -1){
              returnValue.push(array[i].instruments[j]);
            }
          }
        }
      }
    }else{
      for(var i = 0 ; i < array.length ; i ++){
        if(array[i].label === label){
          return array[i].instruments;
        }
      }
    }
    return returnValue;
}


class CompanyReturn extends Component{
  constructor(props){
    super(props);
    this.state = {
      table: []
    }

  }

  componentWillMount(){
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(nextProps){
    this.fetch();
  }

  fetch(a){

    var that = this;
    var instruments = labelToInstruments(CATEGORY_RT,this.props.category);
    if(!instruments){
      instruments = labelToInstruments(CATEGORY_ME,this.props.category);
    }
    var ids = [];
    var names = [];
    for(var i = 0 ; i < instruments.length ; i ++){
      ids.push(instruments[i].id);
      names.push(instruments[i].name);
    }

    var proxy = "https://cors-anywhere.herokuapp.com/";

   //Alvin's frined's API,
    var url  = "http://174.138.67.207/InstrumentID/"+ ids.join()
        +  "/DateOfInterest/"+ getDateString(this.props.date())
       +  "/List_of_Var/CM_Return,AV_Return/Upper_window/"+ this.props.up
      +  "/Lower_window/" + this.props.low;
    if(a){
       // seesharp's API
      url = "http://128.199.255.9/v3/id="+ ids.join(";")
           +  "&dateOfInterest="+ getDateString(this.props.date())
           +  "&listOfVars=AV_Return;CM_Return&upperWindow="+ this.props.up
           +  "&lowerWindow=" + this.props.low;
    }
    console.log("company return True URL:" + url);
    try{
      fetch(proxy + url,{
        method: 'GET',

      })
      .then(function(response) {
        if (response.status >= 400) {
          alert("CompanyReturns API down, check console.");
          if(!a){
            that.fetch(true);
          }
          return;
        }
        return response.json().then(function (json) {
          json = json.CompanyReturns;
          for(var i = 0 ; i < json.length ; i++ ){
            json[i].name = names[ids.indexOf(json[i].InstrumentID)];
            var av = 0;
            for(var j = 0 ; j < json[i].Data.length ; j ++){
              av += json[i].Data[j].AV_Return;
            }
            json[i].AV_Return = av/json[i].Data.length ;
          }
          that.setState({
            table: json
          });
        })
      }).then(function(something){
        if(!a){
          that.fetch(true);
      }});

    }catch(e){
      if(!a){
        that.fetch(true);
      }
    }
  }

  render(){
      const compnayName = [{
        header: 'Company',
        accessor: 'name' // String-based value accessors!
      }, {
        header: 'InstrumentID',
        accessor: 'InstrumentID',
      }, {
        header: 'Average Return',
        accessor: 'AV_Return',
      }];
      const compnayDetail = [{
        header: 'Date',
        accessor: 'Date' // String-based value accessors!
      },{
       header: 'Return',
       accessor: 'Return',
      }, {
        header: 'Average Retrun',
        accessor: 'AV_Return',
      }, {
        header: ' Cumulative Return',
        accessor: 'CM_Return',
      }
    ];
    return(
        <Col md="12" xs="12">
          <ReactTable
            data={this.state.table}
            columns={compnayName}
            defaultPageSize={5}
            noDataText='Loading...'
            pageSize={(this.state.table &&  this.state.table.length) ?  this.state.table.length : 7}
            SubComponent={(row) => {
              return(
                <ReactTable
                  data={row.row.Data}
                  columns={compnayDetail}
                  defaultPageSize={10}
                  showPagination={false}
                />
              )
            }}
          />
      </Col>
    )
  }

}






export default TimePoint;
