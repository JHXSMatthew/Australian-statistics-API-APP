import React, {Component} from 'react';
import Select from 'react-select';
import Picker from 'react-month-picker';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const STATE = [
{ label: 'Australian', value: 'AUS' },
{ label: 'New South Wales', value: 'NSW' },
{ label: 'Victoria', value: 'VIC' },
{ label: 'Queensland', value: 'QLD' },
{ label: 'South Australia', value: 'SA' },
{ label: 'Western Australia', value: 'WA' },
{ label: 'Tasmania', value: 'TAS' },
{ label: 'Northern Territory', value: 'NT' },
{ label: 'Australian Capital Territory', value: 'ACT' },
];

const AREA = [
{ label: 'Merchandise Exports', value: 'MerchandiseExports' },
{ label: 'Retail', value: 'Retail' },
];

const CATEGORY_ME = [
  { label: 'All categories', value: 'Total' },
  { label: 'Food And Live Animals', value: 'FoodAndLiveAnimals' },
  { label: 'Beverages And Tobacco', value: 'BeveragesAndTobacco' },
  { label: 'Crud Material And Inedible', value: 'CrudMaterialAndInedible' },
  { label: 'Mineral Fuel Lubricent And related material', value: 'MineralFuelLubricentAndRelatedMaterial' },
  { label: 'Animal and vegitable oil fat and waxes', value: 'AnimalAndVegitableOilFatAndWaxes' },
  { label: 'Chemicals And Related Products', value: 'ChemicalsAndRelatedProducts' },
  { label: 'Manufacuted Goods', value: 'ManufacturedGoods' },
  { label: 'Machinery And Transport Equipments', value: 'MachineryAndTransportEquipments' },
  { label: 'Other Manucactured Articles', value: 'OtherManufacturedArticles' },
  { label: 'Unclassified', value: 'Unclassified' },
];

const CATEGORY_RT = [
{ label: 'All categories', value: 'Total' },
{ label: 'Food related category', value: 'Food' },
{ label: 'HouseholdGood category', value: 'HouseholdGood' },
{ label: 'Clothing Footware And Personal Accessory category', value: 'ClothingFootwareAndPersonalAccessory' },
{ label: 'Stores', value: 'DepartmentStores' },
{ label: 'Resturants', value: 'CafesResturantsAndTakeawayFood' },
{ label: 'others', value: 'Other' },
];

function valueToLabel(array,value){
  for(var i = 0 ; i < array.length ; i ++){
    if(array[i].value && array[i].value === value){
      return array[i].label;
    }
  }
  return null;
}

const DATE_LANG = {
       months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
       , from: 'From', to: 'To'
   }


class DataAnalyzer extends Component {

  constructor(props){
    super(props);
    this.state = {
        data: [],
    }
    this.addDataEntry = this.addDataEntry.bind(this);
  }

  addDataEntry(e){
    var data = e.data;
    if(data){
      if(data.MonthlyCommodityExportData){
        data = data.MonthlyCommodityExportData;
        for(var i = 0 ; i < data.length; i++){
          var total = 0;
          var count = 0;
          if(data[i].Commodity){
            data[i].Category = valueToLabel(CATEGORY_ME,data[i].Commodity);
          }
          if(data[i].RegionalData){
            var regional = data[i].RegionalData;
            for(var j = 0 ; j < regional.length ; j ++){
              //state and data
              var regionalTotal = 0;
              var regionalCount = 0;
              regional[j].State = valueToLabel(STATE,regional[j].State);
              if(regional[j].Data){
                var dateData = regional[j].Data;
                for(var k = 0; k < dateData.length ; k ++){
                  total += dateData[k].Value;
                  regionalTotal += dateData[k].Value;
                  regionalCount++;
                }
                regional[j].average = parseFloat(regionalTotal/regionalCount).toFixed(4);
                if(regional[j].State === "Australia"){
                  //don't add it. logically AU contains all states
                }else{
                  total += regionalTotal/regionalCount;
                  count ++ ;
                }

              }
            }
          }
          data[i].average = parseFloat(total/count).toFixed(4);
        }

      }else if(data.MonthlyRetailData){
        data = data.MonthlyRetailData;
        for( i = 0 ; i < data.length; i++){
          total = 0;
          count = 0;
          if(data[i].RetailIndustry){
            data[i].Category = valueToLabel(CATEGORY_RT,data[i].RetailIndustry);
          }
          if(data[i].RegionalData){
            regional = data[i].RegionalData;
            for( j = 0 ; j < regional.length ; j ++){
              //state and data
              regionalTotal = 0;
              regionalCount = 0;
              regional[j].State = valueToLabel(STATE,regional[j].State);
              if(regional[j].Data){
                dateData = regional[j].Data;
                for(k = 0; k < dateData.length ; k ++){
                  dateData[k].Value = dateData[k].Turnover;
                  regionalTotal += dateData[k].Value;
                  regionalCount++;
                }
              }
              regional[j].average = parseFloat(regionalTotal/regionalCount).toFixed(4);
              if(regional[j].State === "Australia"){
                //don't add it. logically AU contains all states
              }else{
                total += regionalTotal/regionalCount;
                count ++ ;
              }
            }
          }
          data[i].average = parseFloat(total/count).toFixed(4);
        }
      }
    }
    this.setState(function (prevState, props) {
        return {
          data: data
        };
    });

  }

