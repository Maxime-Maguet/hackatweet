const mongoose = require('mongoose');

const tweetsSchema = mongoose.Schema({
username: {type: String},
content: {type: String, maxlength: 280},
datepost: Date,
like: Number,
})

const Tweet = mongoose.model('tweets', tweetsSchema);

module.exports = Tweet;