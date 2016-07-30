'use strict';

// Model
const Cart = require('../models/cart');
const User = require('../models/user');
const products = require('../models/product');


function create(req, res) {
  const newCart = new Cart(req.body);
  newCart.save((err, cart) => {
    err ? res.status(500).send(err) : res.json(cart)
  });
}

function read(req, res) {
  Cart
  .find()
  .populate('products')
  .exec((err, cart) => {
    err ? res.status(500).send(err) : res.json(cart)
  });
}

function readOne(req, res) {
  Cart
  .find(req.params.userId)
  .populate('products')
  .exec((err, cart) => {
    err ? res.status(500).send(err) : res.json(cart)
  });
}

function update(req, res) {
  Cart.findByIdAndUpdate(req.params.CartId, {$addToSet: {products: req.body.productId}}, (err, cart) => {
    err ? res.status(500).send(err) : res.json(cart)
  });
}

function destroyOne(req, res) {
  Cart.findByIdAndUpdate(req.params.CartId, {$pull: {products: req.params.productId}}, (err, cart) => {
    err ? res.status(500).send(err) : res.json(cart)
  });
}

function destroy(req, res) {
  Cart.findByIdAndRemove(req.params.CartId, (err, cart) => {
    err ? res.status(500).send(err) : res.json(cart)
  });
}

module.exports = {
  create: create,
  read: read,
  readOne: readOne,
  update: update,
  delete: destroy,
  destroyOne: destroyOne
};