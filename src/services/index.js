import Db from './db';

import { ObjectID } from 'mongodb';

const RESTAURANTS = 'restaurants';


export default {
  //
  // find(search = '') {
  //   // long form or I can just do the below chaining
  //   const query = {};
  //   const cursor = DB.collection('restaurants')
  //     .find(query);
  //   return cursor.toArray();
  //
  //   //or use chaining
  //   return Db.collection('restaurants')
  //     .find(query)
  //     .toArray()
  // },

  get() {
    return Db.then(db=> {
      return db.collection(RESTAURANTS)
        .find({})
        .toArray();
    });
  },

  getByName(name) {
    return Db.then( db=> {
      return db.collection(RESTAURANTS)
      .find({name: name})
        .toArray();
    });
  },

  getTopRated() {
    return Db.then(db=> {
      const query = { 'grades.grade': { $in: ['A'] }};
      return db.collection(RESTAURANTS)
        .find(query)
        .toArray();
    });
  },

  getFavorites() {
    return Db.then(db => {
      const query = { isFavorite: true };
      return db.collection(RESTAURANTS)
        .find(query)
        .toArray();
    });
  },

getById(id) {
    return Db.then(db => {
      return db.collection(RESTAURANTS)
        .findOne({_id:ObjectID(id)});
    });
},

update(id, restaurant) {
      return Db.then(db => {
        return db.collection(RESTAURANTS)
          .findOneAndUpdate(
            { _id: ObjectID(id)},
            { $set: restaurant },
            { returnNewDocument: true });
  })
},

insert(restaurant) {
  return Db.then(db => {
    return db.collection(RESTAURANTS)
      .insertOne(restaurant)
  })
},

  delete(id) {
    return Db.then(db => {
      return db.collection(RESTAURANTS)
        .deleteOne({_id: ObjectID(id)})
    })
  }
};
