const mainRouter = require('express').Router();
const authRoutes = require('./modules/auth/auth.routes');

mainRouter.use('/auth', authRoutes.AuthRouter);

module.exports = { mainRouter };