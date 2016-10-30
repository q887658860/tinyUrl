var mongoose = require('mongoose');
var Tiny = mongoose.model('Tiny');
var storage = require('node-persist'); /*https://github.com/simonlast/node-persist */

storage.initSync();


if (! storage.getItemSync('counter')){
	storage.setItemSync('counter', '0');
}


var getIndex = function(req, res, next) {
  res.render('index', {
  	title: 'TinyUrl Demo',
  	shortUrl: ''
  	});
}

var createTiny = function (req, res) {
	var counter = storage.getItemSync('counter');
	storage.setItemSync('counter', ++counter);
	new Tiny({
		longUrl: req.body.longUrl,
		shortUrl: 'localhost:3000/' + counter
	}).save(function(err, tiny, count){
		res.render('index', {
			title: 'TinyUrl Demo',
			shortUrl: tiny.shortUrl
		});
	});
}

var redirectTiny = function (req, res) {
	Tiny.find({
		shortUrl: 'localhost:3000/' + req.params.counter
	}, function(err, tinies) {
		if(tinies && tinies.length > 0) {
			res.redirect('http://' + tinies[0].longUrl);
		} else {
			res.redirect('/');
		}
		
	});
}

exports.createTiny = createTiny;
exports.redirectTiny = redirectTiny;
exports.getIndex = getIndex;