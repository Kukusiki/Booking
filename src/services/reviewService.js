const reviewRepository = require('../repositories/reviewRepository');
const hotelRepository = require('../repositories/hotelRepository');
const userRepository = require('../repositories/userRepository');
const NotFoundError = require('../utils/notFoundError');

class ReviewService {

    async addReview(review) {
        const hotel = await hotelRepository.findHotelById(review.hotelId);
        if (!hotel) {
            throw new NotFoundError('Hotel not found');
        }

        const user = await userRepository.findUserById(review.userId);
        if (!user) {
            throw new NotFoundError('User not found');
        }

        const result = await reviewRepository.create(review);
        return result;
    }


    async getReviewById(reviewId) {
        const result = await reviewRepository.findReviewById(reviewId);
        if (!result) {
            throw new NotFoundError('Review not found');
        }
        return result;
    }


    async getAllReviews() {
        const result = await reviewRepository.findAll();
        return result;
    }


    async getHotelByReviewId(reviewId) {
        const review = await this.getReviewById(reviewId);
        const hotelId = review.hotelId;

        const result = await hotelRepository.findHotelById(hotelId);
        if (!result) {
            throw new NotFoundError('Hotel not found');
        }
        return result;
    }


    async getUserByReviewId(reviewId) {
        const review = await this.getReviewById(reviewId);
        const userId = review.userId;

        const result = await userRepository.findUserById(userId);
        if (!result) {
            throw new NotFoundError('User not found');
        }
        return result;
    }


    async deleteReview(reviewId) {
        await this.getReviewById(reviewId);

        const result = await reviewRepository.delete(reviewId);
        return result;
    }

}

module.exports = new ReviewService();