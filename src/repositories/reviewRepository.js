const reviewModel = require('../models/review');

class ReviewRepository {

    async create(review) {
        const result = await reviewModel.create(review);
        return result;
    }

    async findAll() {
        const result = await reviewModel.findAll();
        return result;
    }

    async findReviewById(id) {
        const result = await reviewModel.findByPk(id);
        return result;
    }

    async findReviewsByHotelId(hotelId) {
        const result = await reviewModel.findAll({ where: { hotelId } });
        return result;
    }

    async findReviewsByUserId(userId) {
        const result = await reviewModel.findAll({ where: { userId } });
        return result;
    }

    async delete(id) {
        const result = await reviewModel.destroy({ where: { id } });
        return result;
    }
};

module.exports = new ReviewRepository();