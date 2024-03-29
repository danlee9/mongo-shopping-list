var express = require('express');
var Item = require('../services/item');
var router = express.Router();

router.get('/items', function(req, res) {
  Item.list(function(items) {
    res.json(items);
  }, function(err) {
    res.status(400).json(err);
  });
});

router.post('/items', function(req, res) {
  Item.save(req.body.name, function(item) {
    res.status(201).json(item);
  }, function(err) {
    res.status(400).json(err);
  });
});

router.delete('/items/:name', function(req, res) {
  var name = req.params.name;
  name = name.replace("_", " ");
  Item.delete(name, function(item) {
    res.status(200).json(item);
  }, function(err) {
    res.status(400).json(err);
  });
});

router.put('/items/:name', function(req, res) {
  var name = req.params.name;
  name = name.replace("_", " ");
  content = req.body.name;
  Item.update(name, content, function(item) {
    res.status(200).json(item);
  }, function(err) {
    res.status(400).json(err);
  });
});

module.exports = router;