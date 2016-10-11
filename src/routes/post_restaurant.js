const express = require('express');
const mongoose = require('mongoose');
const Restaurant = require('../model/Restaurant');
const router = express.Router();

router.route('/')
    .post((req, res) => {

        const restaurant = new Restaurant(req.body);

        restaurant.save((err, restaurant) => {
            if (err) {
                res.status(400).json(err);
            }
            res.json(restaurant);

        });

    });
module.exports = router;