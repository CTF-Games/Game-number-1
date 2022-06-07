var express = require('express');
var router = express.Router();

require('dotenv').config();

router.get(['/', '/index.html', '/index', '/ctf', '/flag', '/hint'], function(req, res, next) {
  res.render('index', { title: 'CyberSite' });
});

router.post('/login', function(req, res) {
  
    cookie = req.cookies.isAdmin;
    username = req.query.username;
    password = req.query.password;
    
    if(cookie == 1) {
      res.render('secretPage', {username: username, password: password, hint: process.env.HINT, success: true});
    }else{
      res.render('secretPage', {username: username, password: password, success: false});
    }
})

module.exports = router;
