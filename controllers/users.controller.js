const UsersService = require('../services/users.service')



class UsersControllers {
    async getUsers(req, res) {
        let result = await UsersService.getUsers()
        return res.send(result)
    }

    async getUserById(req, res) {
        let result = await UsersService.getUsers()
        return res.send(result)
    }

    async createUser(req, res) {
        req.users[ req.body.id ] = req.body;
        let result = await UsersService.createUser(req.users)
        return res.status(200).send(result)
    }

    async updateUser(req, res) {
        console.log(req.users, req.body.id, req.params);
        req.users[ req.params.id ] = req.body;
        let result = await UsersService.updateUser(req.users)
        return res.status(200).send(result)
    }

    async updateParametrOfUser(req, res) {

    }

    // router.patch('/user/:id', (req, res) => {
//     const updateUsers = users.map((item) => (item.id == req.params.id ? { ...item, name: req.body.name, isMan: req.body.isMan } : item))
//     users.splice(0, users.length, ...updateUsers)
//     res.send(users)
// })

    async deleteUser(req, res) {
        console.log(req.users);
        console.log();
        delete req.users[ req.params.id ];
        let result = await UsersService.deleteUser(req.users)
        return res.status(200).send(result)
    }
}

module.exports = new UsersControllers()
// router.get('/:id', (req, res) => {
//     try {
//         const user = UsersControllers.getUserById(req.params.id)
//         res.send(user)
//     } catch (e) {
//         console.log(e)
//     }
// })

// app.get('/users', (req, res) => {
//     if (req.query) {
//         let result = users.filter(item => item.age > req.query.min && item.age < req.query.max ? item : null)
//         return res.send(result)
//     }
//     if (!req.query) {
//         res.send(users)
//     }
// })

// app.get('/:gender', (req, res) => {
//     // item.isMan == req.params.gender
//     users = users.filter((item) => JSON.stringify(item.isMan) === req.params.gender)
//     res.send(users)
// })
