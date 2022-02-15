const router = require('express').Router();
const requests = require('./api_requests.js');

router.get('/products', requests.getAllProducts);

module.exports = router;
