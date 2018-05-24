module.exports = (app) => {
    const adverts = require('../controllers/advertController.js');
  
    // Create a new Advert
    app.post('/anuncio', adverts.create);

    // Retrieve all Adverts
    app.get('/anuncios', adverts.findAll);

    // Retrieve a single Advert with advertId
    app.get('/anuncio/:advertId', adverts.findOne);

    // Update a Advert with advertId
    app.put('/anuncio/:advertId', adverts.update);

    // Delete an Advert with advertId
    app.delete('/anuncio/:advertId', adverts.delete);

    //Get user adverts
    app.get('/anuncio/user/:userId',adverts.getUserAdverts);
}