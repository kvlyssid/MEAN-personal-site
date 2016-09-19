var express = require('express');
var router = express.Router();
var personsDAO = require("../dataaccess/personsDAO.js");

router.get('/', getLatestVersionOfPersonsDocument)

function getLatestVersionOfPersonsDocument(req, res) {
	personsDAO.getLatest().then(function (personsArray) {
		res.json(personsArray[0]);
	});
}

module.exports = router;