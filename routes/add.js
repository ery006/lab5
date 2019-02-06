var data = require("../data.json");

exports.addFriend = function(req, res) {    
	//alert("HELLO");
	data.friends.push( {
		"name": req.query.name,
		"description": req.query.description,
		"imageURL": "http://lorempixel.com/400/400/people"
	});

	res.render('index', data);
 }