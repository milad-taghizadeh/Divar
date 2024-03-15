// creating server
const express = require('express');
const app = express();

// body parser
const bodyParser = require('body-parser');

// .env file config
const dotenv = require('dotenv');
dotenv.config();

// cookie parser
const cookieParser = require('cookie-parser')

// middleware
const morgan = require('morgan');

// main router
const { mainRouter } = require('../router');

// swagger config
const swaggerConfig = require('../config/swaggerConfig')

// error handler
const { NotFoundHandler } = require('../common/utils/notFoundHandler');
const { ExceptionHandler } = require('../common/utils/exceptionHandler');


module.exports = function (app) {
    // use middleware : morgan
    app.use(morgan('dev'))

    // use Parse JSON bodies
    app.use(bodyParser.json());

    // use Parse cookies
    app.use(cookieParser());

    // use Parse URL-encoded bodies
    app.use(bodyParser.urlencoded({ extended: true }));

    // swagger config
    swaggerConfig(app);

    // set the reoutes
    app.use('/api', mainRouter)

    // error handler
    NotFoundHandler(app)
    ExceptionHandler(app)
}