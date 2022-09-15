const express = require("express");
const router = express.Router();
const UsersControllers = require('../controllers/users.controller');
// const UsersService = require('../services/users.service');

router.get('/', async (req, res) => {
    try {
        const users = await UsersControllers.getUsers()
        res.send(users)
    }
    catch (e) {
        console.log(e)
    }
})

// app.get('/users', (req, res) => {
//     if (req.query) {
//         let result = users.filter(item => item.age > req.query.min && item.age < req.query.max ? item : null)
//         return res.send(result)
//     }
//     if (!req.query) {
//         res.send(users)
//     }
// })

router.get('/:id', (req, res) => {
    try {
        const user = UsersControllers.getUserById(req.params.id)
        res.send(user)
    } catch (e) {
        console.log(e)
    }
})

// app.get('/:gender', (req, res) => {
//     // item.isMan == req.params.gender
//     users = users.filter((item) => JSON.stringify(item.isMan) === req.params.gender)
//     res.send(users)
// })

// router.post('/user', (req, res) => {
//     users.push(req.body);
//     res.status(201, () => {
//         'Success'
//     })
//     res.send(req.body)
// })

// router.put('/user/:id', (req, res) => {
//     const updateUsers = users.map((item) => (item.id == req.params.id ? req.body : item))
//     users.splice(0, users.length, ...updateUsers)
//     res.send(users)
// })

// router.patch('/user/:id', (req, res) => {
//     const updateUsers = users.map((item) => (item.id == req.params.id ? { ...item, name: req.body.name, isMan: req.body.isMan } : item))
//     users.splice(0, users.length, ...updateUsers)
//     res.send(users)
// })

// router.delete('/user/:id', (req, res) => {
//     const id = users.findIndex((item) => item.id == req.params.id)
//     users.splice(id, 1);
//     res.send(`${id}`);
// })

module.exports = router