  render(){
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-sm-12">
            <Charts data={this.state.data}/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <DataFetcher addDataEntry={this.addDataEntry} />
          </div>
          <div className="col-sm-6">
            <DataTable data={this.state.data}/>
          </div>
        </div>
      </div>
    )
  }
}

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
      console.log(tab);
      this.setState({
        activeTab: tab
      });
    }
  }

  componentWillReceiveProps(nextProps){
    const color=['rgba(75,192,192,1)','rgba(226,67,30,1)','rgba(231,113,27,1)',
    'rgba(241,202,58)','rgba(111,150,84,1)','rgba(28,145,192,1)',
    'rgba(67,69,157,1)','rgba(165,59,162,1)','rgba(47,252,150,1)'];

    var data=nextProps.data;
    if(data){
      var labels=[];
      var charts=[];
      var navs=[];

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
                labels.push( dateData[k].Date);
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
                  maintainAspectRatio: false
                }}
              />
            </div>
          </TabPanel>
        );
      }

      this.setState(function (prevState, props) {
        console.log("prev");

        console.log(prevState);
        console.log("props");
        console.log(props);

          return {
            charts: charts,
            navs: navs
          };
      });

      console.log(this.state);
    }
  }


  render(){


    return (
      <div className="card">
        <div className="card-header">
          <strong>Charts</strong>
        </div>
        <div className="card-block">
          <div className="col-md-12 mb-12">
            <Tabs

              selectedIndex={0}
            >
              <TabList>
                  {this.state.navs}
              </TabList>

              {this.state.charts}

          </Tabs>
          </div>
        </div>
      </div>
    )
  }
}


class DataTable extends Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state ={
      rawShowing: false,
    }
  }

  toggle() {
    this.setState({
      rawShowing: !this.state.rawShowing
    });
  }

  render() {
    var data = this.props.data;
    const categoryValue = [{
      header: 'Category',
      accessor: 'Category' // String-based value accessors!
    }, {
      header: 'Average',
      accessor: 'average',
    }]

    const regionalData = [{
      header: 'State',
      accessor: 'State' // String-based value accessors!
    }, {
      header: 'Average',
      accessor: 'average',
    }]

    const Datedata = [{
      header: 'Date',
      accessor: 'Date' // String-based value accessors!
    }, {
      header: 'Value',
      accessor: 'Value',
    }]

    return(
      <div className="card">
        <div className="card-header">
          <strong>Data Set</strong>
        </div>
        <div className="card-block">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <ReactTable
                data={data}
                columns={categoryValue}
                defaultPageSize={5}
                noDataText='Use Data Fetcher to fetch data.'
                pageSize={(data &&  data.length) ? data.length : 7}
                SubComponent={(row) => {
                  return(
                    <ReactTable
                      data={row.row.RegionalData}
                      columns={regionalData}
                      defaultPageSize={10}
                      pageSize={row.row.RegionalData.length}
                      showPagination={false}
                      SubComponent={(row) => {
                        return(
                          <ReactTable
                            data={row.row.Data}
                            pageSize={row.row.Data.length}
                            columns={Datedata}
                            defaultPageSize={10}
                            showPagination={false}
                          />
                        )
                      }}
                    />
                  )
                }}
              />
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-sm btn-primary" onClick={this.toggle} disabled={!data} ><i className="fa fa-dot-circle-o" ></i> Raw</button>
        </div>
        <Modal isOpen={this.state.rawShowing} toggle={this.toggle} className={'modal-lg '+ this.props.className}>
          <ModalHeader toggle={this.toggle}>JSON</ModalHeader>
          <ModalBody>
            {JSON.stringify(this.props.data,null,2)}
          </ModalBody>
          <ModalFooter>
            <CopyToClipboard text={(this.props.data)?JSON.stringify(this.props.data,null,2):""}>
              <Button color="primary" onClick={this.toggle}>Copy</Button>
            </CopyToClipboard>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>



    )
  }

}
/*
//data set componenets

class DataSet extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="card">
        <div className="card-header">
          <strong>Data Set</strong>
        </div>
        <div className="card-block">
          <div id="accordion" role="tablist" aria-multiselectable="true">
            {this.props.entries}
          </div>
        </div>
      </div>
    )
  }
}

class DataEntry extends Component{
  constructor(props){
    super(props);
    this.state ={
      json: this.props.json
    }
  }

  render(){
    return (

    )
  }

}

*/

