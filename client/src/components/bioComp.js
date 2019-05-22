import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../images/beltline1.jpg";
import Murals from "./Murals";
import { SocialIcon } from 'react-social-icons';
import posed from "react-pose";


// STYLING COMPONENTS
/////////////////////////////////
const List = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 2 }
  });
const Title2 = styled(List)`
text-align: center;
color:black;
/* position: fixed; Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  bottom: 34;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  /* overflow: auto; Enable scroll if needed */
  padding-top: 50px;
`
const Title3 = styled.h6`
text-align: center;
color: black;
`
const Title4 = styled.h6`
text-align: center;
color:black;
`

const Title = styled.h1`
  color: red;
  text-align: center;
  font-size: 70px;
  text-decoration: underline;
  box-shadow: 0px 0px 80px white;
  /* margin-left:200px; */

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
  border: solid black;
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
const Content4 = styled.section`
text-align: center;
background-color: teal;
`
const Content5 = posed.div({
idle: { scale: 1 },
hovered: { scale: 2 }
});
const Content6 = styled(Content5)`
text-align: center;
background-color: teal;
height: 50px;
`
const Wrapper2 = styled.div`
text-align: center;
background-color: black;
color: white;
`
const Paragraph = styled.section`
text-align: center;
font-size: 24px;
`
// REACT CODE
///////////////////////////

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
        <Content4> 
         <SocialIcon url="https://www.instagram.com/questatl/" />
        <SocialIcon url="https://twitter.com/BrandenWhite19" />
        <SocialIcon url="https://www.facebook.com/Quest-Atl-559686434556995/?modal=admin_todo_tour" />
        </Content4>
          <Title> Quest Atl</Title>
        <Content> 
          <Wrapper> 
            <Title2>*GregMike</Title2>
        <Title1>MAP PAGE</Title1>
        <Title3>*RRL</Title3>
        <Title4>*ChrisVeal</Title4>
        </Wrapper>
        </Content>
        {this.state.Bios.map(Bios => {
          return (
            <Content2> 
            <div>
            {/* {Bios._id} */}
            {Bios.Name}
            {Bios.Description}
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
        <Wrapper2> 
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
        </Wrapper2>
        <Paragraph>If there is any information regarding an artist and their work that needs updating,<br></br> please use forms above to submit that information. Thanks</Paragraph>
        <Content6
          pose={this.state.hovering ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
        >
        <Link to={`/`}>HOME</Link>
        </Content6>
      </div>
        
    );
  }
}

export default Bios;
