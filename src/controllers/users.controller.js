const { validationResult } = require('express-validator');
const UsersService = require('../services/users.service')

class UsersControllers {
    async getUsers(req, res) {
        if (req.query.min && req.query.max) {
            let { min, max } = req.query;
            let result = req.users.filter(item => item.age >= min && item.age <= max)
            return res.send(result);
          }
        if (!(req.query.min && req.query.max)) {
            return res.status(200).send(req.users);
        }
    }

    async getUserById(req, res) {
        const { id } = req.params
        let result = await UsersService.getUserById(req.users[ id ])
        return res.send(result)
    }

    async getUserGender(req, res) {
        const { gender } = req.params
        let result = await UsersService.getUserGender(req.users.filter((item) => JSON.stringify(item.isMan) === gender))
        return res.send(result)
    }

    async createUser(req, res) {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            console.log("--Error--");
            return res.status(400).send({
                succes: false,
                errors: errors.array
            })
        } else {
            req.users[ req.body.id ] = req.body;
            let result = await UsersService.createUser(req.users)
            return res.status(200).send(result)
        }
    }

    async updateUser(req, res) {
        req.users[ req.params.id ] = req.body;
        let result = await UsersService.updateUser(req.users)
        return res.status(200).send(result)
    }

    async updateParametrOfUser(req, res) {
        req.users = req.users.map((item) =>
        req.users[req.params.id] ? {...item, isMan: req.body.isMan, age: req.body.age} : item )
        let result = await UsersService.updateUser(req.users)
            return res.status(200).send(result)
    }

    async deleteUser(req, res) {
        delete req.users[ req.params.id ];
        let result = await UsersService.deleteUser(req.users)
        return res.status(200).send(result)
    }
}

module.exports = new UsersControllers()
