const mongoose = require("../DB/connection");


const bioSchema = mongoose.Schema({
  //object that defines the type of values for each key
  Name: String,
  Description: String,
  
  
});
//creating an API that will take the "Image" collection in mongodb
let BioCollection = mongoose.model("bios", bioSchema);

// Fuction to get all Bios
function getAllBios() {
    //using mongoose to get all Images
    return BioCollection.find();
}

// Function to create new Bio (per artist)
function createNewBio(newBioData){
    return BioCollection.create(newBioData);
}

// Function to get Bio by Id
function getBioById(bioId) {
    return BioCollection.findById(bioId);
}

// Function to update Bio
function updateBioById(bioId, bio) {
    return BioCollection.findByIdAndUpdate({ _id: bioId }, bio);
    
}

// Function to delete Bio by Id
function deleteBioById(bioId) {
    return BioCollection.deleteOne({ _id: bioId });
}



// calls all established functions to be exported
module.exports = {
    getAllBios,
    createNewBio,
    getBioById,
    updateBioById,
    deleteBioById,
   
};


