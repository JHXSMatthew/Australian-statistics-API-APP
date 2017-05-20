import React, {Component} from 'react';
import DataFetcher from './DataFetcher.js';
import ComparisonView from './ComparisonView.js';
import 'react-table/react-table.css';
import AnalyticsView from './AnalyticsView.js';
import {ButtonGroup,Button,Row, Col,Container} from 'reactstrap';


export const STATE = [
{ label: 'All Australian Regions', value: 'AUS' },
{ label: 'New South Wales', value: 'NSW' },
{ label: 'Victoria', value: 'VIC' },
{ label: 'Queensland', value: 'QLD' },
{ label: 'South Australia', value: 'SA' },
{ label: 'Western Australia', value: 'WA' },
{ label: 'Tasmania', value: 'TAS' },
{ label: 'Northern Territory', value: 'NT' },
{ label: 'Australian Capital Territory', value: 'ACT' },
];


export const AREA = [
{ label: 'Merchandise Exports', value: 'MerchandiseExports' },
{ label: 'Retail', value: 'Retail' },
];

export const CATEGORY_ME = [
  { label: 'All categories',
    value: 'Total' ,
  },
  { label: 'Food and Live Animals', value: 'FoodAndLiveAnimals',
    topics:["RETA"],
    instruments: [{name:"Australian Agricultural Company", id:"AAC.AX"},{name:"Elders Ltd",id:"ELD.AX"},
      {name:"Graincorp Ltd",id:"GNC.AX"},{name: "Ridley Corporation Ltd",id:"RIC.AX"},
      {name:"Tassal Group Limited",id:"TGR.AX"},{name:"Webster Ltd",id:"WBA.AX"}]
   },
  { label: 'Beverages and Tobacco', value: 'BeveragesAndTobacco',
    topics: ['RETA'],
    instruments: [{name:"Coca Cola",id:"CCL.AX"}, {name:"Australian Whiskey Holdings",id:"AWY.AX"}]
  },
  { label: 'Crud Material and Inedibles',
    value: 'CrudMaterialAndInedible',
    topics: ['RETA'],
    instruments: [{name:"Alicanto Minerals Limited",id:"AQI.AX"}, {name:"Alara Resources Limited",id:"AUQ.AX"},
      {name:"Atc Alloys Ltd",id:"ATA.AX"}, {name:"Woollongong Coal Limited",id:"WLC.AX"}]

  },
  { label: 'Mineral, Fuel, Lubricant and Related Material',
    value: 'MineralFuelLubricentAndRelatedMaterial',
    topics:['RETA'],
    instruments: [{name:"Ceramic Fuel Cells Limited",id:"CFU.AX"}, {name:"Antilles Oil And Gas",id:"AZZ.AX"},
      {name:"Austex Oil Limited",id:"AOK.AX"}, {name:"Freedom Oil And Gas Limited",id:"FDM.AX"}, {name:"BHP Billiton Limited",id:"BHP.AX"}]
   },
  { label: 'Animal and Vegetable Oil, Fat and Waxes',
    value: 'AnimalAndVegitableOilFatAndWaxes',
    topics:['RETA'],
    instruments: [{name:"Australian Agricultural Company", id:"AAC.AX"},{name:"Elders Ltd",id:"ELD.AX"},
      {name:"Graincorp Ltd",id:"GNC.AX"},{name: "Ridley Corporation Ltd",id:"RIC.AX"},{name:"Tassal Group Limited",id:"TGR.AX"},{name:"Webster Ltd",id:"WBA.AX"}]
  },
  { label: 'Chemicals and Related Products',
    value: 'ChemicalsAndRelatedProducts',
    topics:['RETA'],
    instruments: [{name:"Acrux Limited",id:"ACR.AX"}, {name:"Bioxyne Limited",id:"BXN.AX"},
      {name:"Living Cell Technologies",id:"LCT.AX"}, {name:"Suda Ltd",id:"SUD.AX"}]

   },
  { label: 'Manufactured Goods',
    value: 'ManufacturedGoods' ,
    topics:['RETA'],
    instruments: [{name:"Ookami Limited",id:"OOK.AX"}, {name:"Advanced Braking Technology",id:"ABV.AX"},
      {name:"Bluglass Limited",id:"BLG.AX"}]
  },
  { label: 'Machinery and Transport Equipments',
    value: 'MachineryAndTransportEquipments',
    topics:['RETA'],
    instruments: [{name:"Traffic Technologies Limited",id:"TTI.AX"}, {name:"Macquarie Atlas Roads Group",id:"MQA.AX"},
      {name:"Sydney Airport",id:"SYD.AX"}, {name:"Aurizon Holdings Limited",id:"AZJ.AX"}]
  },
  { label: 'Other Manufactured Articles',
    value: 'OtherManufacturedArticles' ,
    topics:['RETA'],
    instruments: [{name:"Silex Systems Limited",id:"SLX.AX"}, {name:"Netcomm Wireless Limited",id:"NTC.AX"}]
  },
  { label: 'Unclassified',
    value: 'Unclassified' ,
    topics: ['RETA'],
    instruments: [{name:"Coca Cola",id:"CCL.AX"}, {name:"Australian Whiskey Holdings",id:"AWY.AX"}]
  },
];

