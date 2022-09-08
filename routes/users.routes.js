const express = require("express");
const router = express.Router();
const UsersControllers = require('../controllers/users.controller');
// const UsersService = require('../services/users.service');

router.get('/', (req, res) => {
    const users = UsersControllers.getUsers()
    res.send(users)
})



module.exports = router