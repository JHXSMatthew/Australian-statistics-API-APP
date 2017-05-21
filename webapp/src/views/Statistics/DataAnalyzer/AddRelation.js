import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {CategorySelector,AreaSelector} from './DataFetcher.js';
import {CardFooter, Button,Input,Form,FormGroup,Label,Card,CardBlock,CardHeader} from 'reactstrap';

class AddRelation extends Component{
  constructor(props){
    super(props);
    this.state = {
      area: null,
      category: []
    }
    this.setArea = this.setArea.bind(this);
    this.setCategory = this.setCategory.bind(this);
  }

  setArea(a){
    this.setState({
      area: a,
      category: []
    })
  }

  setCategory(a){
    this.setState({
      category: a
    })
  }


  render(){
    return(
      <Card>
        <CardHeader>
          <strong>Add company to categories</strong>
        </CardHeader>
        <CardBlock>
          <Form>
            <FormGroup>
              <Label>Area</Label>
              <AreaSelector setArea={this.setArea}/>
            </FormGroup>
            <FormGroup>
              <Label>Category</Label>
              <CategorySelector setCategory={this.setCategory} area={this.state.area} category={this.state.category}/>
            </FormGroup>
            <FormGroup>
              <Label>Company</Label>
              <Input placeholder="company name"/>
              <Input placeholder="company id"/>
            </FormGroup>
          </Form>
        </CardBlock>
        <CardFooter>
          <Button color="primary" size="sm"><i className="icon-arrow-up-circle" ></i> Add</Button>
        </CardFooter>
      </Card>

    )
  }
}



export default AddRelation;
