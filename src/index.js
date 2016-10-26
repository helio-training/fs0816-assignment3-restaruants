import Express from 'express';
var bodyParser = require('body-parser');

const app = Express();

export default app;
app.use(bodyParser.json());
import RestaurantRoutes from './routes/restaurants';
app.use('/restaurants', RestaurantRoutes);

// app.get('/restaurant', (request, response) => {
//
//   const query = RestaurantRoutes.find();
//
//   // // Assuming Restaurants.find() returns a promise
//   // return Restaurants.find({...})
//   //   .then(restaurants => {
//   //     return response.json('restaurants');
//   //   });
// });

app.listen(3000);




