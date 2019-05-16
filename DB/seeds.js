const Map = require('../models/muralApi.js')
  
// using Promises
Map.deleteMany().then(() => {
    const graff1 = new Map({location: 'beltline', description: 'Brandon Sadler', installation: "graffiti art", date: "04/23/2012"})
    return graff1.save()
  }).then(() => {
    const graff2 = new Map({ocation: 'ponce city market', description: 'Chris Veal', installation: "graffiti art", date: "09/12/2019"})
    return graff2.save()
  })





