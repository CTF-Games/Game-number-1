var express = require('express');
var router = express.Router();

require('dotenv').config();

router.get(['/', '/index.html', '/index', '/ctf', '/flag', '/hint'], function(req, res, next) {
  res.render('index', { title: 'CyberSite' });
});

router.post('/login', function(req, res) {
  
     cookie = req.cookies.isAdmin;

    if(cookie == 1) {
      res.render('secretPage', {hint: process.env['hint'], success: true});
    }else{
      res.render('secretPage', {success: false});
    }
})

module.exports = router;
