const reviewService = require('../services/reviewService');
const StatuseCodes = require('http-status-codes').StatusCodes;

class ReviewController {

    async addReview(req, res, next) {
        const review = req.body;
        await reviewService.addReview(review);

        res.status(StatuseCodes.CREATED).json({ message: 'Review created successfully' });
    }


    async getReviewById(req, res, next) {
        const reviewId = req.params.id;
        const review = await reviewService.getReviewById(reviewId);

        res.status(StatuseCodes.OK).json({ message: review });
    }


    async getAllReviews(req, res, next) {
        const review = await reviewService.getAllReviews();

        res.status(StatuseCodes.OK).json({ message: review });
    }


    async getHotelByReviewId(req, res, next) {
        const reviewId = req.params.id;
        const hotel = await reviewService.getHotelByReviewId(reviewId);

        res.status(StatuseCodes.OK).json({ message: hotel });
    }


    async getUserByReviewId(req, res, next) {
        const reviewId = req.params.id;
        const user = await reviewService.getUserByReviewId(reviewId);

        res.status(StatuseCodes.OK).json({ message: user });
    }


    async deleteReview(req, res, next) {
        const reviewId = req.params.id;
        const numberOfReviews = await reviewService.deleteReview(reviewId);

        res.status(StatuseCodes.OK).json({ message: numberOfReviews });
    }

}

module.exports = new ReviewController();