import React,{Component} from 'react';
import { ListGroup,ListGroupItem,Label,FormGroup,Input,CardColumns,CardHeader, Card, CardText, CardBlock,Row, Col,Container} from 'reactstrap';



class TimePointsPanel extends Component{
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
              {this.props.timePoints}
          </CardBlock>
        </Card>
      )

    }
}

export default TimePointsPanel;
