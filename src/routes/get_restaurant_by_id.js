const express = require('express');
const mongoose = require('mongoose');
const Restaurants = require('../model/Restaurant');
const router = express.Router();

router.route('/:id')
    .get((req, res) => {

        const _id = req.params.id;

        Restaurants.find({ _id }, (err, restaurants) => {
            if (err) {
                res.status(400).json(err);
            }

            res.json(restaurants);
        });
    });

module.exports = router;