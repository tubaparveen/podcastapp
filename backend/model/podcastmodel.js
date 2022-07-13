const mongoose = require('../connection');

const schema = new mongoose.Schema({
    title: String,
    description: String,
    thumbnail: String,
    file: String,
   createdAt : Date,
})

const model  = mongoose.model('podcast', schema);

module.exports = model;