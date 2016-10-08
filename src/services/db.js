// const {} = require('mongodb');
// const MongoClient = MongoDB.MongoClient;
// const ObjectID = MongoDB.ObjectID;

import { MongoClient } from 'mongodb';

const MONGO_URI = process.env.MONGO_URI;

const db = MongoClient.connect(MONGO_URI);

export default db;



