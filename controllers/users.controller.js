
users = {
    id:1,
    name:'Aleksei'
}

class UsersControllers {
    getUsers() {
        return users
    }

    updateUser(id) {
       return users.find((item) => item.id === id)
    }
}


module.exports = new UsersControllers()