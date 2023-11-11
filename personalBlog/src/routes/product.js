var express = require('express');
var router = express.Router();
const productController = require('../app/controllers/ProductController');

router.use('/', productController.allProducts);

module.exports = router;
