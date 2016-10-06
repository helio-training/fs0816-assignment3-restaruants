// import {} from './db';
// const Db = require('./db');

import Db, { ObjectId } from './db';

export default {

  find(search = {}) {
    // const cursor = Db.collection('restaurants')
    //                  .find(query);
    // return cursor.toArray();

    // const restaurants = Db.collection('restaurants');
    //
    // const cursor = restaurants.find(query);
    //
    // return cursor.toArray();

    return Db.then(db => {
        return db.collection('restaurants')
          .find(search)
          .toArray()
      }
    );
  },

  findTopRated() {
    // return this.find({ '' })
  },

  findFavorites() {
    return this.find({ isFavorite: true });
  },

  findById(id) {
    return Db.then(db => {
        return db.collection('restaurants')
          .findOne({ _id: ObjectId(id) });
      }
    );
  }

};
