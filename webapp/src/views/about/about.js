import React, { Component } from 'react';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
            <h2 class="blog-post-title">TeamRocket</h2>
            <p class="blog-post-meta"> Team role</p>

            <p class="lead">Project Manager: Jacqueline </p>
            <p>
                Jacqueline will be overseeing all operations, ensuring that all team members are keeping up with
                assigned deadlines. On Trello, Jacqueline will be converting all tasks assigned during meetings into
                tasks to complete at a given deadline. Jacqueline will also be responsible for managing and
                directing weekly physical and online meetings.
            </p>

            <p class="lead">Product Owner: Alva</p>
            <p>
                Alva will be closely monitoring all developments of the software and future additions to the
                software product, ensuring that it meets all use cases identified with the given customer
                specification. Furthermore, Alva will be responsible for all communications to the client, and
                relaying these to the team. </p>

            <p class="lead">Lead Developer: Matthew</p>
            <p>
                Matthew will be responsible with overseeing that all development teams write code that completely
                integrates with each other - essentially, responsible for a functional software architecture.
                Matthew is additionally responsible for bringing forth any known software issues and bugs up to the
                team during meetings, and assigning each issue a severity level, or priority, to be fixed.
            </p>

            <p class="lead">Quality Assurance: Mathew</p>
            <p>
                Mathew is responsible for writing the test code that completely and functionally tests each major
                segment of code within the project. Mathew will be relaying any incompatibilities and bugs caused by
                future code to the team during meetings, and will be working closely with Matthew to ensure that
                additional functions coded in the project will not interfere with completed functions.
            </p>

            <p class="lead">Scribe: Suvercha</p>
            <p>
                Suvercha is responsible for writing up all notes during the online and physical weekly meetings, and
                relaying them to Jacqueline for processing.
            </p>
      </div>
    )
  }
}

export default Dashboard;
