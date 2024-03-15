const mainRouter = require('express').Router();
const authRoutes = require('./modules/auth/auth.routes');
const userRoutes = require('./modules/user/user.routes')

mainRouter.use('/auth', authRoutes.AuthRouter);
mainRouter.use('/user', userRoutes.UserRouter);

module.exports = { mainRouter };