import React,{Component} from 'react';
import { CardHeader, Card, CardBlock} from 'reactstrap';



class TimePointsPanel extends Component{
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
