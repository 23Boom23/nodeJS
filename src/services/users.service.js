const fs = require('fs')
const Sentry = require("@sentry/node");

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
      return Sentry.captureException(err);

    }
  }

  getUserById(id) {
    try {
      return new Promise((res, rej) => {
        fs.readFile("data.json", (err, data) => {
          if (err) {
            return res(false);
          }
          return res(id)
        })
      })
    } catch (err) {
      return Sentry.captureException(err);
    }
  }

  getUserGender(gender) {
    try {
      return new Promise((res, rej) => {
        fs.readFile("data.json", (err, data) => {
          if (err) {
            return res(false);
          }
          return res(gender)
        })
      })
    } catch (err) {
      return Sentry.captureException(err);
    }
  }

  createUser(data) {
    return new Promise((res, rej) => {
      fs.writeFile(
        "data.json",
        JSON.stringify(data),
        (err, response) => {
          if (err) return Sentry.captureException(err);

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
          if (err) return Sentry.captureException(err);
          return res({ message: "User updated" })
        }
      )
    })
  }

  updateParametrOfUser(data) {
    return new Promise((res, rej) => {
      fs.writeFile(
        "data.json",
        JSON.stringify(data),
        (err, response) => {
          if (err) return Sentry.captureException(err);
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
          if (err) return Sentry.captureException(err);
          return res({ message: "User delete" })
        }
      )
    })
  }
}

module.exports = new UsersService()
