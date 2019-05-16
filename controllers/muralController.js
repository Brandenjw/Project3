const Mural = require('../models/muralApi.js')

// MODEL 1

const muralController = {
    index: async (req, res) => {
        try {
            const Mural = await Mural.find({})
            res.json(Mural)
        } catch (err) {
            console.log(err)
        }
    },
    // show: async (req, res) => {
    //     try {
    //         const MuralId = req.params.id
    //         const Mural = await Mural.findById(MuralId)
    //         res.json(Mural)
    //     } catch (err) {
    //         console.log(err)
    //         res.json(err)
    //     }
    // },
    create: async (req, res) => {
        try {
          const newMural = req.body
          const savedMural = await Mural.create(newMural)
        //   res.json(savedMural)
        res.send(200)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    },
    // update: async (req, res) => {
    //     try {
    //       const MuralId = req.params.id
    //       const updatedMural = req.body
    //       const savedMural = await Mural.findByIdAndUpdate(MuralId, updatedMural, {new: true})
    //       res.json(savedMural)
    //     } catch (err) {
    //       console.log(err)
    //       res.status(500).json(err)
    //     }
    // },
    delete: async (req, res) => {
        console.log('DELETE')
        try {
          const MuralId = req.params.id
          const deletedMural = await Mural.findByIdAndRemove(MuralId)
          res.json(deletedMural)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    }
}

module.exports = muralController