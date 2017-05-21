import React,{Component} from 'react';
import {Container,Row,Col} from 'reactstrap';
import AddRelation from './AddRelation.js';
import DataFetcher from './DataFetcher.js';

class ControlView extends Component{

  constructor(props){
    super(props);

  }

  render(){
    return(
      <div style={{padding: 20}}>
        <Container>
          <Row>
            <Col md="6" xs="6" >
              <DataFetcher addDataEntry={this.addDataEntry} />
            </Col>
            <Col md="6" xs="6" >
              <AddRelation />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }




}


export default ControlView;