export const CATEGORY_RT = [
  { label: 'All categories',
    value: 'Total'
  },
  { label: 'Foods',
    value: 'Food' ,
    topics: ['RET'],
    instruments: [{name:"Freedom Foods",id:"FNP.AX"}, {name:"Tassal Group Limited",id:"TGR.AX"},
    {name:"Seafarms Group Limited",id:"SFG.AX"},{name:"Woolsworths",id:"WOW.AX"}]
  },
  { label: 'Household Goods',
    value: 'HouseholdGood' ,
    topics: ['FOD'],
    instruments: [{name:"Home Depot",id:"HD"}, {name:"Nick Scali",id:"NCK.AX"},
      {name:"Harvey Norman",id:"HVN.AX"}, {name:"Ennis Inc",id:"EBF"},
      {name:"Bed Bath And Beyond",id:"BBBY"}]
  },
  { label: 'Clothing, Footware and Personal Accessories',
    value: 'ClothingFootwareAndPersonalAccessory',
    topics:['TEX'],
    instruments: [{name:"Gap Inc",id:"GPS"}, {name:"Footlocker",id:"FL"},
      {name:"Billabong International",id:"BBG.AX"}]
   },
  { label: 'Stores',
    value: 'DepartmentStores' ,
    topics: ['WHO'],
    instruments: [{name:"Walmart Stores",id:"WMT"}, {name:"Costco Wholesale Corporation",id:"COST"},
     {name:"Nick Scali",id:"NCK.AX"},
      {name:"Harvey Norman",id:"HVN.AX"}]
  },  //{name:"Myer Holdings",id:"MYR.AX"}, BOOM, WTF is RIC this to seesharps api?
  { label: 'Restaurants',
    value: 'CafesResturantsAndTakeawayFood',
    topics:['LEI'],
    instruments: [{name:"Mcdonalds",id:"MCD"}, {name:"Ark Restaurants Corp",id:"ARKR"},
      {name:"BJ Resutaurants Inc",id:"BJRI"}, {name:"Starbucks",id:"SBUX"}]
   },
  { label: 'Others',
    value: 'Other' ,
    topics:['RET'],
    instruments: [{name:"Jb Hifi",id:"JBH.AX"}, {name:"Activistic Limited",id:"ACU.AX"},
      {name:"Dropsuite Limited",id:"DSE.AX"}]
  },
];

export function valueToLabel(array,value){
  for(var i = 0 ; i < array.length ; i ++){
    if(array[i].value && array[i].value === value){
      return array[i].label;
    }
  }
  return null;
}



class DataAnalyzer extends Component {

