var Item = require('../models/item');

exports.list = function(callback, errback) {
  Item.find(function(err, items) {
    if (err) {
      errback(err);
      return;
    }
    callback(items);
  });
};

exports.save = function(name, callback, errback) {
  Item.create({ name: name }, function(err, item) {
    if (err) {
      errback(err);
      return;
    }
    callback(item);
  });
};

exports.delete = function(name, callback, errback) {
  Item.findOneAndRemove({ name: name }, function(err, item) {
    if (err) {
      errback(err);
      return;
    }
    callback(item);
  });
};

exports.update = function(name, content, callback, errback) {
  Item.findOneAndUpdate({ name: name }, { name: content }, function(err, item) {
    if (err) {
      errback(err);
      return;
    }
    callback(item);
  });
};