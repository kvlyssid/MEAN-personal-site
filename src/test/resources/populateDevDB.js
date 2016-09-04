#!/usr/bin/env node
'use strict';

var mongoClient = require('mongodb').MongoClient;
var fs = require('fs');
var path = require('path');
var jsonParser = require('jsonfile');

const MONGO_URL = "mongodb://localhost:27017/pp_dev";
const RESOURCES_DIRECTORY = "src/test/resources";
const PERSONS_JSON = "persons.json";


function populateTestDB() {
	let personsJsonPath = path.join(RESOURCES_DIRECTORY, PERSONS_JSON);
	mongoClient.connect(MONGO_URL).then(function (db) {
		insertCollection(db, "persons", personsJsonPath);
	});
}


function insertCollection(db, collectionName, jsonFile) {
	let dbCollection = db.collection(collectionName);
	readFileAndInsert(jsonFile, dbCollection, db)
}

function readFileAndInsert(jsonFile, dbCollection, db) {
	jsonParser.readFile(jsonFile, (err, fileArray) => {
		if (err != null) {
			console.error(" Error while reading file" + jsonFile + err);
		}
		dbCollection.insert(fileArray);
		db.close();
	});
}

module.exports = populateTestDB();