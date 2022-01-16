const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const error = require('../middleware/error');


const bookingRouter = require('../routes/bookingRouter');
const hotelRouter = require('../routes/hotelRouter');
const reviewRouter = require('../routes/reviewRouter');
const roleRouter = require('../routes/roleRouter');
const roomRouter = require('../routes/roomRouter');
const userInfoRouter = require('../routes/userInfoRouter');
const userRoleRouter = require('../routes/userRoleRouter');
const userRouter = require('../routes/userRouter');


router.use('/bookings', bookingRouter);
router.use('/hotels', hotelRouter);
router.use('/reviews', reviewRouter);
router.use('/roles', roleRouter);
router.use('/rooms', roomRouter);
router.use('/userInfos', userInfoRouter);
router.use('/userRoles', userRoleRouter);
router.use('/users', userRouter);
router.use(error);

module.exports = router;