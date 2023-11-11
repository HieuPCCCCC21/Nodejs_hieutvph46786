var express = require('express');
var router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.use('/login', siteController.login);
router.use('/', siteController.home);

module.exports = router;
