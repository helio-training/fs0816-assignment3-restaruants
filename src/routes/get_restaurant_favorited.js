const express = require('express');
const mongoose = require('mongoose');
const Restaurants = require('../model/Restaurant');
const router = express.Router();

router.route('/favorites')
    .get((req, res) => {

        Restaurants.find({ isFavorite: true }, (err, restaurants) => {
            if (err) {
                res.status(400).json(err);
            }

            res.json(restaurants);
        });
    });

module.exports = router;