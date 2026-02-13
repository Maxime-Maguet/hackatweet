var express = require('express');
var router = express.Router();
const Tweet = require('../models/tweet');
const User = require('../models/users');
const { now } = require('mongoose');




router.get('/viewTweet', (req, res) => {
Tweet.find()
.populate('user')
.then(data => {
res.json({result: true, tweets: data})})

});



router.post('/viewTweet', (req, res) => {
User.findOne({token: req.body.token})

.then(data => {

if(data !== null) {
const newTweet = new Tweet ({
user: data._id,
content: req.body.content,
createdat: new Date(),
likes: [],
})
newTweet.save().then((newDoc) => {
res.json({ result: true, tweet: newDoc}); 
}) 
.catch(error => {
res.json({ result: false, error: error.message })});

} else {
res.json({ result: false })

}})

});

// router.delete('/viewTweet/:tweets', (req, res)=> {
// Tweet.findOne({Tweet: req.params._id})
// .then(data => {
// if(data )

// })



// })




module.exports = router;