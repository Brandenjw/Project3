const Mural = require('../models/Mural.js')
  
// using Promises
Mural.deleteMany().then(() => {
    const graff1 = new Mural({location: 'beltline', description: 'Brandon Sadler', Image: "https://i.imgur.com/wt9nYu3.jpg", date: "04/23/2012"})
    return graff1.save()
  }).then(() => {
    const graff2 = new Mural({location: 'ponce city market', description: 'Chris Veal', Image: "https://i.imgur.com/2YvgkF6.jpg", date: "09/12/2019"})
    return graff2.save()
  })





