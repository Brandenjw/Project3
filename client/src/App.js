import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Murals from './components/Murals';


class App extends Component {
  render () {
  return (
  <div className="appContainer">
  <h1>Mural Map</h1>

  <Murals />
  </div>
    
  );
}
}

export default App;
