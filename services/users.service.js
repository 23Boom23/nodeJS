

    class UsersService{
        getUsers() {
            return new Promise((res,rej) => {
                res({name:'Aleksei', age:24})
            })
        }

    }


module.exports = new UsersService()

