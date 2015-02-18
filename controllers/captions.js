var _ = require('lodash'),
    Captions = require('../models/Captions');

exports.getCaptions = function(req, res) {
    Captions.find(function(err, captions) {
        if (err) console.log(err);
        res.json(captions);
    });
};

exports.getVideo = function(req, res) {
    console.log(req);
    Captions.findById(req.params.id, function(err, caption) {
      if (err) console.log(err);
      res.json(caption)
    });
};

exports.getCaption = function(req, res) {
    Captions.findById(req.params.id, function(err, caption) {
      if (err) console.log(err);

      if (caption) {
          res.json(caption.captions);
      }
      else {
        res.send('this is the error')
        console.log('this');
      }
    });
};

exports.getTitle = function(req, res) {
    Captions.findById(req.params.id, function(err, caption) {
      if (err) console.log(err);
      res.json(caption.title)
    });
};