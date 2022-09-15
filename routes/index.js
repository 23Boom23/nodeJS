const express = require('express');
const router = express.Router();

const usersRoutes = require('./users.routes');
const adminRoutes = require('./admin.routes')

router.use('/users', usersRoutes)
router.use('/admin', adminRoutes)


module.exports = router
