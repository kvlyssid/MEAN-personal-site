var express = require('express');
var router = express.Router();
var personsDAO = require("../dataaccess/personsDAO.js");

router.get('/',function(req,res){
	personsDAO.getLatest().then(function(result){
		res.json(result[0]);
	});
})

module.exports = router;