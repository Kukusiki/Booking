const reviewController = require('../controllers/reviewController');
const admin = require('../middleware/isAdmin');
const user = require('../middleware/isUser');

const express = require('express');
const router = express.Router();
const tryCatch = require('../utils/tryCatch');


//router.use(user);
router.get('/:id', tryCatch(reviewController.getReviewById));
router.get('/', tryCatch(reviewController.getAllReviews));
router.get('/:id/hotel', tryCatch(reviewController.getHotelByReviewId));
router.get('/:id/user', tryCatch(reviewController.getUserByReviewId));

//router.use(admin);
router.post('/', tryCatch(reviewController.addReview));
router.delete('/:id', tryCatch(reviewController.deleteReview));

module.exports = router;