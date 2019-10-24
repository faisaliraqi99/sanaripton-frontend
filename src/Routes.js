import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/Home';
import Kanban from './components/Kanban';
import Stats from './components/Stats';
import About from './components/About';
import AuthPage from './components/Auth/AuthPage';

class Routes extends Component {
  kanbanUser = () => {
    return <Kanban />
  }
  stats = () => {
    return <Stats />
  }
  about = () => {
    return <About />
  }
  authPage = () => {
    return <AuthPage />
  }
  home = () => {
    return <Home />
  }
  render() {
    return (
      <Router>
        <Route path="/" exact component={this.home} />
        <Route path="/kanban" exact component={this.kanbanUser} />
        <Route path="/stats" exact component={this.stats} />
        <Route path="/about" exact component={this.about} />
        <Route path="/auth" exact component={this.authPage} />
      </Router>
    );
  }
}

export default Routes;