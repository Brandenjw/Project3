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

export default Murals;
