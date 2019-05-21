import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Murals from './components/Murals';
import Bios from './components/bioComp';
import styled from "styled-components";

const Title = styled.h1`
color: black;
text-align: center;
font-size: 38px;
`



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
            <title>Mural Quest</title>
            
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
