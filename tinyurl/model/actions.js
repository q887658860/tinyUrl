var mongoose = require('mongoose');
var Tiny = mongoose.model('Tiny');
var counter = 0;

var createTiny = function (req, res) {
	counter++;
	new Tiny({
		longUrl: req.body.longUrl,
		shortUrl:  'localhost:3000/' + counter
	}).save(function(err, tiny, count){
		res.render('index', {
			title: 'TinyUrl Demo',
			shortUrl: tiny.shortUrl
		});
	});
}

exports.createTiny = createTiny;