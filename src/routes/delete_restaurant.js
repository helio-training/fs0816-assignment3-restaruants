const express = require('express');
const mongoose = require('mongoose');
const Restaurant = require('../model/Restaurant');
const router = express.Router();

router.route('/:id')
     .delete((req, res) => {

    const _id = req.params.id;

    Restaurant.findOneAndRemove({ _id }, (err, restaurant) => {
      if (err) {
        res.status(400).json(err);
      }
      if (!restaurant) {
        res.status(404).json({ message: 'Restaurant not found.' });
      }
      res.json({ message: `Restaurant ${restaurant._id} deleted.` });
    });

  });

module.exports = router;