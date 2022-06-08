const express = require('express');
const router = express.Router();
const Contact = require('../models/contact')

router.get('/contacts', (req, res, next) => {
  // get placeholder
  Contact.find({})
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/contacts', (req, res, next) => {
  // post placeholder
  if (req.body) {
    Contact.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'Mandatory fields are empty!'
    });
  }
});
router.post('/update/:id', (req, res, next) => {
  const contactObj = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    image_url: req.body.image_url
  }
  Contact.findByIdAndUpdate({ _id: req.params.id },contactObj)
    .then((data) => res.json(data))
    .catch(next);
});

router.delete('/contacts/:id', (req, res, next) => {
  Contact.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;