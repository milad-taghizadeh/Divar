const express = require('express')
const app = express();

const ExceptionHandler = (app) => {
    app.use((err, req, res, next) => {
        const status = err?.status ?? err?.statusCode ?? err?.code;
        if (!status || isNaN(+status) || status > 511 || status < 200) status = 500 ;
        res.status(status).json(err?.message ?? err?.stack ?? { message: "Internal Server ERROR !!!!!" })
    })
}

module.exports = { ExceptionHandler }