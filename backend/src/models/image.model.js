const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const imageSchema = new Schema({
    link: {
        type: String,
        default: 'abcd'
    }
});

module.exports = mongoose.model('image', imageSchema)


