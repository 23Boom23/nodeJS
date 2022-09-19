const express = require("express");
const router = express.Router();
const UsersControllers = require('../controllers/users.controller');
const UsersService = require("../services/users.service")

const Validator = require("../utils/validators")


router.use(async (req, res, next) => {
    let data = await UsersService.getUsers()
    if (data) {
        req.users = data;
        next()
    }
})

router.get('/', UsersControllers.getUsers)
router.get('/user/:id', UsersControllers.getUserById)
router.post('/', Validator.validatePost(), UsersControllers.createUser)
router.put('/:id', Validator.validateParam(), UsersControllers.updateUser)
router.patch('/:id', UsersControllers.updateParametrOfUser)
router.delete('/:id', UsersControllers.deleteUser)
router.get('/:gender', UsersControllers.getUserGender)

module.exports = router
