import React, {Component} from 'react';
import {Media,Container,ListGroupItem,ListGroup,Col,Row,Card} from 'reactstrap';
import { timeParse } from "d3-time-format";
import { scaleTime } from "d3-scale";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";

import {  ChartCanvas, Chart, series, scale, coordinates, tooltip,annotation, axes, indicator, helper } from "react-stockcharts";



var { CandlestickSeries, BarSeries,KagiSeries,MACDSeries  ,AreaSeries } = series;
var { discontinuousTimeScaleProvider } = scale;

var { CrossHairCursor, MouseCoordinateX, MouseCoordinateY } = coordinates;
var { OHLCTooltip,MACDTooltip  } = tooltip;

var { XAxis, YAxis } = axes;

var { fitWidth, TypeChooser } = helper;
var parseDate = timeParse("%Y-%m-%d");

var {  macd, ema, sma , kagi } = indicator;

var { Annotate, LabelAnnotation, Label } = annotation;



class StockTradingView extends Component {
  constructor(props){
    super(props);
    this.state= {
      company: {name:"Elders Ltd",instrumentId:".AX"},
      currentNews: "all",
      news: [],
      newsDate: []
    }
    this.fetch = this.fetch.bind(this);
    this.setNewsData = this.setNewsData.bind(this);
  }


  componentWillMount(){
    this.componentWillReceiveProps(this.props);
  }

  setNewsData(news){
    var data = this.state.data;
    for(var i = 0 ; i < news.length ; i ++){
      news[i].comDate =  new Date(parseDate(news[i].pubDate.split(" ")[0]).getTime());
      var lastDataIndex = 0;
      for(var j = 0 ; j < data.length ; j ++){
        if(data[j].date > news[i].comDate){
          break;
        }
        lastDataIndex = j;
      }
      data[lastDataIndex].news = true;
      data[lastDataIndex].newsData = news[i];

    }

    this.setState({
      news: news,
      data: data
    });
  }


  componentWillReceiveProps(nextProps){
    if(!nextProps.company){
      return;
    }
    this.fetch(nextProps.company);
  }

  fetch(company){
    var that = this;
    var url = 'http://45.76.114.158/api/app/stockData/get'
    fetch( url,{
      method: 'POST',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        instrumentID: company.instrumentId
      }),
    })
    .then(function(response) {
      if (response.status >= 400) {
        return;
      }
      return response.json().then(function (json) {
        for(var i = 0 ; i < json.length ; i ++){
          json[i].date  = new Date(parseDate(json[i].date).getTime());
        }
        that.setState({
          data: json,
          company: company
        });
      });
    });
  }

  render(){
    return(
      <Card>
        <Container fluid={true} >
          <Row>
             <a href={"https://www.google.com.au/#q="+ this.state.company.name}>
               <h2>
                 {this.state.company.name} - {this.state.company.instrumentId}
               </h2>
             </a>
          </Row>
          <Row>
            <Col md="9" xs="9">
              <Card>
                  {this.state.data && <StockTradingGraph width={window.innerWidth * 0.7} news={this.state.news} data={this.state.data} type={"hybrid"} ratio={1}  />}
              </Card>
            </Col>
            <Col md="3" xs="3">
              <Card>
                <News setNewsData={this.setNewsData} current={this.state.company.instrumentId}/>
              </Card>
            </Col>
          </Row>
        </Container>
      </Card>
    );
  }
}

class StockTradingGraph extends Component{
  constructor(props){
    super(props);
  }

