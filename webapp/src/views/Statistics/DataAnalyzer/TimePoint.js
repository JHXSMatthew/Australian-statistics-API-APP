import React,{Component} from 'react';
import {Container,ModalFooter, ModalBody, ModalHeader,Modal, Button, ListGroup,ListGroupItem,Label,Row,Col,Card,CardHeader,Input} from 'reactstrap';
import ReactTable from 'react-table'
import {CATEGORY_RT} from './DataAnalyzer.js';
import {CATEGORY_ME} from './DataAnalyzer.js';
import {getCategory} from './DataAnalyzer.js';
import TimePointChart from './TimePointChart.js';


class TimePoint extends Component{
  constructor(props){
    super(props);
    this.state = {
      time: this.props.time,
      category: this.props.category,
      up: 5,
      low: 5,
      canUpdate: false,
      update: false,
      data: null,
      currentNews: "all",
      companies: []
    };
    this.setUp = this.setUp.bind(this);
    this.setLow = this.setLow.bind(this);
    this.getStarting = this.getStarting.bind(this);
    this.getEnd = this.getEnd.bind(this);
    this.getDate = this.getDate.bind(this);
    this.update = this.update.bind(this);
    this.setDayOfMonth = this.setDayOfMonth.bind(this);
    this.setData = this.setData.bind(this);
    this.setCurrentNews = this.setCurrentNews.bind(this);
  }


  componentWillMount(){
    this.componentWillReceiveProps(this.props);
  }

  shouldComponentUpdate(nextProps, nextState){
    return JSON.stringify(nextProps) !== JSON.stringify(this.props) || JSON.stringify(nextState) !== JSON.stringify(this.state);
  }

  componentWillReceiveProps(nextProps){
    if(this.state.companies.length != 0 && JSON.stringify(nextProps) === JSON.stringify(this.props)){
      return;
    }
    var that = this;
    var url = 'http://45.76.114.158/api/app/category/get'
    fetch( url,{
      method: 'POST',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        area: nextProps.dataType.value,
        category: nextProps.category.value,
      }),
    })
    .then(function(response) {
      if (response.status >= 400) {
        alert("Our data source is down, please wait for a while and we'll fix it asap.")
        return;
      }
      return response.json().then(function (json) {
        //TODO: deal with empty data
        var a = [];
        if(json.length > 0){
          for(var i = 0 ; i < json.length ; i ++){
            if(json[i]){
              if(json[i].category === nextProps.category.value){
                a = a.concat(json[i].companies);
              }
            }
          }
        }

        that.setState({
          companies: a,
          update: true,
          time: that.props.time
        })
      })

    });
  }

  update(event){
    this.setState({
      canUpdate: false,
      update: true
    });
  }

  setUp(event){
    var v = event.target.value;
    this.setState({
      up: v,
      canUpdate: true,
      update: false
    });
  }

  setDayOfMonth(event){
    var str = this.state.time.split("-");
    if(event.target.value){
      str[2] = event.target.value;
    }
    if(event.target.value < 0 || event.target.value > daysInMonth(this.state.time.split("-")[1],this.state.time.split("-")[0])){
      return;
    }
    this.setState({
      time: getDateString(new Date(str[0],str[1],str[2])),
      canUpdate: true,
      update: false
    });
  }

  setLow(event){
    var v = event.target.value;
    this.setState({
      low: v,
      canUpdate: true,
      update: false
    });
  }

  getDate(){
    var str = this.state.time.split("-");
    return new Date(str[0],str[1] ,str[2]);
  }

  getStarting(){
    var date=this.getDate();
    return date.setDate(date.getDate() - this.state.low);
  }

  getEnd(){
    var date=this.getDate();
    return date.setDate(date.getDate() + this.state.up);
  }

  setData(d){
    this.setState({
      data:d,
      update: false
    });
  }

  setCurrentNews(id){
    this.setState({
      currentNews: id,
      update: false
    });
  }


  render(){
      return (
        <Container fluid={true}>
          <Row>
            <Col>
              <Card>
                <CardHeader>
                 {this.props.category.label} Related Companies. At {this.state.time}
                </CardHeader>
                  <Row>
                    <Col>
                      <ListGroup>
                        <ListGroupItem>
                          <Col  md="3" xs="3">
                            <Label>Day of the Month</Label>
                            <Input type="number" value={parseInt(this.state.time.split("-")[2])} size="sm" placeholder="Days of the month" onChange={this.setDayOfMonth} />
                          </Col>
                          <Col  md="3" xs="3">
                            <Label>Days Before</Label>
                            <Input type="number" defaultValue="5" size="sm" placeholder="Days Before Time Point" onChange={this.setLow} />
                          </Col>
                          <Col md="3" xs="3">
                            <Label>Days After</Label>
                            <Input type="number" defaultValue="5" size="sm" placeholder="Days After Time Point" onChange={this.setUp} />
                          </Col>
                          <Col md="2" xs="2">
                            <Label>Click To Update
                            </Label>
                            <Button outline color="info" disabled={!this.state.canUpdate} onClick={this.update} >
                               Update
                            </Button>
                          </Col>
                        </ListGroupItem>
                        <ListGroupItem>
                          <TimePointChart data={this.state.data} update={this.state.update} />
                        </ListGroupItem>
                      </ListGroup>
                    </Col>
                    <Col>
                      <ListGroupItem>
                          <News category={this.props.category} starting={this.getStarting} ending={this.getEnd} update={this.state.update} dataType={this.props.dataType} current={this.state.currentNews}/>
                      </ListGroupItem>
                    </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>

              <CompanyReturn companies={this.state.companies} category={this.props.category} setCurrentNews={this.setCurrentNews} date={this.getDate} up={this.state.up} low={this.state.low} update={this.state.update} dataType={this.props.dataType} setData={this.setData}/>
            </Col>
          </Row>
        </Container>
      )
  }
}

