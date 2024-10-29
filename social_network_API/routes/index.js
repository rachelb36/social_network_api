const router = require('express').Router();
// const userRoutes = require('./userRoutes');
// const thoughtRoutes = require('./thoughtRoutes');
const apiRoutes = require('./api'); // Path to your API routes folder

router.use('/api', apiRoutes);
// router.use('/thoughts', thoughtRoutes);
// router.use('/users', userRoutes);

router.use((req, res) => {
  return res.status(404).json({ message: 'Not found' });
});

module.exports = router;
