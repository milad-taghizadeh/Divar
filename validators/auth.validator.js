const { body } = require("express-validator")

const loginValidator = () => {
    body("username").isEmail(),
        body("password").isLength(4, 6)
}

module.exports = { loginValidator }