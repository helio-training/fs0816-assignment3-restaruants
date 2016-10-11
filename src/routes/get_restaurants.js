const express = require('express');
const mongoose = require('mongoose');
const Restaurants = require('../model/Restaurant');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        Restaurants.find({}, (err, restaurants) => {
            if (err) {
                res.status(400).json(err);
            }

            res.json(restaurants);
        });
    });

module.exports = router;