const mongoose = require('mongoose');

const advertSchema = mongoose.Schema({
    userId:         {type: String, require:true },
    name:           {type: String, require:true },
    description:    {type: String, require:true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Advert', advertSchema);