  render(){
    var { data, type, width, ratio } = this.props;
  		var { mouseMoveEvent, panEvent, zoomEvent } = this.props;
  		var { clamp } = this.props;
      var annotationProps = {
			fontFamily: "Glyphicons Halflings",
			fontSize: 20,
			fill: "#060F8F",
			opacity: 0.8,
			text: "\ue182",
			y: ({ yScale }) => yScale.range()[0],
			onClick: console.log.bind(console),
			tooltip: d => timeFormat("%B")(d.date),
			// onMouseOver: console.log.bind(console),
		};

		var macdCalculator = macd()
			.fast(12)
			.slow(26)
			.signal(9)
			.merge((d, c) => {d.macd = c;})
			.accessor(d => d.macd);


  		return (
  			<ChartCanvas ref={this.saveNode} height={700}
  					width={width}
  					ratio={ratio}
  					margin={{ left: 70, right: 70, top: 10, bottom: 30 }} type={type}
  					seriesName="MSFT"
  					data={data} calculator={[macdCalculator]}
  					mouseMoveEvent={mouseMoveEvent}
  					panEvent={panEvent}
  					zoomEvent={zoomEvent}
  					clamp={clamp}
  					xAccessor={d => d.date} xScaleProvider={discontinuousTimeScaleProvider}
  					xExtents={[new Date(2016, 5, 15), new Date(2017, 5, 15)]}>
  				<Chart id={1}
  						yExtents={[d => [d.high, d.low]]} height={530}>
  					<YAxis axisAt="right" orient="right" ticks={5} zoomEnabled={!zoomEvent} />

  					<MouseCoordinateY
  						at="right"
  						orient="right"
  						displayFormat={format(".2f")} />
  					<CandlestickSeries />

            <OHLCTooltip origin={[-40, 0]}/>
  				</Chart>
  				<Chart id={2}
  						yExtents={d => d.volume}
  						height={150} origin={(w, h) => [0, h - 300]}>
  					<YAxis axisAt="left" orient="left" ticks={5} tickFormat={format(".0s")} zoomEnabled={!zoomEvent} />


  					<MouseCoordinateY
  						at="left"
  						orient="left"
  						displayFormat={format(".4s")} />

  					<BarSeries yAccessor={d => d.volume} fill={(d) => d.close > d.open ? "#6BA583" : "#FF0000"} />
  				</Chart>
          <Chart id={3} height={150}
						yExtents={macdCalculator.accessor()}
						origin={(w, h) => [0, h-150]} padding={{ top: 10, bottom: 10 }}>
  					<XAxis axisAt="bottom" orient="bottom"/>
  					<YAxis axisAt="right" orient="right" ticks={2} />

  					<MouseCoordinateX
  						at="bottom"
  						orient="bottom"
  						displayFormat={timeFormat("%Y-%m-%d")} />
  					<MouseCoordinateY
  						at="right"
  						orient="right"
  						displayFormat={format(".2f")} />

  					<MACDSeries calculator={macdCalculator} />
  					<MACDTooltip origin={[-38, 15]} calculator={macdCalculator}/>
              <Annotate with={LabelAnnotation}
               when={d => {d.news}}
              usingProps={annotationProps} />
				  </Chart>
  				<CrossHairCursor />
  			</ChartCanvas>
    );
  }
}



class News extends Component{

  constructor(props){
    super(props);
    this.state = {
      table: []
    }

  }
  componentWillMount(){
    this.fetch(this.props.current);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.current === this.props.current){
      return;
    }
    this.setState({table: []});
    this.fetch(nextProps.current);
  }

  fetch(id){
    var that = this;
    var topics = null;
    var proxy = "https://api.rss2json.com/v1/api.json?api_key=avgsmuavpridvqg25b9tfq3yxmpvsihy7tevv0b5&rss_url=";
    var url = "http://finance.yahoo.com/rss/headline?s=" + id

    fetch( proxy + url,{
      method: 'GET',
    })
    .then(function(response) {
      if (response.status >= 400) {
        return;
      }
      return response.json().then(function (json) {
        json = json.items;
        var news = [];
        console.log(json);

        for(var i = 0 ; i < json.length ; i ++){
          news.push(
             <ListGroupItem>
              <Media key={json[i].link}>
               <Media body>
                 <Media heading>
                   {json[i].title}
                 </Media>
                   <div dangerouslySetInnerHTML={{__html: json[i].description.replace(/Read more/g, ".")}}></div>
               </Media>
               <Media right href={json[i].link}>
                 View
               </Media>
             </Media>
           </ListGroupItem>
          );
        }
        that.props.setNewsData(json);
        that.setState({
          table: news
        });
      })

    });
  }
  render(){
    return(<div><ListGroup>{this.state.table}</ListGroup></div>)
  }


}



export default StockTradingView;
