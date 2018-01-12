var level = require('level');
var path = require('path');

var dbPath = process.env.DB_PATH || path.join(__dirname, 'data');

var options = {
  keyEncoding: 'binary',
  valueEncoding: 'json'
};

// TODO: add json support when we'll make available other features such as private link, captcha or paste expiration.
var db = level(dbPath);
// var db = level(dbPath, options);

module.exports = db;
