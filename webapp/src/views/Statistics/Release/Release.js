import React, { Component } from 'react';

class Release extends Component {

  constructor() {
     super();
     this.state = null;
     var that = this;
     //TODO: note: I'v denied the permission to fetch on local machine. if you wanna fetch this from local machine, UNCOMMENT the proxyURL part.
     //var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
     var url = 'http://45.76.114.158/data/release.json'
     fetch(/*proxyUrl +*/ url)
     .then(function(response) {
       if (response.status >= 400) {
         throw new Error("Bad response from server");
       }
       return response.json().then(function(json) {
         that.setState(
           {
             data: json
           }
         );
       });
     });
   }

  render() {
    var cards = [];
    if(this.state && this.state.data){
      for(var i = 0; i < this.state.data.length ; i ++){
        cards.push(getCard(this.state.data[i]));
      }

    }else{
      cards = null;
    }



    return (
      <div className="animated fadeIn">
        <div className="row">
            {cards}
        </div>
      </div>
    )
  }


  /*
    constructor(){
      super();
      this.state = {
        data: null
      };
      var that = this;
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
      var url = 'http://45.76.114.158/data/release.html'
      fetch(proxyUrl + url)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json().then(function(text) {
          that.setState({data: text});
        });
      });
    }


    render() {
      return(
        <div className="animated fadeIn">
          <div className="row">
              <div dangerouslySetInnerHTML={{__html: this.state.data}}></div>
          </div>
        </div>
      )
    }
  */

}


function getCard(cardRep){
  return <div key={cardRep.title} className="col-sm-6 col-md-4">
            <div className="card">
            {getHeader(cardRep.title,cardRep.date)}
            <div className="card-block">
              {getText(cardRep.contenet)}
              <p> </p>
              Bug Fixes
              {getDot(cardRep.fix)}
              New Features
              {getDot(cardRep.new)}
            </div>
          </div>
        </div>
}

function getHeader(title,date){
  return <div className="card-header"> {title}  <small className="text-muted">{forceHTML(date)}</small> </div>;
}

function getText(t){
  return  t.map((a,index) => <span key={index}> <p>{forceHTML(a)}</p> </span>);
}

function getDot(t){
  return <ul> {t.map((b,index) => <li key={index} > {forceHTML(b)}</li>)} </ul>;
}

function forceHTML(t){
  return <div dangerouslySetInnerHTML={{__html: t}} />
}




export default Release;
