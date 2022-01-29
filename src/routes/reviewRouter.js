const reviewController = require('../controllers/reviewController');
const admin = require('../middleware/isAdmin');
const user = require('../middleware/isUser');
const validate = require('../middleware/validate');
const reviewScheme = require('../validate/reviewScheme');
const tryCatch = require('../utils/tryCatch');

const express = require('express');
const router = express.Router();


//router.use(user);
router.get('/:id', tryCatch(reviewController.getReviewById));
router.get('/', tryCatch(reviewController.getAllReviews));
router.get('/:id/hotel', tryCatch(reviewController.getHotelByReviewId));
router.get('/:id/user', tryCatch(reviewController.getUserByReviewId));

//router.use(admin);
router.post('/', validate(reviewScheme.create), tryCatch(reviewController.addReview));
router.delete('/:id', tryCatch(reviewController.deleteReview));

module.exports = router;