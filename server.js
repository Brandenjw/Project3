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

app.get('/mural', (req, res) => {
    muralApi.getAllMurals()
      .then(mural => {
        res.send(mural);
      });
  });
  

// Posting a new mural
app.post('/mural', (req, res) => {
    muralApi.createNewMurals(req.body)
        .then(() => {
            res.send(mural);
        });
});

// Deleting a mural
app.delete('/mural/:muralId', (req, res) => {
    muralApi.deleteMuralById(req.params.muralId)
        .then(() => {
            res.send(mural);
        });
});
//may not be working




// BIO MODEL//

// Posting a new Bio (img)
app.post('/bio', (req, res) => {
    bioApi.createNewBio(req.body)
        .then(() => {
            res.send(bio);
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
                    res.send(bio/bios, { bio, artist });
                });
        });
});

// Updating an Bio
app.put('/bio/:bioId', (req, res) => {
    bioApi.updateBioById(req.params.bioId, req.body)
        .then(() => {
            res.send(bio);
        });
});
// Deleting a Bio Image
app.delete('/bio/:bioId', (req, res) => {
    bioApi.deleteBioById(req.params.bioId)
        .then(() => {
            res.send(bio);
        });
});
//may not be working

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log('App is up and running on port ' + PORT)
})