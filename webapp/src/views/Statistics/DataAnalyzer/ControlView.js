import React,{Component} from 'react';
import {Container,Row,Col} from 'reactstrap';
import AddRelation from './AddRelation.js';
import DataFetcher from './DataFetcher.js';

class ControlView extends Component{

  constructor(props){
    super(props);
    this.state = {
      expert: false
    }
    this.toggleExpert = this.toggleExpert.bind(this);
  }

  toggleExpert(){
    this.setState({
      expert: !this.state.expert
    });
  }

  render(){
    return(
      <div style={{padding: 20}}>
        <Container>
          <Row>
             <Col md={this.state.expert ? "6" : "12"} >
              <DataFetcher expert={this.state.expert} toggleExpert={this.toggleExpert} addDataEntry={this.props.addDataEntry} />
            </Col>
            <Col md="6" xs="6" >
              {this.state.expert &&<AddRelation />}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }




}


export default ControlView;
