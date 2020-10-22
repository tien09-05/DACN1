import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services,';
import Login from './components/Login';
import Error from './components/Error';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>

        <Route exact path="/" component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/services" component={Services}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/:string" component={Error}></Route>

      </Switch>
    </Router>
  );
}

export default App;
