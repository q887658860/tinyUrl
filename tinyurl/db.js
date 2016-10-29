var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Tiny = new Schema({
	longUrl: String,
	shortUrl: String
});

mongoose.model('Tiny', Tiny);
mongoose.connect('mongodb://localhost/tiny');