function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}

function labelToTopics(array,label){
    var returnValue = null;
    if(label === 'All categories'){
      returnValue = [];
      for(var i = 0 ; i < array.length ; i ++){
        if(array[i].topics){
          for(var j = 0; j < array[i].topics.length ; j ++){
            if(returnValue.indexOf(array[i].topics[j]) === -1){
              returnValue.push(array[i].topics[j]);
            }
          }
        }
      }
    }else{
      for(i = 0 ; i < array.length ; i ++){
        if(array[i].label === label){
          return array[i].topics;
        }
      }
    }
    return returnValue;
}

function getDateString(d){
  d = new Date(d);
  return d.getFullYear() + '-' +('0' + (d.getMonth() )).slice(-2) + '-' + ('0'+ (d.getDate() )).slice(-2);
}




function labelToInstruments(array,label){
    var returnValue = null;
    if(label === 'All categories'){
      returnValue = [];
      for(var i = 0 ; i < array.length ; i ++){
        if(array[i].instruments){
          for(var j = 0; j < array[i].instruments.length ; j ++){
            if(!returnValue.indexOf(array[i].instruments[j])>= 0){
              returnValue.push(array[i].instruments[j]);
            }
          }
        }
      }
    }else{
      for(i = 0 ; i < array.length ; i ++){
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
/*
  componentWillMount(){
    this.fetch(true,this.props.dataType,this.props.companies);
  }
*/
  componentWillReceiveProps(nextProps){
    if(!nextProps.update){
      return;
    }
    this.setState(function (prevState, props) {
      return {
          table: []
      };
    });
    for(var i = 0 ; i < nextProps.companies.length ; i ++){
      this.fetch(false,nextProps.dataType,nextProps.companies[i]);
    }
  }


  fetch(a,dataType,companies){
    var that = this;
    var id = companies.instrumentId;
    var name = companies.name;

    var proxy = "https://cors-anywhere.herokuapp.com/";

   //Alvin's frined's API,
   url = "http://128.199.197.216:3000/v5/id="+ id
        +  "&dateOfInterest="+ getDateString(this.props.date())
        +  "&listOfVars=AV_Return;CM_Return&upperWindow="+ this.props.up
        +  "&lowerWindow=" + this.props.low;

    if(a){
       // seesharp's API
       var url  = "http://174.138.67.207/InstrumentID/"+ id
           +  "/DateOfInterest/"+ getDateString(this.props.date())
          +  "/List_of_Var/CM_Return,AV_Return/Upper_window/"+ this.props.up
         +  "/Lower_window/" + this.props.low;
    }
    console.log("company return True URL:" + url);
    try{
      fetch(proxy + url,{
        method: 'GET',

      })
      .then(function(response) {
        if (response.status >= 400) {
          if(!a){
            that.fetch(true,dataType,companies);
          }
          return;
        }
        return response.json().then(function (json) {
          json = json.CompanyReturns;
          for(var i = 0 ; i < json.length ; i++ ){
            json[i].name = name;
            var av = 0;
            for(var j = 0 ; j < json[i].Data.length ; j ++){
              av += json[i].Data[j].AV_Return;
              json[i].Data[j].AV_Return *= 100 ;
              json[i].Data[j].AV_Return = parseFloat(json[i].Data[j].AV_Return).toFixed(7);

              json[i].Data[j].CM_Return *= 100 ;
              json[i].Data[j].CM_Return = parseFloat(json[i].Data[j].CM_Return).toFixed(7);

              json[i].Data[j].Return *= 100 ;
              json[i].Data[j].Return = parseFloat(json[i].Data[j].Return).toFixed(7);
            }
            json[i].AV_Return = parseFloat(av/json[i].Data.length * 100).toFixed(7) ;
            json[i].Get = <NewsFilter id={json[i].InstrumentID} setCurrentNews={that.props.setCurrentNews}/>
          }
          json = that.state.table.concat(json);
          that.setState({
            table: json
          });
          that.props.setData(json);
        })
      });
    }catch(e){
      if(!a){
        that.fetch(true,dataType,companies);
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
        header: 'Average Return (%)',
        accessor: 'AV_Return',
      },{
        header: 'News',
        accessor: 'Get',
        maxWidth: 100
      }
    ];
      const compnayDetail = [{
        header: 'Date',
        accessor: 'Date' // String-based value accessors!
      },{
       header: 'Return (%)',
       accessor: 'Return',
      }, {
        header: 'Average Return (%)',
        accessor: 'AV_Return',
      }, {
        header: ' Cumulative Return (%)',
        accessor: 'CM_Return',
      }
    ];
    //              showPagination={false}
    return(
      <Card>
        <CardHeader>
          Data Set
        </CardHeader>
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
                  />
                )
              }}
            />
          </Col>
      </Card>
    )
  }

}



