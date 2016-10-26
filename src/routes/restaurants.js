// http://expressjs.com/en/4x/api.html#express.router

import { Router } from 'express';

import restaurantService from '../services/index';



const router = new Router();

//Return all restaurants
router.get('/', (request, response) => {

  const query = request.query.search;

  if(!query) {
    return restaurantService.get()
      .then(restaurants => {
        return response.json(restaurants);
      });
  //return restaurants by name
  } else {
    return restaurantService.getByName(query)
      .then(restaurants => {
        return response.json(restaurants);
      });
  }
});

//return all restaurants with an A grade
router.get('/top-rated', (request, response)=> {
  return restaurantService.getTopRated()
    .then(restaurants => {
      return response.json(restaurants);
    })

});
//return favorites I.E. isFavorites = true
router.get('/favorites', (request, response) => {
  return restaurantService.getFavorites()
    .then(restaurants => {
      return response.json(restaurants);
    })
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  return restaurantService
    .getById(id)
    .then(restaurant => {
      return res.json(restaurant);
    })
    .catch(e => res.status(500).json(e))
});

//updates a restaurant
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const restaurant = req.body;

  return restaurantService
    .update(id, restaurant)
    .then(restaurant => {
      return res.json(restaurant);
    })
});

//inserts a new restaurant object
router.post('/', (req, res) => {
  const restaurant = req.body;

  return restaurantService
    .insert(restaurant)
    .then(restaurant => {
      return res.json(restaurant);
    })
});

//deletes a restaurant by id
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  return restaurantService
    .delete(id)
    .then(restaurant => {
      return res.json(restaurant)
    })
    .catch(e => res.status(204).json(e))
});


export default router;


