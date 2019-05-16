const mongoose = require("../DB/connection");


const muralSchema = mongoose.Schema({
  //object that defines the type of values for each key
  location: String,
  artist: String,
  installation: String,
  Date: Object
});
//creating an API that will take the "mural" collection in mongodb
let MuralCollection = mongoose.model("mural", muralSchema);

// Fuction to get all Murals
function getAllMurals() {
    //using mongoose to get all muralss
    return MuralCollection.find();
}

// Function to create new Mural
function createNewMurals(newMuralData){
    return MuralCollection.create(newMuralData);
}

// Function to get Mural by Id
function getMuralById(muralId) {
    return MuralCollection.findById(MuralId);
}

// Function to delete team by Id
function deleteMuralById(muralId) {
    return MuralCollection.deleteOne({ _id: muralId });
}



// calls all established functions to be exported
module.exports = {
    getAllMurals,
    createNewMurals,
    getMuralById,
    deleteMuralById,
   
};

  
 


