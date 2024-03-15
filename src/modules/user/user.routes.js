const router = require('express').Router()
const userController = require("./user.controller")
const Authorization = require('./../../common/guard/authorization.guard')

router.get('/whoami', Authorization, userController.whoami);


module.exports = {
    UserRouter: router
}