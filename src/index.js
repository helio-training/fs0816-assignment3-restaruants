import Express from 'express';
import RestaurantRouter from './routes/restaurants';

const app = Express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  return res.send('Hello');
});

app.use('/restaurants', RestaurantRouter);

app.listen(PORT, () => {
  `The application is running on: ${PORT}`
});

export default app;



