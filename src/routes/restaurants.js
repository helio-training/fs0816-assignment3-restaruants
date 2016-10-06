import { Router } from 'express';
import RestaurantService from '../services';


const router = new Router();

router.get('/', (req, res) => {
    return RestaurantService
      .find()
      .then(restaurants => res.json(restaurants))
      .catch(e => res.status(500).json({ message: 'Something happened', error: e }));
  }
);

router.get('/top-rated', (req, res) => {
    return res.json(['top-rated']);
  }
);

router.get('/favorites', (req, res) => {
    return res.json(['favs']);
  }
);


export default router;
