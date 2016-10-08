import Express from 'express';
import RestaurantRouter from './routes/restaurants';
import BodyParser from 'body-parser';

const app = Express();

app.use(BodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  return res.send('Hello');
});

app.use('/restaurants', RestaurantRouter);

app.listen(PORT, () => {
  `The application is running on: ${PORT}`
});

export default app;