class NewsFilter extends Component{
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.props.setCurrentNews(this.props.id);
  }

  render() {
    return (
        <Button color="info" onClick={this.toggle}>Get</Button>
    );
  }
}



class News extends Component{

  constructor(props){
    super(props);
    this.state = {
      table: []
    }

  }
  componentWillMount(){
    this.fetch(this.props.current);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.current === this.props.current){
      return;
    }
    this.setState({table: []});
    this.fetch(nextProps.current);
  }

  fetch(id){
    var that = this;
  //http://174.138.67.207/InstrumentID/ABP.AX,AAPL/DateOfInterest/2012-12-10/List_of_Var/CM_Return,AV_Return/Upper_window/5/Lower_window/3
    var topics = null;



    var proxy = "https://api.rss2json.com/v1/api.json?api_key=avgsmuavpridvqg25b9tfq3yxmpvsihy7tevv0b5&rss_url=";
    //Cool banananananan's news API
    //var urlTopics = 'https://nickr.xyz/coolbananas/api/?TopicCodes='+ topics.join() +'&StartDate='
    //+ getDateString(this.props.starting()) +'T00:00:00.000Z&EndDate='+ getDateString(this.props.ending()) +'T00:00:00.000Z';
    //var urlTopics = "https://nickr.xyz/coolbananas/api/?InstrumentIDs=BHP.AX,BLT.L&TopicCodes=AMERS,COM&StartDate=2015-10-01T00:00:00.000Z&EndDate=2015-10-10T00:00:00.000Z";
    var url = "http://finance.yahoo.com/rss/headline?s=" + id
    //console.log("News True URL: " + url);

    fetch( proxy + url,{
      method: 'GET',
    })
    .then(function(response) {
      if (response.status >= 400) {
        return;
      }
      return response.json().then(function (json) {
        json = json.items;
        for(var i = 0 ; i < json.length ; i ++){
          json[i].button = <NewsArticle title={json[i].title} article={json[i].link} />
        }

        that.setState({
          table: json
        });
      })

    });



  }

  render(){
    const newsTable = [{
      header: 'News Title',
      accessor: 'title',
      Cell: props=><span> {props.value} </span>
    },{
      header: 'Time',
      accessor: 'pubDate', // String-based value accessors!
      maxWidth: 200
    },{
      header: 'Article',
      accessor: 'button',
      maxWidth: 100
    }];
    return(
        <Col md="12" xs="12">
          <ReactTable
            data={this.state.table}
            columns={newsTable}
            defaultPageSize={7}
            noDataText='Loading...'
          />
      </Col>
    );

  }
}

class NewsAbstraction extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>

      </div>
    );
  }


}

class NewsArticle extends Component{
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    window.open(this.props.article);
  }

  render() {
    return (
      <div>
        <Button color="info" onClick={this.toggle}>View</Button>
      </div>
    );
  }
}




export default TimePoint;
