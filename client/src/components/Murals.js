import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../images/Beltline-3.jpg";

const Title = styled.h1`
  color: red;
  text-align: center;
  font-size: 70px;
  text-decoration: underline;
`;
const Title1 = styled.h1`
  color: white;
  text-align: center;
  font-size: 56px;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: clear;
`;
const Content = styled.div`
    /* border: 5px solid #000; */
    background-image: url(${img});
    width: 900px;
    height: 600px;
    background-repeat:no-repeat;
    padding-right:90px;
    margin-left:90px;
`;
const Content1 = styled.section`
background-color: grey;
text-align:center;
`

class Murals extends Component {
  state = {
    murals: [],
    newMural: {
      location: "",
      artist: "",
      Image: ""
    },
    isMuralsFormDisplayed: false
  };

  getAllMurals = () => {
    axios.get("/mural").then(res => {
      console.log(res.data);
      this.setState({ murals: res.data });
    });
  };
  componentDidMount = () => {
    this.getAllMurals();
  };
  toggleMuralsForm = () => {
    this.setState((state, props) => {
      return { isMuralsFormDisplayed: !state.isMuralsFormDisplayed };
    });
  };
  handleChange = e => {
    const cloneNewMurals = { ...this.state.newMural };
    cloneNewMurals[e.target.name] = e.target.value;
    console.log(cloneNewMurals);
    this.setState({ newMural: cloneNewMurals });
  };

  createMural = e => {
    e.preventDefault();
    axios.post("/mural", this.state.newMural);
    this.getAllMurals();
  };

  deleteMural = muralId => {
    axios.delete(`/mural/${muralId}`);
    this.getAllMurals();
  };

  render() {
    return (
      <div>
        <Content> 
        <Wrapper>
          <Title> Quest Atl</Title>
          <Title1>An App to find your favorite Beltline Murals</Title1>
        </Wrapper>
        
            </Content>

        {this.state.murals.map(murals => {
          return (
            <div>
            {murals.location}
              <br />
              <Link to={`/bio/${murals._id}`}>{murals.artist}</Link>

              <br />
              {murals.Image}
              <button
                onClick={() => {
                  this.deleteMural(murals._id);
                }}
              >
                X
              </button>
            </div>
          );
        })}

        {
          // this.state.isMuralFormDisplayed
          <Content1>  
          <form onSubmit={this.createMural}>
            <div>
              <label htmlFor="artist">Artist</label>
              <input
                id="artist"
                type="text"
                name="artist"
                location=""
                onChange={this.handleChange}
                value={this.state.newMural.artist}
              />
            </div>
            <div>
              <label htmlFor="location"> Location</label>
              <textarea
                id="location"
                type="text"
                name="location"
                onChange={this.handleChange}
                value={this.state.newMural.location}
              />
            </div>
            <div>
              <label htmlFor="Image">Image</label>
              <textarea
                id="Image"
                type="image"
                name="Image"
                onChange={this.handleChange}
                value={this.state.newMural.Image}
              />
            </div>
            <button>New Mural</button>
          </form>
          </Content1>
        }
      </div>
    );
  }
}

export default Murals;
