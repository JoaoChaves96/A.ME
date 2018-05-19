module.exports = (app) => {
    const adverts = require('../controllers/advertController.js');
  
    // Create a new Advert
    app.post('/advert', adverts.create);

    // Retrieve all Adverts
    app.get('/adverts', adverts.findAll);

    // Retrieve a single Advert with advertId
    app.get('/advert/:advertId', adverts.findOne);

    // Update a Advert with advertId
    app.put('/advert/:advertId', adverts.update);

    // Delete an Advert with advertId
    app.delete('/advert/:advertId', adverts.delete);

    //Get user adverts
    app.get('/advert/user/:userId',adverts.getUserAdverts);
}