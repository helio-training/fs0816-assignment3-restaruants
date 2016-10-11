const express = require('express');
const mongoose = require('mongoose');
const Restaurants = require('../model/Restaurant');
const router = express.Router();

router.route('/top-rated')
    .get((req, res) => {
        Restaurants.find({grade:"A"}, (err, restaurants) => {
            if (err) {
                res.status(400).json(err);
            }

            res.json(restaurants);
        });
    });

module.exports = router;