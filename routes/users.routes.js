const express = require("express");
const router = express.Router();
const UsersControllers = require('../controllers/users.controller');
const UsersService = require("../services/users.service")


router.use(async (req, res, next) => {
    let data = await UsersService.getUsers()
    if (data) {
        req.users = data;
        next()
    }
})


router.get('/', UsersControllers.getUsers)
router.get('/:id', UsersControllers.getUserById)
router.post('/', UsersControllers.createUser)
router.put('/:id', UsersControllers.updateUser)
router.patch('/:id', UsersControllers.updateParametrOfUser)
router.delete('/:id', UsersControllers.deleteUser)
router.get('/:gender', UsersControllers.getUsers)

module.exports = router