  constructor(props){
    super(props);
    this.state = {
        data: [],
        dataType: null,
        rSelected: 1,
        comparisonSelected: 0,
        category: null,
        focusDate: null
    }
    this.addDataEntry = this.addDataEntry.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.setFocusDate = this.setFocusDate.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  setCategory(c,id){
    this.setState({Category: c, comparisonSelected: id})
  }

  setFocusDate(date){
    this.setState({focusDate: date});
  }



  addDataEntry(e){
    var data = e.data;
    var firstCategory = null;
    if(data){
      var dataType = null;
      if(data.MonthlyCommodityExportData){
        dataType = "Export";
        data = data.MonthlyCommodityExportData;
        for(var i = 0 ; i < data.length; i++){
          var total = 0;
          var count = 0;
          var trueTotal = 0;
          if(data[i].Commodity){
            if(!firstCategory){
              firstCategory = data[i].Commodity;
            }
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
                  dateData[k].Value = parseFloat(dateData[k].Value);
                  total += dateData[k].Value;
                  regionalTotal += dateData[k].Value;
                  regionalCount++;
                }
                regional[j].total = regionalTotal;
                regional[j].average = parseFloat(parseFloat(regionalTotal/regionalCount).toFixed(4));
                if(regional[j].State === "Australia"){
                  //don't add it. logically AU contains all states
                }else{
                  if(!isNaN(regional[j].average)){
                    total += regionalTotal/regionalCount;
                    count ++ ;
                  }
                }
              }
            }
          }
          data[i].average = parseFloat(parseFloat(total/count).toFixed(4));
        }
      }else if(data.MonthlyRetailData){
        dataType = "Retail";
        data = data.MonthlyRetailData;
        for( i = 0 ; i < data.length; i++){
          total = 0;
          count = 0;
          if(data[i].RetailIndustry){
            if(!firstCategory){
              firstCategory = data[i].RetailIndustry;
            }
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
                  dateData[k].Value = parseFloat(dateData[k].Turnover);
                  regionalTotal += dateData[k].Value;
                  regionalCount++;
                }
              }
              regional[j].total = regionalTotal;
              regional[j].average = parseFloat(parseFloat(regionalTotal/regionalCount).toFixed(4));
              if(regional[j].State === "Australia"){
                //don't add it. logically AU contains all states
              }else{
                if(!isNaN(regional[j].average)){
                  total += regionalTotal/regionalCount;
                  count ++ ;
                }
              }
            }
          }
          data[i].average = parseFloat(parseFloat(total/count).toFixed(4));
        }
      }

      for(var i = 0 ; i < data.length; i++){
        var re = data[i].RegionalData;
        var totalValues = [];
        if(re){
          for(var j = 0 ; j < re.length ; j++){
            var dateData = re[j].Data;
            var values = [];
            for(var k = 0; k < dateData.length ; k ++){
              values.push(parseFloat(parseFloat(dateData[k].Value).toFixed(4)));
            }
            values.sort(function(a, b){return a-b});
            re[j].minimum = parseFloat(values[0]);
            re[j].maximum = values[values.length -1];
            re[j].fq = values[Math.floor(0.25 * values.length)];
            if(values.length%2 == 0){
              re[j].median = values[Math.floor(values.length/2)];
            }else{
              re[j].median = (values[Math.floor(values.length/2)] + values[Math.floor(values.length/2) + 1])/2;
            }
            re[j].tq =values[Math.floor(0.75 * values.length)];
            if(re[j].total){
              totalValues.push(re[j].total);
            }
          }
        }
        totalValues.sort(function(a, b){return a-b});
        for(var m = 0 ; m < totalValues.length ; m ++){
          totalValues[m] = parseFloat(parseFloat(totalValues[m]).toFixed(4));
        }
        data[i].minimum = totalValues[0];
        data[i].maximum = totalValues[totalValues.length -1];
        data[i].fq = totalValues[Math.floor(0.25 * totalValues.length)];
        if(totalValues.length%2 == 0){
          data[i].median = totalValues[totalValues.length/2];
        }else{
          data[i].median = (totalValues[Math.floor(totalValues.length/2)] + totalValues[Math.floor(totalValues.length/2 + 1)])/2;
        }
        data[i].tq =totalValues[Math.floor(0.75 * totalValues.length)];
      }
    }



    this.setState(function (prevState, props) {
        return {
          data: data,
          dataType: dataType,
          rSelected: 2,
          category: firstCategory,
        };
    });
  }

  render(){
        return(
            <div className="animated fadeIn">
              <Container>
                <Row>
                  <Col style={{padding: 10}} md={{ size: 6, push: 2, pull: 2, offset: 2 }}>
                    {this.state.dataType &&
                      <div>
                        <ButtonGroup>
                          <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>Search</Button>
                          <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Comparison</Button>
                          <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Analytics</Button>
                        </ButtonGroup>
                      </div>
                    }
                  </Col>
                </Row>
                <Row>
                  <Col sm={{ size: 6, push: 2, pull: 2,  offset: 1}}>
                    <div style={this.state.rSelected === 1 ?  {display: 'inline'} : {display: 'none'}}>
                      <DataFetcher addDataEntry={this.addDataEntry} />
                    </div>
                  </Col>
                </Row>
              </Container>
              <div style={{padding: 20}}>
                <div style={this.state.rSelected === 2 && this.state.dataType ?  {display: 'inline'} : {display: 'none'}}>
                  <ComparisonView data={this.state.data} dataType={this.state.dataType} setFocusDate={this.setFocusDate} setCategory={this.setCategory}></ComparisonView>
                </div>
                <div style={this.state.rSelected === 3 && this.state.dataType && this.state.focusDate ?  {display: 'inline'} : {display: 'none'}}>
                  {this.state.focusDate && <AnalyticsView  date={this.state.focusDate} dataType={this.state.dataType} category={this.category}/>}
                </div>

              </div>
            </div>
        )
  }
}

export default DataAnalyzer;
