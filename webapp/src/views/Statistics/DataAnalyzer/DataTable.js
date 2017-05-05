import React, {Component} from 'react';
import { PopoverTitle, PopoverContent,Popover,Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReactTable from 'react-table';
import CopyToClipboard from 'react-copy-to-clipboard';



class DataTable extends Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.state ={
      rawShowing: false,
      popoverOpen: false
    }
  }

  toggle() {
    this.setState({
      rawShowing: !this.state.rawShowing
    });
  }

  toggle2() {
  this.setState({
    popoverOpen: !this.state.popoverOpen
  });
}

  render() {
    var data = this.props.data;
    const categoryValue = [{
      header: 'Category',
      accessor: 'Category' // String-based value accessors!
    }, {
      header: 'Average',
      accessor: 'average',
    }]

    const regionalData = [{
      header: 'State',
      accessor: 'State' // String-based value accessors!
    }, {
      header: 'Average',
      accessor: 'average',
    }]

    const Datedata = [{
      header: 'Date',
      accessor: 'Date' // String-based value accessors!
    }, {
      header: 'Value',
      accessor: 'Value',
    }]
    var unit = null;
    if(this.props.dataType === "Export"){
      unit = "($ thousands)"
    }else if(this.props.dataType === "Retail"){
      unit = "($ millions)";
    }

    return(
      <div>
        <div className="card-header">
          <strong>Data Set {unit} <span className="float-right"><i className="icon-question" id="Popover2" onClick={this.toggle2}></i></span></strong>
        </div>
        <Popover placement="left" isOpen={this.state.popoverOpen} target="Popover2" toggle={this.toggle2}>
         <PopoverTitle>Data Set</PopoverTitle>
         <PopoverContent>This table will initially list categories and display their corresponding average values fetched by the data fetcher. The table can expand the data set with the arrow on the left of the rows to show the averages of the value per state requested. it can further expand to display individual values for the months requested. </PopoverContent>
       </Popover>
        <div className="card-block">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <ReactTable
                data={data}
                columns={categoryValue}
                defaultPageSize={5}
                noDataText='Use Data Fetcher to fetch data.'
                pageSize={(data &&  data.length) ? data.length : 7}
                SubComponent={(row) => {
                  return(
                    <ReactTable
                      data={row.row.RegionalData}
                      columns={regionalData}
                      defaultPageSize={10}
                      pageSize={row.row.RegionalData.length}
                      showPagination={false}
                      SubComponent={(row) => {
                        return(
                          <ReactTable
                            data={row.row.Data}
                            pageSize={row.row.Data.length}
                            columns={Datedata}
                            defaultPageSize={10}
                            showPagination={false}
                          />
                        )
                      }}
                    />
                  )
                }}
              />
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-sm btn-primary" onClick={this.toggle} disabled={(this.props.dataType) == null? true : false} ><i className="fa fa-dot-circle-o" ></i> Raw</button>
        </div>
        <Modal isOpen={this.state.rawShowing} toggle={this.toggle} className={'modal-lg '+ this.props.className}>
          <ModalHeader toggle={this.toggle}>JSON</ModalHeader>
          <ModalBody>
            Click Copy to copy raw JSON into your clipboard. Only support IE6 and modern browser.
          </ModalBody>
          <ModalFooter>
            <CopyToClipboard text={(this.props.data)?JSON.stringify(this.props.data,null,2):""}>
              <Button color="primary" onClick={this.toggle}>Copy</Button>
            </CopyToClipboard>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>



    )
  }

}

export default DataTable;
