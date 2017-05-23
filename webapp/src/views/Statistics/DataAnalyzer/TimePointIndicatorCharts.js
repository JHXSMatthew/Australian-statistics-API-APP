import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
import TimePointChart from './TimePointChart.js';
import {Col,Row} from 'reactstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TimePointIndicatorCharts extends Component{

  constructor(props){
    super(props);
    this.state = {
      tabIndex: 0,
      tabIndexMap: []
    };
    this.resetZoom = this.resetZoom.bind(this);
    this.legendClick = this.legendClick.bind(this);
    this.chart = [];
  }

  resetZoom(){
    for(var i = 0 ; i < this.chart.length ; i++){
      if(this.chart && this.chart[i] && this.chart[i].chart_instance){
        this.chart[i].chart_instance.resetZoom();
      }else{
        if(this.chart && this.chart[i]){
          try{
            this.chart[i].resetZoom();
          }catch(e){

          }
        }
      }
    }
  }

  legendClick(e,item){
    for(var i = 0 ; i < this.chart.length ; i++){
      if(this.chart && this.chart[i] && this.chart[i].chart_instance){
        var dataSets = this.chart[i].chart_instance.config.data.datasets;
        for(var j = 0 ; j < dataSets.length ; j ++){
          if(dataSets[j].label === item.text){
            dataSets[j].hidden = !dataSets[j].hidden;
            return;
          }
        }
      }
    }
  }

  render(){
    return(
      <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => {this.setState({ tabIndex })}}>
        <TabList>
            {this.state.navs}
        </TabList>
        {this.state.charts}
      </Tabs>
    )
  }

  componentWillMount(){
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(nextProps){
    this.setState(function (prevState, props) {
        return {
          data: nextProps.data
        };
    });
    if(!nextProps.update){
      return;
    }
    const color=['rgba(75,192,192,1)','rgba(226,67,30,1)','rgba(231,113,27,1)',
    'rgba(15,255,58,1)','rgba(111,150,84,1)','rgba(28,145,192,1)',
    'rgba(67,69,157,1)','rgba(165,59,162,1)','rgba(47,252,150,1)'];
    var data=nextProps.indicators;
    if(data){
      var labels=[];
      var charts=[];
      var navs=[];
      var ylabel = null;
      var tabIndexMap = [];
      ylabel = "Value in $"
      for(var i = 0; i < data.length ; i ++){
        //for each indicator
        var dataSet=[];
        var regional = data[i].data;
        if(regional){
          for(var j = 0; j < regional.length; j++ ){
            var line = {
              pointBorderWidth: 1,
              pointHoverRadius: 2,
              pointHoverBorderWidth: 2,
              pointRadius: 1,
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

            line.label = regional[j].instrumentID;
            line.backgroundColor = color[j];
            line.borderColor = color[j];
            line.pointBorderColor = color[j];
            line.pointHoverBackgroundColor = color[j];
            line.data = [];

            var dateData = regional[j].dateValues;
            for(var k=0; k < dateData.length; k++){
              line.data.push(dateData[k].value);

              var contain =false;
              for(var m=0; m < labels.length; m++){
                if(labels[m] === dateData[k].date){
                  contain = true;
                  break;
                }
              }
              if(!contain){
                labels.push(dateData[k].date);
              }
            }

            dataSet.push(line);
          }
        }

        tabIndexMap.push(data[i].indicator);
        navs.push(
          <Tab key={data[i].indicator}>
              {data[i].indicator}
          </Tab>
        );
        charts.push(
          <TabPanel key={data[i].indicator}>
            <Row>
              <Col md="12">
                <Line
                  ref={(panel) =>{this.chart.push(panel);}}
                  data={{
                    datasets: dataSet,
                    labels: labels
                  }}
                  options={{
                    legend:{
                      display: true,
                      onClick: this.legendClick
                    },
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
              </Row>
            </TabPanel>
        );
      }
      navs.unshift(<Tab key="firstone">
          Cumulative Returns
          </Tab>
        );
      charts.unshift(
          <TabPanel key="firstone">
            <TimePointChart ref={(panel) =>{this.chart.push(panel);}} data={this.state.data}/>
          </TabPanel>
      );

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
}


export default TimePointIndicatorCharts;
