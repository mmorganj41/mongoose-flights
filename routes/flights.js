const express = require('express');
const router = express.Router();
const flightsController = require('../controller/flights');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', flightsController.new);

module.exports = router;