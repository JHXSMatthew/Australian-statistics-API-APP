//data fetcher components
import React, {Component} from 'react';
import Select from 'react-select';
import { PopoverTitle, PopoverContent,Popover} from 'reactstrap';
import {AREA} from './DataAnalyzer.js';
import {STATE} from './DataAnalyzer.js';
import {CATEGORY_RT} from './DataAnalyzer.js';
import {CATEGORY_ME} from './DataAnalyzer.js';
import Picker from 'react-month-picker';



const DATE_LANG = {
       months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
       , from: 'From', to: 'To'
}

class DataFetcher extends Component {

  constructor(props){
    super(props);
    this.state = {
      area: null,
      region: [],
      category: [],
      mrange: {from: {year: 2014, month: 7}, to: {year: 2017, month: 2}},
      count: 0,
      popoverOpen: false
    }
    this.setArea = this.setArea.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.toggle = this.toggle.bind(this);
    this.setRegion = this.setRegion.bind(this);
    this.fetch = this.fetch.bind(this);
    this.handleClickRangeBox = this.handleClickRangeBox.bind(this);
    this.handleRangeDissmis = this.handleRangeDissmis.bind(this);
  }


  componentWillReceiveProps(nextProps){
    if(!nextProps.expert){
      var categoryStrs = [];
      var regionStrs = [];
      var temp = [];
      var a = this.state.area;
      if(a==="MerchandiseExports"){
        temp = CATEGORY_ME;
      }else if(a==="Retail"){
        temp = CATEGORY_RT;
      }else{
        return;
      }
      for(var i = 0 ; i < temp.length ; i ++){
        categoryStrs.push(temp[i].value);
      }
      for(i = 0 ; i < STATE.length ; i ++){
        regionStrs.push(STATE[i].value);
      }
      this.setState({
        category: categoryStrs.join(),
        region: regionStrs.join()
      })
    }
  }

  toggle() {
      this.setState({
        popoverOpen: !this.state.popoverOpen
      });
    }

  setArea(a){
    if(this.props.expert){
      this.setState({
        area: a,
        category: []
      })
    }else{
      var categoryStrs = [];
      var regionStrs = [];
      var temp = [];
      if(a==="MerchandiseExports"){
        temp = CATEGORY_ME;
      }else if(a==="Retail"){
        temp = CATEGORY_RT;
      }
      for(var i = 0 ; i < temp.length ; i ++){
        categoryStrs.push(temp[i].value);
      }
      for(i = 0 ; i < STATE.length ; i ++){
        regionStrs.push(STATE[i].value);
      }
      this.setState({
        area: a,
        category: categoryStrs.join(),
        region: regionStrs.join()
      })
    }

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
        alert("Our data source is down, please wait for a while and we'll fix it asap.")
        return;
      }
      return response.json().then(function (json) {
        //TODO: deal with empty data
        that.props.addDataEntry(json,"Data Entry"+that.state.count++,that.state.mrange.from.year + "-" + that.state.mrange.from.month + "-01");

      })

    });
  }

  render(){
    var button = (this.state.area && this.state.region && this.state.category && this.state.region.length > 0 && this.state.category.length > 0) ? false : true;

    return (
          <div className="card">
            <div className="card-header">
              {this.props.expert ?<strong>Advanced Search</strong> :<strong>Getting started</strong>}
              <label className="switch switch-sm switch-text switch-info float-right mb-0">
               <input type="checkbox" className="switch-input" checked={this.props.expert ? true : false}  onChange={this.props.toggleExpert} />
               <span className="switch-label" data-on="On" data-off="Off"></span>
               <span className="switch-handle"></span>
             </label>
              <span className="float-right"><i className="icon-question" id="Popover1" onClick={this.toggle}></i></span>
            </div>
            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
               <PopoverTitle>Data Fetcher</PopoverTitle>
               <PopoverContent>Fill all forms and click fetch to fetch data. All fetched data will be shown in Data Set and charts will be shown. <strong>Click on switch to enable Advanced searching mode.</strong></PopoverContent>
             </Popover>
             <div className="card-block">
              <div className="row">
                <div className="col-sm-12 col-md-12">
                  <div className="form-group">
                    <label htmlFor="name">Statistics Area</label>
                    <AreaSelector setArea={this.setArea}/>
                  </div>
                </div>
              </div>

              {this.props.expert &&<div className="row">
                <div className="col-sm-12 col-md-12">
                  <div className="form-group">
                    <label htmlFor="regions">Regions</label>
                    <StateSelector region={this.state.region} setRegion={this.setRegion}/>
                  </div>
                </div>
              </div>}
              <div className="row">
                {this.props.expert &&<div className="col-sm-4 col-md-4"/>}
                <div className="col-sm-4 col-md-4">
                  <Picker
                      ref="pickRange"
                      years={{min: 1983, max: 2017}}
                      range={this.state.mrange}
                      lang={DATE_LANG}
                      theme="light"
                      onChange={this.handleRangeChange}
                      onDismiss={this.handleRangeDissmis}
                      >
                  </Picker>
                </div>
                {this.props.expert &&<div className="col-sm-4 col-md-4"/>}
              </div>
              {this.props.expert && <div className="row">
                <div className="col-sm-12 col-md-12">
                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <CategorySelector setCategory={this.setCategory} area={this.state.area} category={this.state.category}/>
                  </div>
                </div>
              </div>}
              <div className="row">
                <div className="col-sm-12 col-md-12">
                  <div className="form-group">
                    <label htmlFor="daterange">Date Range</label>
                    <MonthBox value={this.state.mrange} ClickRangeBox={this.handleClickRangeBox} />
                  </div>
                </div>
              </div>


            </div>
            <div className="card-footer">
              <button className="btn btn-sm btn-primary" onClick={this.fetch} disabled={button} ><i className="fa fa-dot-circle-o" ></i> Confirm</button>
            </div>

          </div>


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
    return <div className="a" onClick={this.handleClick}>
              <button type="button" className="btn btn-outline-primary btn-block"><b>{makeText(this.props.value.from) + ' ~ ' + makeText(this.props.value.to)}</b></button>
            </div>
  }

}


export class AreaSelector extends Component{
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

export class StateSelector extends Component{
  constructor(prop){
    super(prop)
    this.state = {
      disabled: false,
      options: STATE,
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(value) {
      this.props.setRegion(value);
  }

  render(){
    return <Select multi simpleValue value={this.props.region} placeholder="Select regions" options={this.state.options} onChange={this.handleSelectChange} />
  }
}


export class CategorySelector extends Component{
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

export default DataFetcher;
