import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'chartjs-plugin-zoom/chartjs-plugin-zoom.js';

// chats components
class Charts extends Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }


  componentWillMount(){
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(nextProps){
    const color=['rgba(75,192,192,1)','rgba(226,67,30,1)','rgba(231,113,27,1)',
    'rgba(15,255,58,1)','rgba(111,150,84,1)','rgba(28,145,192,1)',
    'rgba(67,69,157,1)','rgba(165,59,162,1)','rgba(47,252,150,1)'];

    var data=nextProps.data;
    if(data){
      var labels=[];
      var charts=[];
      var navs=[];
      var ylabel = null;
      if(nextProps.dataType === "Export"){
        ylabel = "Value ($ thousands)"
      }else if(nextProps.dataType === "Retail"){
        ylabel = "Value ($ millions)";
      }
      for(var i = 0; i < data.length ; i ++){
        //for each category
        var dataSet=[];
        var regional = data[i].RegionalData;
        if(regional){
          for(var j = 0; j < regional.length; j++ ){
            var line = {
              pointBorderWidth: 1,
              pointHoverRadius: 5,
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
            line.label = regional[j].State;
            line.backgroundColor = color[j];
            line.borderColor = color[j];
            line.pointBorderColor = color[j];
            line.pointHoverBackgroundColor = color[j];
            line.data = [];

            var dateData = regional[j].Data;
            for(var k=0; k < dateData.length; k++){
              line.data .push(dateData[k].Value);
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
          }
        }
        navs.push(
          <Tab key={data[i].Category}>
              {data[i].Category}
          </Tab>
        );
        charts.push(
          <TabPanel key={data[i].Category}>
            <div className="chart-wrapper">
              <Line
                data={{
                  datasets: dataSet,
                  labels: labels
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                  scales: {
                    xAxes: [{
                        display: true,
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
        					drag: false,
        					mode: 'x',
        				}
                }}
              />
            </div>
          </TabPanel>
        );
      }

      this.setState(function (prevState, props) {
          return {
            charts: charts,
            navs: navs
          };
      });
    }
  }


  render(){


    return (

              <Tabs
                selectedIndex={0}
              >
                <TabList>
                    {this.state.navs}
                </TabList>
                {this.state.charts}
            </Tabs>

    )
  }
}

export default Charts;
