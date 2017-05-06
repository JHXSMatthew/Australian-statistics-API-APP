import React,{Component} from 'react';
import DataTable from './DataTable.js';
import Charts from './ChartSet.js';
import { CardColumns,CardHeader, Card, CardText, CardBlock,Row, Col,Container} from 'reactstrap';


class ResultPanel extends Component{

    constructor(props){
      super(props);

    }
    render(){
      return(
          <Container fluid={true}>
            <Row>
              <Col md="8" xs="8">
                <Charts data={this.props.data} dataType={this.props.dataType}/>
                  <Row>
                    <Col md="12" xs="12">
                      <PointsPanel/>
                    </Col>
                  </Row>
              </Col>
              <Col xs={{ size: 'auto' }}>
                <DataTable data={this.props.data} dataType={this.props.dataType}/>
              </Col>
            </Row>
          </Container>

      )
    }
}


class PointsPanel extends Component{
    constructor(props){
      super(props);
    }

    render(){
      return(
        <Card>
          <CardHeader>
            Time Series Points
          </CardHeader>
          <CardBlock>
            <CardColumns>

            </CardColumns>
          </CardBlock>
        </Card>
      )

    }


}

export default ResultPanel;
