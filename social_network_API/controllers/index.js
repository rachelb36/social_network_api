const router = require('express').Router();

const apiRoutes = require('./api');
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
