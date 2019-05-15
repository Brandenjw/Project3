const mongoose = require("../DB/connection");


const artistSchema = mongoose.Schema({
  //object that defines the type of values for each key
  comment: String
});

const artistController = {
  
  index: function(req, res) {
    user.getUsers().then(users => {
      res.render("user/index", { users });
    });
  },
  
  // NEW
  
  // Create a function that renders the new img
  new: function(req, res) {
    res.render("user/new");
  },
  //= =====================
  // SHOW
  //= =====================
  // Create a function that renders a single Users show page
  show: function(req, res) {
    User.findById(req.params.uid).then(user => {
      console.log(user);
      res.render("user/show", { user });
    });
  },
  //= =====================
  // CREATE
  //= =====================
  // Create a function that creates a new user
  // and upon success redirects back to the index page "/"
  create: function(req, res) {
    console.log(req);
    User.create(req.body).then(user => {
      res.redirect("/user/" + user._id);
    });
  },
  //= =====================
  // UPDATE
  //= =====================
  // Create a function that updates the User and
  // redirects back to the SHOW PAGE (not index)
  update: function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body).then(() => {
      res.redirect(`/user/${req.params.id}`);
    });
  },

  //= =====================
  // DELETE
  //= =====================
  //  Create a function that deletes the User and
  //  redirects back to index page "/"
  delete: function(req, res) {
    console.log(req);
    user.findByIdAndDelete(req.params.id).then(() => {
      res.redirect("/");
    });
  }
};

//= =====================
// EXPORTS
//= =====================
// export the controller with module.exports
module.exports = userController;

module.exports = mongoose.model("", muralSchema);
