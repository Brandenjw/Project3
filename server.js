const express = require('express')
const logger = require('morgan')
const app = express()

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Linking CSS
app.use('/public', express.static("public"))

//calling all established functions in respective APIs
const muralApi = require('./models/muralApi.js');
const bioApi = require('./models/bioApi.js');

//homepage rendering
app.get('/', (req, res) => {
  res.send("Hello World")
})

//  MURAL MODEL
//////////////

app.get('/murals', (req, res) => {
    muralApi.getAllMurals()
      .then(murals => {
        res.send(murals);
      });
  });
  

// Posting a new mural
app.post('/,murals', (req, res) => {
    muralApi.createNewMurals(req.body)
        .then(() => {
            res.send("mural suggested");
        });
});

// Deleting a mural
app.delete('/murals/:muralId', (req, res) => {
    muralApi.deleteMuralById(req.params.muralsId)
        .then(() => {
            res.send("mural/deleted");
        });
});




// BIO MODEL//

// Posting a new Bio (img)
app.post('/bio', (req, res) => {
    bioApi.createNewBio(req.body)
        .then(() => {
            res.send("bio/created");
        });
});

// grab a single Bio (img)
app.get('/bio/:bioId', (req, res) => {
    //gets bio
    bioApi.getBioById(req.params.bioId)
        .then((bio) => {
            bioApi.getBioByTeamId(req.params.bioId)
                .then((artist) => {
                    console.log(bio)
                    console.log(artist)
                    res.send("bio/bios", { bio, artist });
                });
        });
});

// Updating an Bio
app.put('/bio/:bioId', (req, res) => {
    bioApi.updateBioById(req.params.bioId, req.body)
        .then(() => {
            res.send("/bio");
        });
});
// Deleting a Bio Image
app.delete('/bio/:bioId', (req, res) => {
    bioApi.deleteBioById(req.params.bioId)
        .then(() => {
            res.send("bio/deleted");
        });
});

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log('App is up and running on port ' + PORT)
})