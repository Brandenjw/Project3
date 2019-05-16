const mongoose = require("../DB/connection");


const imageSchema = mongoose.Schema({
  //object that defines the type of values for each key
  image: String
  
});
//creating an API that will take the "Image" collection in mongodb
let ImageCollection = mongoose.model("images", imageSchema);

// Fuction to get all Images
function getAllImages() {
    //using mongoose to get all Images
    return ImageCollection.find();
}

// Function to create new image (per artist)
function createNewImage(newImageData){
    return ImageCollection.create(newImageData);
}

// Function to get Image by Id
function getImageById(imageId) {
    return ImageCollection.findById(imageId);
}

// Function to update Image
function updateImageById(imageId, image) {
    return ImageCollection.updateOne({ _id: imageId }, image);
    
}

// Function to delete image by Id
function deleteImageById(imageId) {
    return ImageCollection.deleteOne({ _id: imageId });
}



// calls all established functions to be exported
module.exports = {
    getAllImages,
    createNewImage,
    getImageById,
    updateImageById,
    deleteImageById,
   
};


