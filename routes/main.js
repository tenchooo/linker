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
    var json = JSON.parse(req.body);
    var link = json.link;
    var isUnique = false;
    while (isUnique == false) {
      var id = randomstring.generate({
        length: config.linker.length,
        charset: config.linker.charset
      });
      db.get(id, function(err, value) {
        if (err) {
          if (err.notFound) {
            isUnique = true;
          } else {
            return;
          }
        }
      });
    }
  } catch (err) {
    // return error json
  }
});

module.exports = router;
