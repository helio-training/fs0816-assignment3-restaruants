import { Router } from 'express';
import RestaurantService from '../services';


const router = new Router();

router.get('/', (req, res) => {
  return RestaurantService.find()
    .then(restaurants => res.json(restaurants))
    .catch(e => res.status(500).json(e));
});

router.get('/top-rated', (req, res) => {
  return res.json([ 'top-rated' ]);
});

router.get('/favorites', (req, res) => {
  return res.json([ 'favs' ]);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  
  return RestaurantService
    .findById(id)
    .then(restaurant => {
      if (!restaurant) {
        return res.status(404).json({ message: 'Not Found', code: 404 });
      }
      return res.json(restaurant);
    })
    .catch(e => res.status(500).json(e));
});


export default router;
