var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var KS2 = require('../models/Ks2.js');

/* GET ALL KS2S */
router.get('/', function(req, res, next) {
  KS2.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE KS2 BY ID */
router.get('/:id', function(req, res, next) {
  KS2.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE KS2 */
router.post('/', function(req, res, next) {
  KS2.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE KS2 */
router.put('/:id', function(req, res, next) {
  KS2.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE KS2 */
router.delete('/:id', function(req, res, next) {
  KS2.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
