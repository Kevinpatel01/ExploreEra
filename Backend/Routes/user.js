const express = require('express');
const router = express.Router();
const User = require('../Models/Users');

router.post('/register', (req,res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  newUser.save()
  .then(() => res.json('User Added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/login', (req,res) => {
  User.findOne({email: req.body.email, password: req.body.password})
  .then(user => {
    if(user){
      res.json("Login Successful");
    }
    else{
      res.status(400).json("Invalid Email or Password!");
    }
  })
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
