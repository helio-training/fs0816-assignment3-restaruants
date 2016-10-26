import restaurantService from '../src/services';
import request from 'supertest';
import app from '../src';



describe('GET /restaurants', () => {

  it(`loads all the restaurants by search = null`, (done) => {

    request(app)
      .get('/restaurants')
      .set('Accept', 'application/json')
      .expect(function(res) {
        console.log(res.body);
        expect(res.body).to.be.an.array();
      })
      .expect(200, done);

    // const result = router.get('/', (res, req) => {
    //   return RestaurantServices.find()
    //     .then(restaurant => {
    //       return response.json(restaurant)
    //     })
    // });
    //
    // expect(result).to.not.be.empty();
  });
});
