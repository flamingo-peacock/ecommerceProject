'use strict';

// Model
var Contact = require('../models/contact');

function create(req, res) {
  var newContact = new Contact(req.body);
  newContact.save(function(err, contact) {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log('here')
      res.json(contact);
    }
  });
}


module.exports = {
  create: create
};