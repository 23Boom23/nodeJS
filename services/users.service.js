
// let users = [ { id: 1, name: "Pasha", isMan: true, age: 25 },
// { id: 2, name: "Lesha", isMan: true, age: 28 },
// { id: 3, name: "Masha", isMan: false, age: 32 },
// { id: 4, name: "Marina", isMan: false, age: 51 }
// ]
    class UsersService{
        getUsers() {
            return new Promise((res,rej) => {
                res([ { id: 1, name: "Pasha", isMan: true, age: 25 },
                { id: 2, name: "Lesha", isMan: true, age: 28 },
                { id: 3, name: "Masha", isMan: false, age: 32 },
                { id: 4, name: "Marina", isMan: false, age: 51 }
                ])
            })
        }

    }


module.exports = new UsersService()
