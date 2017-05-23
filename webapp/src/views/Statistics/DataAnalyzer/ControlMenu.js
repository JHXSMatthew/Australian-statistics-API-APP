import React, {Component} from 'react';
import {Card,ButtonGroup,Container,Button, Col,Row} from 'reactstrap';


class ControlMenu extends Component{

  constructor(props){
    super(props);
  }

  render(){
    var enable = false;
    var space = true;
    return (
        <Row>
          <Col md="4">
          </Col>
          <Col md="4">
            <ButtonGroup>
              {enable && <Button color="secondary" onClick={this.props.onSetSidebarOpen}> <span className="float-right"><i className="icon-menu"></i></span></Button>}
              <Button color="primary" onClick={() => this.props.onRadioBtnClick(1)} active={this.props.rSelected === 1}>Control</Button>
              {space && <Col md="2"/>}
              <Button color="primary" onClick={() => this.props.onRadioBtnClick(2)} active={this.props.rSelected === 2}>Comparison</Button>
              {space && <Col md="2"/>}
              <Button color="primary" onClick={() => this.props.onRadioBtnClick(3)} active={this.props.rSelected === 3}>Analytics</Button>
            </ButtonGroup>
          </Col>
          <Col md="4">
          </Col>
        </Row>
    )
  }

}

export default ControlMenu;
