import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Murals extends Component {
  state = {
    murals: [],
    newMural: {
      location: "",
      artist: "",
      Image: ""
      
    },
    isMuralsFormDisplayed: false
  }

getAllMurals=()=>{
    axios.get('/mural').then(res => {
        console.log(res.data)
        this.setState({murals: res.data})
    })
}
componentDidMount = () => {
   this.getAllMurals()
  }
  toggleMuralsForm = () => {
    this.setState((state, props) => {
        return ({isMuralsFormDisplayed: !state.isMuralsFormDisplayed})
    })
}
handleChange = (e) => {
    const cloneNewMurals = {...this.state.newMural}
    cloneNewMurals[e.target.name] = e.target.value
    console.log(cloneNewMurals)
    this.setState({newMural: cloneNewMurals})
  }
//   createMural = e => {
//       e.preventDefault();
//       axios
//       .post("/murals", {
//           name: this.state.newMural.name,
//           description: this.state.newMural.description   
//   })
//   .then(res => {
//       const muralList = [...this.state.mural];
//       muralList.unshift(res.data);
//       this.setState({
//           newMural: {
//               name: "",
//               description: ""
//           },
//           mural: muralList
//         });
createMural = (e) => {
    e.preventDefault()
    axios.post('/mural', this.state.newMural)
    this.getAllMurals()
}

  deleteMural = (muralId)=> {

      axios.delete(`/mural/${muralId}`)
      this.getAllMurals()
//       .then(res =>{
//           const muralClone = this.state.murals.filter(mural => mural._id !== muralId)
//           this.setState({murals: muralClone})
//   });
};

  render() {
    return (
        <div>
        <h1>TROVA</h1>
        {
           this.state.murals.map(murals => {
                return (
                    <div>

                    {/* //  key={murals._id}> */}
                    {/* <button onClick={this.toggleMuralForm}>+ New Mural</button> */}
                        {/* <Link to={`/${murals.description}`}>{murals.description}</Link> */}
                            {murals.location}
                        {murals.artist}
                        {murals.Image}
                        <button onClick={()=>{this.deleteMural(murals._id)}}>X</button>
                    </div>
                );
             })}

{
    // this.state.isMuralFormDisplayed
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
        // : null
     }
    </div>
);
}
}
                
    
        


export default Murals;
