const express = require("express");
const router = express.Router();

const UsersControllers = require('../controllers/users.controller');
const UsersService = require("../services/users.service")
const Validator = require("../utils/validators")

router.use(async (req, res, next) => {
  let data = await UsersService.getUsers()
  if (data) {
    req.users = data;
    next()
  }
})

/**
 * @swagger
 * /api/users:
 *  get:
 *      summary: Get all users
 *      description: Returns all users from DB
 *      tags:
 *          - Users
 *      responses:
 *          '200':
 *              description: Successfull response
 */
router.get('/', UsersControllers.getUsers)
/**
 * @swagger
 * /api/users/user/{id}:
 *  get:
 *      summary: Get user by id
 *      description: Returns user by ID
 *      tags:
 *          - Users
 *      responses:
 *          '200':
 *              description: Successfull response
 */
router.get('/user/:id', UsersControllers.getUserById)
/**
 * @swagger
 * /api/users:
 *  post:
 *      summary: Add new user
 *      description:
 *          Register 'User' object
 *      tags:
 *          - Users
 *      parametrs:
 *          -name: user
 *          in: body
 *          description: User object
 *          required: true
 *          schema:
 *             $ref: '#/definitions/Users'
 *      responses:
*        201:
 *          description: Created
 *          schema:
 *              title: Return String
 *              type: string
 *              example: "User added succesfully"
 *        400:
 *          description: Bad Request
 *          schema:
 *            type: string
 *            example: "Could not add User"
 * definitions:
 *   Users:
 *     description: Users object
 *     properties:
 *       login:
 *         type: string
 *         example: example@example.com
 *         description: login for user
 *       password:
 *         type: string
 *         example: 123123
 *         description: password for user
 *       name:
 *          type: string
 *          example: Sashan
 *          description: name of user
 *       isMan:
 *         type: boolean
 *         example: true
 *         description: true or false
 *       age:
 *          type: number
 *          example: 24
 *          description: age of user
 *       isAdmin:
 *         type: boolean
 *         example: false
 *         description: admin or user
 *       city:
 *         type: string
 *         example: "Minsk"
 *         description: city
 *     required:
 *      - name
 *      - isMan
 *      - age
 *      - login
 *      - password
 *      - isAdmin
 */
router.post('/', Validator.validatePost(), UsersControllers.createUser)
/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *      summary: Update a user with {id}
 *      description: Update info about user
 *      tags:
 *        - Users
 *      consumes:
 *        - application/json
 *      parametrs:
 *        - in path:
 *          name: id
 *          required: true
 *          description: Set an {id} of user to update
 *          type: integer
 *        - in: body
 *          name: Users
 *          required: true
 *          description: object to update
 *          shema:
 *              $ref: "#/definitions/Users"
 *      responses:
 *          200:
 *              description: Successfull response
 *          400:
 *          description: Bad Request
 *          schema:
 *            type: string
 *            example: "Could not update User"
 */
router.put('/:id', Validator.validateParam(), UsersControllers.updateUser)
/**
 * @swagger
 * /api/users/{id}:
 *  patch:
 *      summary: Update 1 parametr of user
 *      description: Update 1 parametr of user
 *      tags:
 *          - Users
 *      responses:
 *          200:
 *              description: Successfull response
 */
router.patch('/:id', UsersControllers.updateParametrOfUser)
/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *      summary: Delete user with {id}
 *      tags:
 *        - Users
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: id of user to delete
 *          type: integer
 *      responses:
 *          200:
 *              description: Successfull response
 *          501:
 *              description: Bad Request
 */
router.delete('/:id', UsersControllers.deleteUser)
router.get('/:gender', UsersControllers.getUserGender)

module.exports = router
