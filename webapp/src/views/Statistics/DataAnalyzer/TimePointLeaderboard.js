import React,{Component} from 'react';
import ReactTable from 'react-table';
import {Badge} from 'reactstrap';



class TimePointLeaderboard extends Component{
  constructor(props){
    super(props);
    this.state={
      table: []
    };
  }

  componentWillReceiveProps(nextProps){
    var data = nextProps.data;
    if(data){
      var localCM = [];
      for(var i = 0 ; i < data.length ; i++){
        var curr = data[i].dateValues[data[i].dateValues.length - 1].CM_Return;
        localCM.push({
          name: data[i].name,
          instrumentID: data[i].instrumentID,
          CM_Return: curr,
          Click: data[i].Click
        });
      }
      localCM.sort(function(a,b){
        return parseFloat(b.CM_Return) - parseFloat(a.CM_Return);
      });
      var finalCM = [];
      var length = 10;
      if(length > localCM.length){
        length = localCM.length;
      }
      for(var j = 0 ; j < length ; j ++){

        localCM[j].rank = j+1;
        if(localCM[j].CM_Return < 0){
          localCM[j].CM_Return= parseFloat(localCM[j].CM_Return).toFixed(3) + "%";

          localCM[j].CM_Return = <Badge color="danger">{localCM[j].CM_Return}</Badge>
        }else{
          localCM[j].CM_Return= parseFloat(localCM[j].CM_Return).toFixed(3) + "%";

          localCM[j].CM_Return = <Badge color="success">{localCM[j].CM_Return}</Badge>
        }
        finalCM.push(localCM[j]);
      }
      this.setState({
        table: finalCM
      });
    }
  }

  render(){
    const topCompanies = [{
      header: 'Rank',
      accessor: 'rank', // String-based value accessors!,
      maxWidth: 50
    },{
      header: 'Company',
      accessor: 'name' // String-based value accessors!
    }, {
      header: 'InstrumentID',
      accessor: 'instrumentID',
    }, {
      header: 'Performance',
      accessor: 'CM_Return',
    },{
      header: 'Stock Detail',
      accessor: 'Click',
      maxWidth: 100
    }
  ];

    return(
      <ReactTable
        data={this.state.table}
        columns={topCompanies}
        defaultPageSize={5}
        noDataText='Loading...'
        showPagination={false}
        pageSize={5}
      />
    )
  }

}


export default TimePointLeaderboard;
