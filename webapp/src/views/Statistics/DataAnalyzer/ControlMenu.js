import React, {Component} from 'react';
import {Card,ButtonGroup,Container,Button, Col,Row} from 'reactstrap';


class ControlMenu extends Component{

  constructor(props){
    super(props);
  }

  render(){
    var enable = false;
    var space = false;
    return (
          <Row>
            {enable && <Button color="secondary" onClick={this.props.onSetSidebarOpen}> <span className="float-right"><i className="icon-menu"></i></span></Button>}
            <Col md="4">
              <Button primary color="primary" onClick={() => this.props.onRadioBtnClick(1)} active={this.props.rSelected === 1} block>Control</Button>
            </Col>
            <Col md="4">
              <Button primary color="primary" onClick={() => this.props.onRadioBtnClick(2)} active={this.props.rSelected === 2} block>Comparison</Button>
            </Col>
            <Col md="4">
              <Button primary color="primary" onClick={() => this.props.onRadioBtnClick(3)} active={this.props.rSelected === 3} block>Analytics</Button>
            </Col>
          </Row>
    )
  }

}

export default ControlMenu;
