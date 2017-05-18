import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Doughnut } from 'react-chartjs-2';


class PieChart extends Component{
  constructor(props){
    super(props);
    const color=['rgba(75,192,192,1)','rgba(226,67,30,1)','rgba(231,113,27,1)',
    'rgba(15,255,58,1)','rgba(111,150,84,1)','rgba(28,145,192,1)',
    'rgba(67,69,157,1)','rgba(165,59,162,1)','rgba(47,252,150,1)'];

  }

  componentWillMount(){
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(nextProps){

  }


  render(){
    const doughnut = {
      labels: [
        'Red',
        'Green',
        'Yellow'
      ],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
      }]
    };
    return(
      <Doughnut data={doughnut} />
    )

  }
}

export default PieChart;
