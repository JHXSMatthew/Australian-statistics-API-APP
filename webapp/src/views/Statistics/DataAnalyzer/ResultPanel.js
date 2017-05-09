import React,{Component} from 'react';
import DataTable from './DataTable.js';
import Charts from './ChartSet.js';
import 'rc-slider/assets/index.css';
import { Row, Col,Container} from 'reactstrap';


class ResultPanel extends Component{
    render(){
      return(
          <Container fluid={true}>
            <Row>
              <Col md="8" xs="8" >
                <Charts data={this.props.data} dataType={this.props.dataType} addTimePoint={this.addTimePoint}/>
              </Col>
              <Col  md="4" xs={{ size: '4' }}>
                <DataTable data={this.props.data} dataType={this.props.dataType}/>
              </Col>
            </Row>
          </Container>
          
      )
    }
}


export default ResultPanel;
