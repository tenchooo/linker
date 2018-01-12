var express = require('express');
var randomstring = require("randomstring");
var db = require('../db');
var config = require('../config');

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    title: config.title,
    slogan: config.slogan
  });
});

router.post('/shorten', function(req, res, next) {
  try {
    // var json = JSON.parse(req.body);
    var json = req.body;
    var url = json.url;
    var isUnique = false;
    while (isUnique == false) {
      var id = randomstring.generate({
        length: config.linker.length,
        charset: config.linker.charset
      });
      db.get(id, function(err, value) {
        if (err.notFound) {
          isUnique = true;
          db.put(id, {
            url: url
          }, function(err){
            res.send({
              error: false,
              id: id
            });
          });
        }
      });
    }
  } catch (err) {
    res.send({
      error: true,
      message: 'this is a TODO error',
      rawobj: err
    });
  }
});

module.exports = router;
