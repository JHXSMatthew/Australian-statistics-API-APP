import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {CategorySelector,AreaSelector} from './DataFetcher.js';
import {CardFooter, Button,Input,Form,FormGroup,Label,Card,CardBlock,CardHeader} from 'reactstrap';

class AddRelation extends Component{
  constructor(props){
    super(props);
    this.state = {
      area: null,
      category: [],
      company: {name:null , instrumentId:null}
    }
    this.setArea = this.setArea.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.add = this.add.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateID = this.updateID.bind(this);
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

  add(e){
    var that = this;
    var url = 'http://45.76.114.158/api/app/category/set'
    fetch( url,{
      method: 'POST',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        area: this.state.area,
        category: this.state.category,
        company: this.state.company
      }),
    })
    .then(function(response) {
      if (response.status >= 400) {
        alert("Our data source is down, please wait for a while and we'll fix it asap.")
        return;
      }
      return response.json().then(function (json) {
        //TODO: deal with empty data
        alert("New category relation added!");
        that.setArea(that.state.area);
      })

    });
  }

  updateName(event){
    var v = this.state.company;
    v.name = event.target.value;
    this.setState({company: v});
  }

  updateID(event){
    var v = this.state.company;
    v.instrumentId = event.target.value;
    this.setState({company: v});
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
              <Input placeholder="company name" onChange={this.updateName}/>
              <Input placeholder="company id" onChange={this.updateID}/>
            </FormGroup>
          </Form>
        </CardBlock>
        <CardFooter>
          <Button color="primary" size="sm" onClick={this.add} disabled={this.state.category && this.state.category.length > 0 && this.state.company && this.state.company.instrumentId &&this.state.company.name   ? false : true}><i className="icon-arrow-up-circle" ></i> Add</Button>
        </CardFooter>
      </Card>

    )
  }
}



export default AddRelation;
