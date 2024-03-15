const NodeEnv = require("../../common/constant/env.enum");
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
            const { mobile } = req.body;
            await this.#service.sendOTP(mobile);
            return res.status(200).json({
                message: AuthMessage.sendOtpOk
            })

        } catch (err) {
            next(err)
        }
    }

    async checkOTP(req, res, next) {
        try {
            const { mobile, code } = req.body;
            const token = await this.#service.checkOTP(mobile, code);
            return res.cookie('accessToken', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === NodeEnv.Production
            }).status(200).json({
                message: AuthMessage.LoginSuccessfully
            })

        } catch (err) {
            next(err)
        }
    }

}

module.exports = new AuthController();