import React,{Component} from 'react';
import { ListGroup,ListGroupItem,Label,FormGroup,Input,CardColumns,CardHeader, Card, CardText, CardBlock,Row, Col,Container} from 'reactstrap';



class TimePoint extends Component{
  constructor(props){
    super(props);
    this.state = {
      time: this.props.time,
      category: this.props.category,
      up: 5,
      low: 5
    };
    this.setUp = this.setUp.bind(this);
    this.setLow = this.setLow.bind(this);
  }

  setUp(event){
    var v = event.target.value;
    this.setState({
      up: {v}
    });
  }

  setLow(event){
    var v = event.target.value;
    this.setState({
      low: {v}
    });
  }

  render(){
      return (
        <Card>
          <CardHeader>
            Time Point at {this.state.time} for {this.props.category}
          </CardHeader>

              <ListGroup>
                <ListGroupItem>
                  <Col>
                    <Label>Days Before</Label>
                    <Input type="number" defaultValue="5" size="sm" placeholder="Days Before Time Point" onChange={this.setUp} />
                  </Col>
                  <Col>
                    <Label>Days After</Label>
                    <Input type="number" defaultValue="5" size="sm" placeholder="Days After Time Point" onChange={this.setLow} />
                  </Col>
                </ListGroupItem>

                <ListGroupItem>
                    COMPANY RETURN
                </ListGroupItem>
                <ListGroupItem>
                    NEWS
                </ListGroupItem>

              </ListGroup>
        </Card>
      )
  }


}

export default TimePoint;
