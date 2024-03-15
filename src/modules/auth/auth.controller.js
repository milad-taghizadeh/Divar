const { AuthMessage } = require("./auth.messages");
const authService = require("./auth.service");
const autoBind = require('auto-bind')

class AuthController {
    #service;
    constructor() {
        autoBind(this);
        this.#service = authService;
    }
    async sendOTP(req, res, next) {
        try {
            const {mobile} = req.body;
            await this.#service.sendOTP(mobile);
            return res.json({
                message: AuthMessage.sendOtpOk
            })

        } catch (err) {
            next(err)
        }
    }

    async checkOTP(req, res, next) {
        try {
            
        } catch (err) {
            next(err)
        }
    }

}

module.exports = new AuthController();