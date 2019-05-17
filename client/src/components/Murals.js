import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Murals extends Component {
  state = {
    murals: [],
    newMural: {
      location: "",
      date: ""
    },
    isMuralsFormDisplayed: false
  };
}
componentDidMount = () => {
    axios.get('/mural').then(res => {
        this.setState({murals: res.data})
    })
  }
  toggleMuralsForm = () => {
    this.setState((state, props) => {
        return ({isMuralsFormDisplayed: !state.isMuralsFormDisplayed})
    })
}
handleChange = (e) => {
    const cloneNewMurals = {...this.state.newMurals}
    cloneNewMurals[e.target.name] = e.target.value
    this.setState({newMural: cloneNewMurals})
  }

export default Murals;
