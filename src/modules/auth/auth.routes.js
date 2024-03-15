const router = require('express').Router()
const Authorization = require('../../common/guard/authorization.guard');
const authController = require("./auth.controller")


router.post('/send-otp', authController.sendOTP);
router.post('/check-otp', authController.checkOTP);
router.get('/logout', Authorization, authController.logout);


module.exports = {
    AuthRouter: router
}