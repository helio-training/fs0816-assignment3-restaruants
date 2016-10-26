import { MongoClient, ObjectID } from 'mongodb';

const MONGO_URI = process.env.MONGO_URI;

module.exports = MongoClient.connect(MONGO_URI);
// const Db = MongoClient.connect(MONGO_URI);
//
// export default Db;

export let ObjectId = ObjectID;
