'use strict';

// Dependencies
var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var config = require('../config/config');

// Middleware
var auth = jwt({
  secret: config.jwt.secret,
  userProperty: 'payload'
});

// Controller
var profileCtrl = require('../controllers/profile');
var authCtrl = require('../controllers/authentication');
var prodCtrl = require('../controllers/product');
var contactCtrl = require('../controllers/contact');
var cartCtrl = require('../controllers/cart');

//Routes

// profile
router.get('/profile', auth, profileCtrl.read);

// authentication
router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);

//products
router.get('/products', prodCtrl.read);
router.get('/products/:productId', prodCtrl.readOne);
router.post('/products', prodCtrl.create);
router.put('/products/:productId', prodCtrl.update);
router.delete('/products/:productId', prodCtrl.delete);

//contact
router.post('/contact', contactCtrl.create);

//cart
router.post('/cart', cartCtrl.create);
router.get('/cart', cartCtrl.read);
router.get('/cart/:CartId', cartCtrl.readOne);
router.put('/cart/:CartId', cartCtrl.update);
router.put('/cart/:CartId/:productId', cartCtrl.destroyOne);
router.delete('/cart/:CartId', cartCtrl.delete);

module.exports = router;
