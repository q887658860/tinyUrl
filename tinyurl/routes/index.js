var express = require('express');
var router = express.Router();

var actions = require('../model/actions');

/* GET home page. */
router.get('/', actions.getIndex);

router.post('/', actions.createTiny);

router.get('/:counter', actions.redirectTiny);

module.exports = router;
