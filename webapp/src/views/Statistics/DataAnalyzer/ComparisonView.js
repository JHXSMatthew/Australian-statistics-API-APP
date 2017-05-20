import React,{Component} from 'react';
import DataTable from './DataTable.js';
import ChartSet from './ChartSet.js';
import 'rc-slider/assets/index.css';
import { Row, Col,Container} from 'reactstrap';


class ResultPanel extends Component{
    render(){
      return(
          <Container fluid={true}>
            <Row>
              <Col md="12" xs="12" >
                <ChartSet data={this.props.data} dataType={this.props.dataType} comparisonSelected={this.props.comparisonSelected} setCategory={this.props.setCategory}/>
              </Col>
            </Row>
            <Row>
              <Col  md="12" xs={{ size: '12' }}>
                <DataTable data={this.props.data} dataType={this.props.dataType}/>
              </Col>
            </Row>
          </Container>

      )
    }
}


export default ResultPanel;
