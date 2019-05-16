const Bio = require('../models/muralApi.js')

// MODEL 2

const bioController = {
    index: async (req, res) => {
        try {
            const Bio = await Bio.find({})
            res.json(Bio)
        } catch (err) {
            console.log(err)
        }
    },
    show: async (req, res) => {
        try {
            const BioId = req.params.id
            const Bio = await Bio.findById(BioId)
            res.json(Bio)
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    },
    create: async (req, res) => {
        try {
          const newBio = req.body
          const savedBio = await Bio.create(newBio)
          res.json(savedBio)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    },
    update: async (req, res) => {
        try {
          const BioId = req.params.id
          const updatedBio = req.body
          const savedBio = await Mural.findByIdAndUpdate(BioId, updatedBio, {new: true})
          res.json(savedBio)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    },
    delete: async (req, res) => {
        console.log('DELETE')
        try {
          const BioId = req.params.id
          const deletedBio = await Bio.findByIdAndRemove(BioId)
          res.json(deletedBio)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    }
}

module.exports = bioController
