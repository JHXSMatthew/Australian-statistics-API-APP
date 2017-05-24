import React, {Component} from 'react';
import {Container,Button, Col,Row} from 'reactstrap';


class WelcomeView extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <Container>
        <Row>
          <Col>
            <Button color="primary" size="lg">Getting started</Button>
          </Col>
          <Col>
            <Button color="success" size="lg">Advanced Search</Button>
          </Col>
        </Row>
      </Container>
    )

  }

}

export default WelcomeView;
