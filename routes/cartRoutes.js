const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const { authenticateUser } = require('../middleware/auth');

router.post('/', authenticateUser, cartController.addToCart);
router.get('/', authenticateUser, cartController.getCart);

module.exports = router;
