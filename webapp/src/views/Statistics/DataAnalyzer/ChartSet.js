import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Pie,Line } from 'react-chartjs-2';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TimePoint from './TimePoint.js';
import TimePointsPanel from './TimePointPanel.js';
import Moment from 'moment';

import {Card,CardHeader,CardBlock,Row, Col,Button} from 'reactstrap';
import 'chartjs-plugin-zoom/chartjs-plugin-zoom.js';

// chats components
class ChartSet extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onClick =this.onClick.bind(this);
    this.state = {
      timePoints: [],
      tabIndex: 0,
      tabIndexMap: []
    };
    this.chart = [];

  }



  handleClick(e,c){
  //  if(e && e[0]){
  //    var element = e[0];
  //    var index = element._index;
  //    var date = element._xScale.ticks[index];
  //    var tp = this.state.timePoints.slice();
  //    for(var i = 0 ; i < tp.length ; i ++){
  //      if(tp[i].key === date+this.state.navs[this.state.tabIndex].key){
  //        return;
  //      }
  //    }
  //    tp.unshift(<TimePoint key={date+this.state.navs[this.state.tabIndex].key} time={date} category={this.state.navs[this.state.tabIndex].key} dataType={this.props.dataType}/>)
  //    this.setState({
  //      timePoints: tp,
  //    });
  //  }
    if(e && e[0]){
      var element = e[0];
      var index = element._index;
      var date = element._xScale.labelMoments[0][index]._i;
      this.props.setFocusDate(date);
    }
  }

  componentWillMount(){
    this.componentWillReceiveProps(this.props);
  }

  componentDidUpdate(prevProps,prevState){
    if(prevState.timePoints.length !== this.state.timePoints.length){
      const node = ReactDOM.findDOMNode(this.pointPanel);
      node.scrollIntoView({behavior: "smooth"});
    }
  }

  onClick(){
    for(var i = 0 ; i < this.chart.length ; i++){
      if(this.chart && this.chart[i] && this.chart[i].chart_instance){
        this.chart[i].chart_instance.resetZoom();
      }
    }
  }



  componentWillReceiveProps(nextProps){
    const color=['rgba(75,192,192,1)','rgba(226,67,30,1)','rgba(231,113,27,1)',
    'rgba(15,255,58,1)','rgba(111,150,84,1)','rgba(28,145,192,1)',
    'rgba(67,69,157,1)','rgba(165,59,162,1)','rgba(47,252,150,1)'];
    this.chart = [];
    var data=nextProps.data;
    if(data){
      var labels=[];
      var charts=[];
      var pieLabels=[];
      var navs=[];
      var ylabel = null;
      var tabIndexMap = [];
      if(nextProps.dataType){
        ylabel = "Value " + nextProps.dataType.unit
      }
      for(var i = 0; i < data.length ; i ++){
        //for each category
        var dataSet=[];
        var pieDataSet = [];
        var regional = data[i].RegionalData;
        if(regional){
          for(var j = 0; j < regional.length; j++ ){
            var line = {
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBorderWidth: 2,
              pointRadius: 3,
              pointHitRadius: 10,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: '#fff',
              borderJoinStyle: 'miter',
              borderCapStyle: 'butt',
              fill: false,
              lineTension: 0.1,
              pointHoverBorderColor: 'rgba(220,220,220,1)',
            };
            if(pieLabels.indexOf(regional[j].State) == -1){
              pieLabels.push(regional[j].State);
            }
            line.label = regional[j].State;
            line.backgroundColor = color[j];
            line.borderColor = color[j];
            line.pointBorderColor = color[j];
            line.pointHoverBackgroundColor = color[j];
            line.data = [];

            var dateData = regional[j].Data;
            for(var k=0; k < dateData.length; k++){
              line.data.push(dateData[k].Value);

              var contain =false;
              for(var m=0; m < labels.length; m++){
                if(labels[m] === dateData[k].Date){
                  contain = true;
                  break;
                }
              }
              if(!contain){
                labels.push(dateData[k].Date);
              }
            }

            dataSet.push(line);
            pieDataSet.push(regional[j].total);
          }
        }

        tabIndexMap.push(data[i].Category);
        navs.push(
          <Tab key={data[i].Category.label}>
              {data[i].Category.label}
          </Tab>
        );
        charts.push(
          <TabPanel key={data[i].Category.label}>
            <Row>
              <Col md="7" xs="7">
                <Row>
                  <Col md={{size:"11"}} xs={{size:"11"}}>
                    <Line
                      ref={(panel) =>{this.chart.push(panel);}}
                      data={{
                        datasets: dataSet,
                        labels: labels
                      }}
                      getElementAtEvent={this.handleClick}
                      options={{
                        responsive: true,
                        scales: {
                          xAxes: [{
                              type: "time",
                              time: {
                                format: 'YYYY-MM-DD',
                							 // tooltipFormat: 'll HH:mm'
                              },
                              scaleLabel: {
                                  display: true,
                                  labelString: 'Date'
                              },
                              ticks:{
                                min:labels[0],
                                max:labels[labels.length -1]
                              }

                          }],
                          yAxes: [{
                              display: true,
                              scaleLabel: {
                                  display: true,
                                  labelString: ylabel
                              }
                          }]
                      },
                      pan: {
            						enabled: true,
            						mode: 'x'
            					},
                      zoom: {
              					enabled: true,
              					drag: true,
              					mode: 'x',
              				}
                      }}
                    />
                </Col>
                <Col md={{size:"1"}} xs={{size:"1"}}>
                  <Button outline color="primary" onClick={this.onClick}>R</Button>
                </Col>
              </Row>
            </Col>
            <Col md="5" xs="5">
              <Pie data={{
                datasets: [{
                  data: pieDataSet,
                  backgroundColor: color.slice(0,pieDataSet.length),
                  hoverBackgroundColor: color.slice(0,pieDataSet.length)
                }],
                labels: pieLabels
              }}/>
            </Col>
          </Row>
        </TabPanel>
        );
      }
      this.setState(function (prevState, props) {
          return {
            charts: charts,
            navs: navs,
            tabIndexMap: tabIndexMap,
            tabIndex: prevState.tabIndex < charts.length ? prevState.tabIndex :0
          };
      });
    }
  }


  render(){


    return (
        <div>
          <Card>
            <CardBlock>
              <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => {this.setState({ tabIndex }); this.props.setCategory(this.state.tabIndexMap[tabIndex],tabIndex);}}>
                <TabList>
                    {this.state.navs}
                </TabList>
                {this.state.charts}
              </Tabs>
            </CardBlock>
          </Card>
        </div>
    )
  }
}



//<Row>
//  <Col md="12" xs="12">
//    <TimePointsPanel ref={(panel) =>{this.pointPanel = panel;}} timePoints={this.state.timePoints}/>
//  </Col>
//</Row>


export default ChartSet;
