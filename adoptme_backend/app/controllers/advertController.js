const Advert = require('../models/advertModel.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Advert body can not be empty"
        });
    }

    // Create an Advert
    const advert = new Advert({
        userId: req.body.userId,
        name: req.body.name,
        location: req.body.location,
        breed: req.body.breed,
        sex: req.body.sex,
        port: req.body.port,
        fur: req.body.fur,
        image: req.body.image,
        description: req.body.description
    });

    // Save Advert in the database
    advert.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Advert."
        });
    });
};

// Retrieve and return all adverts from the database.
exports.findAll = (req, res) => {
    Advert.find()
    .then(adverts => {
        res.send(adverts);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving adverts."
        });
    });
};

// Find a single advert with a advertId
exports.findOne = (req, res) => {
    Advert.findById(req.params.advertId)
    .then(advert => {
        if(!advert) {
            return res.status(404).send({
                message: "Advert not found with id " + req.params.advertId
            });            
        }
        res.send(advert);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Advert not found with id " + req.params.advertId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving advert with id " + req.params.advertId
        });
    });
};

// Update an Advert identified by the advertId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Advert content can not be empty"
        });
    }

    // Find Advert and update it with the request body
    Advert.findByIdAndUpdate(req.params.advertId, {
        userId: req.body.userId,
        name: req.body.name,
        description: req.body.description
    }, {new: true})
    .then(advert => {
        if(!advert) {
            return res.status(404).send({
                message: "Advert not found with id " + req.params.advertId
            });
        }
        res.send(advert);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Advert not found with id " + req.params.advertId
            });                
        }
        return res.status(500).send({
            message: "Error updating advert with id " + req.params.advertId
        });
    });
};

// Delete an advert with the specified advertId in the request
exports.delete = (req, res) => {
    Advert.findByIdAndRemove(req.params.advertId)
    .then(advert => {
        if(!advert) {
            return res.status(404).send({
                message: "Advert not found with id " + req.params.advertId
            });
        }
        res.send({message: "Advert deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Advert not found with id " + req.params.advertId
            });                
        }
        return res.status(500).send({
            message: "Could not delete advert with id " + req.params.advertId
        });
    });
};

//Retrieve all adverts of a user
exports.getUserAdverts = (req, res) => {
    Advert.find({userId: req.params.userId})
    .then(adverts => {
        res.send(adverts);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving adverts."
        });
    });
};
