import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';



class TimePointChart extends Component{

  constructor(props){
    super(props);
    this.state = {
      lines: null,
      labels: null
    }
    this.resetZoom = this.resetZoom.bind(this);
  }

  resetZoom(){
      if(this.chart){
        this.chart.chart_instance.resetZoom();
      }
  }

  componentWillMount(){
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(nextProps){
    const color=['rgba(75,192,192,1)','rgba(226,67,30,1)','rgba(231,113,27,1)',
    'rgba(15,255,58,1)','rgba(111,150,84,1)','rgba(28,145,192,1)',
    'rgba(67,69,157,1)','rgba(165,59,162,1)','rgba(47,252,150,1)'];
      var data= nextProps.data;
      //for each line

      console.log(data);
      if(!data){
        this.setState({
          lines: null,
          labels: null
        });
        return;
      }
      var lines = [];
      var labels = [];
      var label_set = false;
      for(var i = 0 ; i < data.length ; i ++ ){
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
        line.label = data[i].InstrumentID;
        line.backgroundColor = color[i];
        line.borderColor = color[i];
        line.pointBorderColor = color[i];
        line.pointHoverBackgroundColor = color[i];
        line.data = [];
        for(var j = 0 ; j < data[i].Data.length ; j ++){
          if(!label_set){
            labels.push(data[i].Data[j].Date);
          }
          line.data.push(data[i].Data[j].value);
        }
        label_set = true;
        lines.push(line);
      }
      this.setState({
        labels:labels,
        lines:lines
      });
  }

  render(){
    if(this.state.lines){
      return(
         <Line
          ref={(panel) =>{this.chart = panel;}}
          data={{
            datasets: this.state.lines,
            labels: this.state.labels
          }}
          options={{
            responsive: true,
            scales: {
              xAxes: [{
                  type: "time",
                  time: {
                    format: 'YYYY-MM-DD',
                   // tooltipFormat: 'll HH:mm'
                  },
                  display: true,
                  scaleLabel: {
                      display: true,
                      labelString: 'Date'
                  },
                  ticks:{
                    min:this.state.labels[0],
                    max:this.state.labels[this.state.labels.length -1]
                  }

              }],
              yAxes: [{
                  display: true,
                  scaleLabel: {
                      display: true,
                      labelString: "Cumulative returns"
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
      );
    }else{
      return (
      <div>
          loading ....
      </div>
      )
    }

  }
}


export default TimePointChart;
