import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import Home from './Home/HomeContainer';
import Detail from './Detailt/Detail';


class App extends Component {
  render() {
    return (
      <Router className="container is-fluid">
        <section className="hero">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/detailt/:id" component={Detail} />
        </section>
      </Router>
    );
  }
}

export default App;
