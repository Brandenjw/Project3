import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Murals from './components/Murals';
import Bios from './components/bioComp';



class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Murals}/>
            <Route exact path="/bio/:id" component={Bios}/>
            {/* <Route path="/:id" component={Mural}/>
            <Route path="/bio/:id" component={Bio}/> */}
            
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
