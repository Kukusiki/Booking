const customEndpointController = require('../controllers/customEndpointController');
const admin = require('../middleware/isAdmin');
const tryCatch = require('../utils/tryCatch');

const express = require('express');
const router = express.Router();


//router.use(admin);
router.get('/:date', tryCatch(customEndpointController.getHotel));
router.get('/', tryCatch(customEndpointController.getUsers));

module.exports = router;