const mongoose = require('../connection');

const schema = new mongoose.Schema({
    email: String,
    usernamename: String,
    country: String,
    password: String,
   contact : String,
})

const model  = mongoose.model('user', schema);

module.exports = model;