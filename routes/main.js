var express = require('express');
var router = express.Router();

var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Linker'
  });
});

router.post('/shorten', function(req, res, next) {
  try {
    var json = JSON.parse(req.body);
    var link = json.link;
    
  } catch (err) {
    // return error json
  }
});

module.exports = router;
