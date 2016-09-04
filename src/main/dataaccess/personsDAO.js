"use strict"
var mongoClient = require('mongodb').MongoClient;

class PersonsDAO {

	constructor() {
		this.MONGO_URL = "mongodb://localhost:27017/pp_dev";
		this.collection = "persons";
	}

	getLatest() {
		return mongoClient.connect(this.MONGO_URL).then((db) => {
			return db.collection(this.collection).find({}).toArray().then(docs => {
				db.close();
				return docs;
			});
		});
	}

}

var personsDAO = new PersonsDAO();
module.exports = personsDAO;