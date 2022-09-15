const fs = require('fs')
class UsersService {
    getUsers() {
        try {
            return new Promise((res, rej) => {
                fs.readFile("data.json", (err, data) => {
                    if (err) {
                        return res(false);
                    }
                    return res(JSON.parse(data))
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
}


module.exports = new UsersService()


