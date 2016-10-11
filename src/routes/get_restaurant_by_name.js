const express = require('express');
const mongoose = require('mongoose');
const Restaurants = require('../model/Restaurant');
const router = express.Router();
var Regex = require("regex");
var regex = new Regex(/(a|b)*abb/);

router.route('/:name')
    .get((req, res) => {

        const name = req.params.name;

        Restaurants.find({name:{'$regex' : name, '$options' : 'i'}}, (err, restaurants) => {
            if (err) {
                res.status(400).json(err);
            }

            res.json(restaurants);
        });
    });

module.exports = router;