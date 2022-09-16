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

  getUserById() {
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

  createUser(data) {
    return new Promise((res, rej) => {
      fs.writeFile(
        "data.json",
        JSON.stringify(data),
        (err, response) => {
          if (err) return res(false);

          return res({ message: "User created" })
        }
      )
    })
  }

  updateUser(data) {
    return new Promise((res, rej) => {
      fs.writeFile(
        "data.json",
        JSON.stringify(data),
        (err, response) => {
          if (err) return res(false);
          return res({ message: "User updated" })
        }
      )
    })
  }

  deleteUser(data) {
    return new Promise((res, rej) => {
      fs.writeFile(
        "data.json",
        JSON.stringify(data),
        (err, response) => {
          if (err) return res(false);
          return res({ message: "User delete" })
        }
      )
    })
  }
}

module.exports = new UsersService()


// [
//     {
//       "id": 1,
//       "name": "Pasha",
//       "isMan": true,
//       "age": 25
//     },
//     {
//       "id": 2,
//       "name": "Lesha",
//       "isMan": true,
//       "age": 28
//     },
//     {
//       "id": 3,
//       "name": "Masha",
//       "isMan": false,
//       "age": 32
//     },
//     {
//       "id": 4,
//       "name": "Marina",
//       "isMan": false,
//       "age": 51
//     }
//   ]
