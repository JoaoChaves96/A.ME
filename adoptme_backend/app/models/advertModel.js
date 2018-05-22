const mongoose = require('mongoose');

const advertSchema = new mongoose.Schema({
    userId:         {type: String, require:true },
    name:           {type: String, require:true },
    type:           {type: String, require:true },
    location:       {type: String, require:true },
    breed:          {type: String },
    sex:            {type: String },
    port:           {type: String },
    fur:            {type: String },
    image:          {type: String },
    description:    {type: String, require:true }
});

module.exports = mongoose.model('Advert', advertSchema);