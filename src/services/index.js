// import {} from './db';
// const Db = require('./db');
import { ObjectID } from 'mongodb';

import Db from './db';

const RESTAURANTS = 'restaurants';

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
        return db.collection(RESTAURANTS)
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
        return db.collection(RESTAURANTS)
          .findOne({ _id: ObjectID(id) });
      }
    );
  },
  
  update(id, restaurant) {
    return Db.then(db => {
      return db.collection(RESTAURANTS)
        .findOneAndUpdate(
          { _id: ObjectID(id) }, //query
          { $set: restaurant }, //updates the document
          { returnNewDocument: true })
    });
  }
  
  
};
