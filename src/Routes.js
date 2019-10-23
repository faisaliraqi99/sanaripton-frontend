import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Kanban from './components/Kanban';

class Routes extends Component {
  kanbanUser = () => {
    return <Kanban />
  }
  render() {
    return (
      <Router>
        <Route path="/" exact component={this.kanbanUser} />
      </Router>
    );
  }
}

export default Routes;