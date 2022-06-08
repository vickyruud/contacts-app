const express = require('express');
const router = express.Router();
const Contact = require('../models/contact')

router.get('/contacts', (req, res, next) => {
  // get placeholder
  Contact.find({}, action)
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/contacts', (req, res, next) => {
  // post placeholder
  if (req.body.action) {
    Contact.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'Mandatory fields are empty!'
    });
  }
});

router.delete('/todos/:id', (req, res, next) => {
  Contact.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;