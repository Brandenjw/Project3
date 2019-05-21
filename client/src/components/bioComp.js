import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../images/beltline1.jpg";
import Murals from "./Murals";

const Title = styled.h1`
  color: red;
  text-align: right;
  font-size: 70px;
  text-decoration: underline;
  margin-left:200px;

`;
const Title1 = styled.h1`
  color: black;
  text-align: right;
  font-size: 34px;
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
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  text-align:right;
  font-size: 35px;
`;
const Content1 = styled.section`
background-color: grey;
text-align:center;
`
const Content2 = styled.section`
background-color: black;
text-align:center;
color: white;
`
const Content3 = styled.section`
/* background-image: url("../") */
text-align:center;
color: white;
height:400px;
width: 100vw;
`

class Bios extends Component {
  state = {
    Bios: [],
    newBio: {
      Name: "",
      Description: ""
    },
    isBiosFormDisplayed: false
  };

  getAllBios = () => {
    axios.get("/bio").then(res => {
      console.log(res.data);
      this.setState({ Bios: res.data });
    });
  };
  componentDidMount = () => {
    this.getAllBios();
  };
  toggleBiosForm = () => {
    this.setState((state, props) => {
      return { isBiosFormDisplayed: !state.isBiosFormDisplayed };
    });
  };
  handleChange = (e) => {
    const cloneNewBios = { ...this.state.newBio };
    cloneNewBios[e.target.name] = e.target.value;
    console.log(cloneNewBios);
    this.setState({ newBio: cloneNewBios });
  };

  createBio = (e) => {
    console.log("running")
    e.preventDefault();
    axios.post("/bio", this.state.newBio);
    this.getAllBios();
  };

  deleteBio = muralId => {
    axios.delete(`/bio/${muralId}`);
    this.getAllBios();
  };

  render() {
    return (
      <div>
        <Content> 
          <Wrapper> 
          <Link to={`/`}>HOME</Link>
          <Title> Quest Atl</Title>
        <Title1>BIO PAGE</Title1>
        </Wrapper>
        </Content>
        {this.state.Bios.map(Bios => {
          return (
            <Content2> 
            <div>
            {Bios._id}
              <button
                onClick={() => {
                  this.deleteBio(Bios._id);
                }}
              >
                X
              </button>
            </div>
        </Content2>
          );
        })}

        {
          <form onSubmit={this.createBio}>
            <div>
              <label htmlFor="Name">Artist</label>
              <textarea
                id="Name"
                type="text"
                name="Name"
                onChange={this.handleChange}
                value={this.state.newBio.Name}
              />
            </div>

            <div>
              <label htmlFor="Description">Description</label>
              <textarea
                id="Description"
                type="text"
                name="Description"
                onChange={this.handleChange}
                value={this.state.newBio.Location}
              />
            </div>
            <button>Create Bio</button>
          </form>
        }
      </div>
    );
  }
}

export default Bios;
