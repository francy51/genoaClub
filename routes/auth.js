var express = require('express');
var router = express.Router();
var handlebars = ('express-handlebars');
var body = require('body-parser');
var app = require('../app');
var User = require('../models/userModel.js')
/* GET home page. */



router.get('/', function(req, res, next) {
  User.getUsers(function(err , users){
    if (err){
      throw err;
    }
    res.render('login');
  })
});

router.get('/users' , function (req , res, next){
  User.getUsers(function(err , users){
    if (err){
      throw err;
    }
    res.render('usersview');
  })
});


router.get('/register' , function(req,res,next){
  res.render('register');
});

router.post('/register' , function(req,res){
  var user = req.body;
  User.adduser(user , function(err,user){
    if (err){
      throw err;
    }
    res.json(user)
  });
});



module.exports = router;
