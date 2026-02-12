var express = require('express');
var router = express.Router();
const { checkBody } = require('../module/checkBody');
const uid2 = require('uid2');
const bcrypt = require('bcrypt');
const User = require('../models/users');


router.post('/signup', function(req, res,) {
  if (!checkBody(req.body, ['firstname', 'username', 'password'])) {
  res.json({ result: false, error: 'Missing or empty fields' });
  return;
} else {
User.findOne ({username: req.body.username}).then(data => {
if(data === null){
const hash = bcrypt.hashSync(req.body.password, 10);

const token = uid2;

const newUser = new User({
firstname: req.body.firstname,
username: req.body.username,
password: hash,
token: uid2(32),
createDate: new Date(),
});

 newUser.save().then((newDoc) => {
    res.json({ result: true, token: newDoc.token });

})} else {
res.json({result: false, error: "users already existing" })

}})

}});




router.post('/signin', (req, res) => {

if(!checkBody(req.body, ['firstname','username', 'password'])) {
res.json({result: false, error: 'missing or empty fields' });
return;
}

User.findOne({username: req.body.username}).then(data => {
if(data && bcrypt.compareSync(req.body.password, data.password)) {
res.json({result: true, token: data.token})
} else {
res.json({result: false, error: 'Username or password is incorrect.' })

}})

});




module.exports = router;
