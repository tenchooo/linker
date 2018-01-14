var express = require('express')
var randomstring = require('randomstring')
var db = require('../db')
var config = require('../config')

var router = express.Router()

router.get('/', function (req, res, next) {
  res.render('index', {
    title: config.title,
    slogan: config.slogan
  })
})

router.get('/:id', function (req, res, next) {
  db.get(req.params.id, function (err, value) {
    if (err) {
      res.render('')
    }
  })
})

router.post('/shorten', function (req, res, next) {
  var url = req.body.url
  var id = randomstring.generate({
    length: config.linker.length,
    charset: config.linker.charset
  })
  db.put(id, { url: url }, function (err) {
    if (err) console.log('Whoops!', err)
    res.json({
      id: id
    })
  })
})

module.exports = router
