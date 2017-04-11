import React, { Component } from 'react';

class Documentation extends Component {
  render() {
     return (
       <div className="animated fadeIn">
         <div className="row">
         
           <div className="col-sm-6 col-md-4">
             <div className="card card-accent-primary">
               <div className="card-header">
                 Project Manager: Jacqueline
               </div>
               <div className="card-block">
                 Jacqueline will be overseeing all operations, ensuring that all team members are keeping up with
                 assigned deadlines. On Trello, Jacqueline will be converting all tasks assigned during meetings into
                 tasks to complete at a given deadline. Jacqueline will also be responsible for managing and
                 directing weekly physical and online meetings.
               </div>
             </div>
           </div>

           <div className="col-sm-6 col-md-4">
             <div className="card card-accent-primary">
               <div className="card-header">
                 Product Owner: Alva
               </div>
               <div className="card-block">
               Alva will be closely monitoring all developments of the software and future additions to the
               software product, ensuring that it meets all use cases identified with the given customer
               specification. Furthermore, Alva will be responsible for all communications to the client, and
               relaying these to the team.
               </div>
             </div>
           </div>

          <div className="col-sm-6 col-md-4">
             <div className="card card-accent-primary">
               <div className="card-header">
                 Lead Developer: Matthew
               </div>
               <div className="card-block">
                 Matthew will be responsible with overseeing that all development teams write code that completely
                 integrates with each other - essentially, responsible for a functional software architecture.
                 Matthew is additionally responsible for bringing forth any known software issues and bugs up to the
                 team during meetings, and assigning each issue a severity level, or priority, to be fixed.
               </div>
             </div>
           </div>

          <div className="col-sm-6 col-md-4">
             <div className="card card-accent-primary">
               <div className="card-header">
                 Scribe: Suvercha
               </div>
               <div className="card-block">
                 Suvercha is responsible for writing up all notes during the online and physical weekly meetings, and
                 relaying them to Jacqueline for processing.
               </div>
             </div>
           </div>

           <div className="col-sm-6 col-md-4">
             <div className="card card-accent-primary">
               <div className="card-header">
                 Quality Assurance: Mathew
               </div>
               <div className="card-block">
                 Mathew is responsible for writing the test code that completely and functionally tests each major
                 segment of code within the project. Mathew will be relaying any incompatibilities and bugs caused by
                 future code to the team during meetings, and will be working closely with Matthew to ensure that
                 additional functions coded in the project will not interfere with completed functions.
               </div>
             </div>
           </div>
          </div>
       </div>
     )
   }
}




export default Documentation;
