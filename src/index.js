import Express from 'express';

const app = Express();
const bodyParser = require('body-parser');

const env = require('dotenv').config();
const mongoose = require('mongoose');
const uriUtil = require('mongodb-uri');
const mongodbUri = process.env.DB_URI;
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const dbOptions = {};


app.use('/api/restaurants', require('./routes/get_restaurants'));
app.use('/api/restaurants', require('./routes/get_restaurant_by_id'));
app.use('/api/restaurants', require('./routes/get_restaurant_favorited'));
app.use('/api/restaurants', require('./routes/get_restaurant_by_name'));
app.use('/api/restaurants', require('./routes/post_restaurant'));
app.use('/api/restaurants', require('./routes/put_restaurant'));
app.use('/api/restaurants', require('./routes/delete_restaurant'));

// Starting the server stuff

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;


app.listen(port, hostname, () => {
  mongoose.connect(mongodbUri, dbOptions, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('to rodando');
  });

  
});

export default app;
