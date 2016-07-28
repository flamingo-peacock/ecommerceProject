'use strict';

// Dependencies
// var secret = require('./jwt.config');
// var uri = require('./db.config');

module.exports = {
  server: {
    port: process.env.PORT || 3000
  },
  jwt: {
    secret: 'mySecret'
  },
  db: {
    uri: 'mongodb://localhost/ecommerce'
  }
};
