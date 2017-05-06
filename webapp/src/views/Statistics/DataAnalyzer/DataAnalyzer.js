import React, {Component} from 'react';
import DataFetcher from './DataFetcher.js';
import ResultPanel from './ResultPanel.js';
import 'react-table/react-table.css';
import { PopoverTitle, PopoverContent,Popover,Button, Modal, ModalHeader, ModalBody, ModalFooter ,Row, Col,Container} from 'reactstrap';


export const STATE = [
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

export const AREA = [
{ label: 'Merchandise Exports', value: 'MerchandiseExports' },
{ label: 'Retail', value: 'Retail' },
];

export const CATEGORY_ME = [
  { label: 'All categories', value: 'Total' },
  { label: 'Food And Live Animals', value: 'FoodAndLiveAnimals' },
  { label: 'Beverages And Tobacco', value: 'BeveragesAndTobacco' },
  { label: 'Crud Material And Inedible', value: 'CrudMaterialAndInedible' },
  { label: 'Mineral Fuel Lubricent And related material', value: 'MineralFuelLubricentAndRelatedMaterial' },
  { label: 'Animal and vegitable oil fat and waxes', value: 'AnimalAndVegitableOilFatAndWaxes' },
  { label: 'Chemicals And Related Products', value: 'ChemicalsAndRelatedProducts' },
  { label: 'Manufacture Goods', value: 'ManufacturedGoods' },
  { label: 'Machinery And Transport Equipments', value: 'MachineryAndTransportEquipments' },
  { label: 'Other Manufactured Articles', value: 'OtherManufacturedArticles' },
  { label: 'Unclassified', value: 'Unclassified' },
];

export const CATEGORY_RT = [
{ label: 'All categories', value: 'Total' },
{ label: 'Food related category', value: 'Food' },
{ label: 'HouseholdGood category', value: 'HouseholdGood' },
{ label: 'Clothing Footware And Personal Accessory category', value: 'ClothingFootwareAndPersonalAccessory' },
{ label: 'Stores', value: 'DepartmentStores' },
{ label: 'Restaurants', value: 'CafesResturantsAndTakeawayFood' },
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

class DataAnalyzer extends Component {

  constructor(props){
    super(props);
    this.state = {
        data: [],
        dataType: null
    }
    this.addDataEntry = this.addDataEntry.bind(this);
  }

  addDataEntry(e){
    var data = e.data;
    if(data){
      var dataType = null;
      if(data.MonthlyCommodityExportData){
        dataType = "Export";
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
                  if(!isNaN(regional[j].average)){
                    total += regionalTotal/regionalCount;
                    count ++ ;
                  }
                }

              }
            }
          }
          data[i].average = parseFloat(total/count).toFixed(4);
        }

      }else if(data.MonthlyRetailData){
        dataType = "Retail";
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
                if(!isNaN(regional[j].average)){
                  total += regionalTotal/regionalCount;
                  count ++ ;
                }
              }
            }
          }
          data[i].average = parseFloat(total/count).toFixed(4);
        }
      }
    }
    this.setState(function (prevState, props) {
        return {
          data: data,
          dataType: dataType
        };
    });
  }

  render(){
      if(this.state.dataType){

        return (
          <div className="animated fadeIn">
            <ResultPanel data={this.state.data} dataType={this.state.dataType}></ResultPanel>
          </div>
        )
      }else{
        return(
            <div className="animated fadeIn">
                <Container>
                  <Row>
                    <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>
                        <DataFetcher addDataEntry={this.addDataEntry} />
                    </Col>
                  </Row>
                </Container>
            </div>
        )

      }


  }
}

export default DataAnalyzer;