//data fetcher components

class DataFetcher extends Component {

  constructor(props){
    super(props);
    this.state = {
      area: null,
      region: [],
      category: [],
      mrange: {from: {year: 2016, month: 7}, to: {year: 2017, month: 2}},
      count: 0,
    }
    this.setArea = this.setArea.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.setRegion = this.setRegion.bind(this);
    this.fetch = this.fetch.bind(this);
    this.handleClickRangeBox = this.handleClickRangeBox.bind(this);
    this.handleRangeDissmis = this.handleRangeDissmis.bind(this);
  }

  setArea(a){
    this.setState({
      area: a,
      category: []
    })
  }

  setRegion(a){
    this.setState({
      region: a,
    })
  }

  setCategory(a){
    this.setState({
      category: a
    })
  }

  handleClickRangeBox(e) {
      this.refs.pickRange.show()
  }

  handleRangeDissmis(value) {
    this.setState( {mrange: value} )
  }

  fetch(e){
    var that = this;
    var url = 'http://45.76.114.158/api/'
    fetch( url,{
      method: 'POST',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        StatisticsArea: this.state.area,
        State: this.state.region,
        Category: this.state.category,
        startDate: this.state.mrange.from.year + "-" + this.state.mrange.from.month + "-01",
        endDate: this.state.mrange.to.year + "-" + this.state.mrange.to.month + "-01"
      }),
    })
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json().then(function (json) {
        //TODO: deal with empty data
        that.props.addDataEntry(json,"Data Entry"+that.state.count++);
      })

    });
  }

  render(){
    var button = (this.state.area && this.state.region && this.state.category && this.state.region.length > 0 && this.state.category.length > 0) ? false : true;

    return (
        <div className="card">
          <div className="card-header">
            <strong>Data fetcher</strong>
          </div>
          <div className="card-block">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="form-group">
                  <label htmlFor="name">Statistics Area</label>
                  <AreaSelector setArea={this.setArea}/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="form-group">
                  <label htmlFor="regions">Regions</label>
                  <StateSelector setRegion={this.setRegion}/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <CategorySelector setCategory={this.setCategory} area={this.state.area} category={this.state.category}/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="form-group">
                  <label htmlFor="daterange">Date Range</label>
                  <MonthBox value={this.state.mrange} ClickRangeBox={this.handleClickRangeBox} />
                </div>
              </div>
            </div>

              <Picker
                  ref="pickRange"
                  years={{min: 1995, max: 2017}}
                  range={this.state.mrange}
                  lang={DATE_LANG}
                  theme="light"
                  onChange={this.handleRangeChange}
                  onDismiss={this.handleRangeDissmis}
                  >
              </Picker>
          </div>
          <div className="card-footer">
            <button className="btn btn-sm btn-primary" onClick={this.fetch} disabled={button} ><i className="fa fa-dot-circle-o" ></i> Fetch</button>
          </div>

        </div>

    )
  }
}


class Switch_Text extends Component{

  render(){
    return (
      <label className="switch switch-3d switch-primary">
        <input type="checkbox" className="switch-input" defaultChecked/>
        <span className="switch-label"></span>
        <span className="switch-handle"></span>
      </label>
    )
  }

}

class MonthBox extends Component {
  constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.ClickRangeBox();
  }

  render(){
    let makeText = m => {
        if (m && m.year && m.month) return (DATE_LANG.months[m.month-1] + '. ' + m.year)
        return '?'
    }
    return <div className="box" onClick={this.handleClick}>
              <button type="button" className="btn btn-outline-secondary btn-block">{makeText(this.props.value.from) + ' ~ ' + makeText(this.props.value.to)}</button>
            </div>
  }

}


class AreaSelector extends Component{
  constructor(prop){
    super(prop)
    this.state = {
      disabled: false,
      options: AREA,
      value: '',
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(value) {
  		this.setState({value});
      this.props.setArea(value);
  }

  render(){
    return <Select simpleValue value={this.state.value} placeholder="Select Statistics Area" options={this.state.options} onChange={this.handleSelectChange} />
  }
}

class StateSelector extends Component{
  constructor(prop){
    super(prop)
    this.state = {
      disabled: false,
      options: STATE,
      value: [],
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(value) {
  		this.setState({ value });
      this.props.setRegion(value);
  }

  render(){
    return <Select multi simpleValue value={this.state.value} placeholder="Select regions" options={this.state.options} onChange={this.handleSelectChange} />
  }
}


class CategorySelector extends Component{
  constructor(props){
    super(props)
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(value) {
      this.props.setCategory(value);
  }

  render(){
    return <Select multi simpleValue disabled={(this.props.area) ? false : true} value={this.props.category} placeholder="Select Categories" options={this.props.area &&this.props.area === "Retail" ? CATEGORY_RT : CATEGORY_ME } onChange={this.handleSelectChange} />
  }
}

export default DataAnalyzer;
