'use strict';

// Model
var Product = require('../models/product');

function create(req, res) {
  var newProduct = new Product(req.body);
  newProduct.save(function(err, product) {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log('here')
      res.json(product);
    }
  });
}

function read(req, res) {
  Product
  .find()
  .exec(function(err, products) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(products);
    }
  });  
}

function readOne(req, res) {
  Product
  .find(req.params.productId)
  .exec(function(err, products) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(products);
    }
  });
}

function update(req, res) {
  Product.findByIdAndUpdate(req.params.productId, req.body, function(err, product) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(product);
    }
  });
}

function destroy(req, res) {
  Product.findByIdAndRemove(req.params.productId, function(err, product) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(product)
    }
  });
}

module.exports = {
  create: create,
  read: read,
  readOne: readOne,
  update: update,
  delete: destroy
};