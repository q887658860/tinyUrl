var express = require('express');
var router = express.Router();

var actions = require('../model/actions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  	title: 'TinyUrl Demo',
  	shortUrl: ''
  	});
});

router.post('/create', actions.createTiny);

module.exports = router;
