const mural = require("../models/muralApi");

const muralController = {
   
    //= =====================
    // NEW
    //= =====================
    // Create a function that renders the new form
    new: function (req, res) {
        res.send("murals/new");
    },
    //= =====================
    // SHOW
    //= =====================
    // Create a function that renders a single Users show page
    show: function (req, res) {
        Mural.findById(req.params.mid).then(mural => {
            console.log(mural)
            res.send("murals/show", { mural});
        });
    },
    //= =====================
    // CREATE
    //= =====================
    // Create a function that creates a new mural form
    // and upon success redirects back to the index page "/"
    create: function (req, res) {
        console.log(req);
        mural.create(req.body)
        .then(mural => {
            res.redirect("/murals/" + murals._id);
    })},
 

  
//= ====================
// DELETE
//= ====================
//  Create a function that deletes the form and
//  redirects back to index page "/"
     delete: function (req, res) {
         console.log(req)
     mural.findByIdAndDelete(req.params.id).then(() => {
         res.redirect("/murals");
    });
},
}


//= =====================
// EXPORTS
//= =====================
// export the controller with module.exports
module.exports = muralController;
