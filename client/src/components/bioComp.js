import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Bios extends Component {
  state = {
    Bios: [],
    newBio: {
      Name: "",
      Location: ""
    },
    isBiosFormDisplayed: false
  };

  getAllBios = () => {
    axios.get("/bio/:id").then(res => {
      console.log(res.data);
      this.setState({ bios: res.data });
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
  handleChange = e => {
    const cloneNewBios = { ...this.state.newBio };
    cloneNewBios[e.target.name] = e.target.value;
    console.log(cloneNewBios);
    this.setState({ newBio: cloneNewBios });
  };

  createBio = e => {
    e.preventDefault();
    axios.post("/bio/:id", this.state.newBio);
    this.getAllBios();
  };

  deleteBio = muralId => {
    axios.delete(`/bio/${muralId}`);
    this.getAllBios();
  };

  render() {
    return (
      <div>
          <Link to={`/`}>HOME</Link>
        <h1>TROVA</h1>
        <h2>BIO PAGE</h2>
        {this.state.Bios.map(bios => {
          return (
            <div>
              {Bios.Name}
              <button
                onClick={() => {
                  this.deleteBio(Bios._id);
                }}
              >
                X
              </button>
            </div>
          );
        })}

        {
          <form onSubmit={this.createBio_id}>
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
              <label htmlFor="Location">Location</label>
              <textarea
                id="Location"
                type="text"
                name="Location"
                onChange={this.handleChange}
                value={this.state.newBio.Location}
              />
            </div>
            <button>Update Bio</button>
          </form>
        }
      </div>
    );
  }
}

export default Bios;
