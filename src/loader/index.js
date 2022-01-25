const express = require('express');
const bodyParser = require('body-parser');
const error = require('../middleware/error');
const passport = require('./passport');

const bookingRouter = require('../routes/bookingRouter');
const hotelRouter = require('../routes/hotelRouter');
const reviewRouter = require('../routes/reviewRouter');
const roleRouter = require('../routes/roleRouter');
const roomRouter = require('../routes/roomRouter');
const userInfoRouter = require('../routes/userInfoRouter');
const userRoleRouter = require('../routes/userRoleRouter');
const userRouter = require('../routes/userRouter');
const loginRouter = require('../routes/loginRouter');

const router = express.Router();



router.use(bodyParser.json());
router.use(passport.initialize());

router.use('/bookings', /*passport.authenticate('jwt'),*/ bookingRouter);
router.use('/hotels', passport.authenticate('jwt', { session: false }), hotelRouter);
router.use('/reviews', /*passport.authenticate('jwt'),*/ reviewRouter);
router.use('/roles', /*passport.authenticate('jwt'),*/ roleRouter);
router.use('/rooms', /*passport.authenticate('jwt', { session: false }),*/ roomRouter);
router.use('/userInfos', /*passport.authenticate('jwt'),*/ userInfoRouter);
router.use('/userRoles', /*passport.authenticate('jwt'),*/ userRoleRouter);
router.use('/users', /*passport.authenticate('jwt'),*/ userRouter);
router.use('/login', loginRouter);

router.use(error);


module.exports = router;