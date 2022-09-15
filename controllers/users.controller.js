const UsersService = require('../services/users.service')



class UsersControllers {
    async getUsers() {
        let users = await UsersService.getUsers()
        return users
    }

    getUsersById(id) {
        return users.find((item) => item.id === id)
    }


}


module.exports = new UsersControllers()
