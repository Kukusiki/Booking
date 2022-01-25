const loginController = require('../controllers/loginController');
const express = require('express');
const router = express.Router();
const tryCatch = require('../utils/tryCatch');


router.post('/', tryCatch(loginController.login));

module.exports = router;