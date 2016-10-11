const express = require('express');
const mongoose = require('mongoose');
const Restaurant = require('../model/Restaurant');
const router = express.Router();

router.route('/:id')
  .put((req, res) => {

    const _id = req.params.id;

    Restaurant.findOneAndUpdate({ _id },
      req.body,
      { new: true },
      (err, restaurant) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(restaurant);
    });

  });

module.exports = router;