const autoBind = require("auto-bind");
const UserModel = require('../user/user.model');
const createHttpError = require("http-errors");
const { AuthMessage } = require("./auth.messages");
const { randomInt } = require('crypto');

class AuthService {
    #model
    constructor() {
        autoBind(this);
        this.#model = UserModel;
    }
    async sendOTP(mobile) {
        const user = await this.#model.findOne({ mobile });
        const now = new Date().getTime();
        const otp = {
            code: randomInt(10000, 99999),
            expiresIn: now + (1000 * 60 * 2)
        }
        if (!user) {
            const newUser = await this.#model.create({ mobile, otp });
            return newUser;
        }
        if (user.otp && user.otp.expiresIn > now) {
            throw new createHttpError.BadRequest(AuthMessage.OtpCodeNotExpired)
        }
        user.otp = otp;
        await user.save();
        return user;

    }

    async checkOTP(mobile, code) {
        const user = await this.checkExistByMobile(mobile);
        console.log('hi')
        const now = new Date().getTime();
        if (user?.otp?.expiresIn < now) throw new createHttpError.Unauthorized(AuthMessage.OtpCodeIsExpired)
        if (user?.otp?.code !== code) throw new createHttpError.Unauthorized(AuthMessage.OtpCodeIsIncorrect)
        if (!user.verifiedMobile) {
            user.verifiedMobile = true;
            await user.save();
        }
        return user;

    }

    async checkExistByMobile(mobile) {
        const user = await this.#model.findOne({ mobile });
        if (!user) throw new createHttpError.NotFound(AuthMessage.NotFoundUser);
        return user;


    }

}

module.exports = new AuthService()