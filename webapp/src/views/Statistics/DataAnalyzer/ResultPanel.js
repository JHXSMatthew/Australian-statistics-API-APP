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
                <Charts data={this.props.data} dataType={this.props.dataType} addTimePoint={this.addTimePoint}/>
              <Col xs={{ size: 'auto' }}>
                <DataTable data={this.props.data} dataType={this.props.dataType}/>
              </Col>
            </Row>
          </Container>

      )
    }
}


export default ResultPanel;
