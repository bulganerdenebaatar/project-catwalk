const router = require('express').Router();
const requests = require('./api_requests.js');

router.get('/products*', requests.getInfo);
router.get('/reviews/*', requests.getInfo);
router.get('/qa/*', requests.getInfo);
router.get('/cart', requests.getInfo);

router.post('/reviews/', requests.postInfo);
router.post('/qa/*', requests.postInfo);
router.post('/cart', requests.postInfo);

router.put('/reviews/*', requests.updateInfo);
router.put('/qa/*', requests.updateInfo);

module.exports = router;
