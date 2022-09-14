const express = require("express");
const router = express.Router();
const UsersControllers = require('../controllers/users.controller');
// const UsersService = require('../services/users.service');

router.get('/', async (req, res) => {
    const users = await UsersControllers.getUsers()
    res.send(users)
})

router.get('/:id', (req, res) => {
    const user = UsersControllers.getUserById(req.params.id)
    res.send(user)
})



module.exports = router