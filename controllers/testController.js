// imports
const express = require('express')
const cookieParser = require('cookie-parser')

// auth
const testController = (req, res) => {
    try {
        res.cookie('accessToken', "test")
        res
            .status(200)
            .json('Your cookie is now saved')
    } catch (err) {
        res
        .status(400)
    }
}
module.exports = { testController }