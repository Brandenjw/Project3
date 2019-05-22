import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SocialIcon } from 'react-social-icons';
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
  background-image: url(${img});
  width: 900px;
  height: 600px;
  background-repeat: no-repeat;
  padding-right: 90px;
  margin-left: 90px;
`;
const Content1 = styled.section`
  background-color: grey;
  text-align: center;
  color: white;
`;
const Content2 = styled.section`
  background-color: black;
  text-align: center;
  color: white;
  height: 100px;
`;
const Content3 = styled.section`
  text-align: center;
  color: white;
  height: 400px;
  width: 100vw;
  background-color: black;
`;
const Content4 = styled.section`
text-align: center;
background-color: black;
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

  updateMural = (mural, e) => {
    // e.preventDefault()
    axios.put(`/mural/${mural}`, this.state.newMural).then(() => {
      this.setState({ isEditFormDisplayed: false });
      this.getAllMurals();
    });
  };

  deleteMural = muralId => {
    axios.delete(`/mural/${muralId}`);
    this.getAllMurals();
  };

  render() {
    return (
      <div>
        <Content4>
        <SocialIcon url="https://www.instagram.com/questatl/" />
        <SocialIcon url="https://twitter.com/BrandenWhite19" />
        <SocialIcon url="https://www.facebook.com/Quest-Atl-559686434556995/?modal=admin_todo_tour" />
        </Content4>
        <Content>
          <Wrapper>
            <Title> Quest Atl</Title>
            <Title1>An App to find your favorite Beltline Murals</Title1>
          </Wrapper>
        </Content>
        <Content3 />

        {this.state.murals.map(murals => {
          return (
            <Content2>
              <div>
                <Link to={`/bio/${murals._id}`}>{murals.artist}</Link>
                <br />

                {murals.location}
                <br />
                {murals.Image}
                <button
                  onClick={() => {
                    this.deleteMural(murals._id);
                  }}
                >
                  X
                </button>
                {/* {murals._id} */}
                <button
                  onClick={() => {
                    this.updateMural(murals._id);
                  }}
                >
                  Update
                </button>
              </div>
            </Content2>
          );
        })}

        {
          <Content1>
            <form onSubmit={this.createMural}>
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
