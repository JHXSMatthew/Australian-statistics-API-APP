import React, {Component} from 'react';
import {Card,ButtonGroup,Container,Button, Col,Row} from 'reactstrap';


class ControlMenu extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <Card>
        <Row>
          <ButtonGroup>
            <Button color="primary" onClick={() => this.props.onRadioBtnClick(1)} active={this.props.rSelected === 1}>Control</Button>
            <Button color="primary" onClick={() => this.props.onRadioBtnClick(2)} active={this.props.rSelected === 2}>Comparison</Button>
            <Button color="primary" onClick={() => this.props.onRadioBtnClick(3)} active={this.props.rSelected === 3}>Analytics</Button>
          </ButtonGroup>
        </Row>
      </Card>

    )

  }

}

export default ControlMenu;
