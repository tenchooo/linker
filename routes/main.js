var express = require('express')
var randomstring = require('randomstring')
var validurl = require('valid-url')
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
      if(err.notFound) {
        res.status(404).send('Not found')
      }
    } else {
      var url = value.url
      res.redirect(url)
    }
  })
})

router.post('/shorten', function (req, res, next) {
  if (req.body.url) {
    var url = req.body.url
    var id = randomstring.generate({
      length: config.linker.length,
      charset: config.linker.charset
    })
    var now = new Date()
    if (validurl.isHttpUri(url) || validurl.isHttpsUri(url)) {
      db.put(id, { url: url, created: now }, function (err) {
        if (err) {
          var code = 500
          res.status(code).send({
            error: true,
            code: code,
            message: 'Internal database error'
          })
        } else {
          res.json({
            id: id,
            url: url
          })
        }
      })
    } else {
      var code = 400
      res.status(code).send({
        error: true,
        code: code,
        message: "Bad URL"
      })
    }
  } else {
    var code = 400
    res.status(code).send({
      error: true,
      code: code,
      message: 'No URL provided'
    })
  }
})

module.exports = router
