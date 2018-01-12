var express = require('express');
var randomstring = require("randomstring");
var db = require('../db');

var router = express.Router();

var config = require('../config');

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
          }
          // I/O or other error, pass it up the callback chain
          return callback(err)
        }

        // .. handle `value` here
      });
    }
  } catch (err) {
    // return error json
  }
});

module.exports = router;
