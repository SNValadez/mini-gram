const router = require('express').Router();
const userRoutes = require('./user-routes');
const categoryRoutes = require('./category-routes');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/posts', postRoutes);
module.exports = router;