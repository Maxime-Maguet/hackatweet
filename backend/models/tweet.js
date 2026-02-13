const mongoose = require('mongoose');

const tweetsSchema = mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId,ref:'users', require: true},
content: {type: String, maxlength: 280},
createdat: ({type: Date, default: Date.now}),
likes: [({type: Number, type: mongoose.Schema.Types.ObjectId,ref:'users'})],
})

const Tweet = mongoose.model('tweets', tweetsSchema);

module.exports = Tweet;