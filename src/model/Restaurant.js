const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const RestaurantSchema = new Schema ({ any: {} });

const RestaurantSchema = new Schema ({
    name: { type: String, require: true },
    borough: { type: String, require: true },
    cuisine: { type: String, require: true },
    grades: { type: Array, require: false },
    address: { type: Object, require: false },
    //address.building: { type: String, require: true },
    isFavorite: { type: Boolean, require: false },
 });

 module.exports = mongoose.model('restaurant', RestaurantSchema);