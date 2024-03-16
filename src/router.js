const mainRouter = require('express').Router();
const authRoutes = require('./modules/auth/auth.routes');
const categoryRoutes = require('./modules/category/category.routes');
const userRoutes = require('./modules/user/user.routes')

mainRouter.use('/auth', authRoutes.AuthRouter);
mainRouter.use('/user', userRoutes.UserRouter);
mainRouter.use('/category', categoryRoutes.CategoryRouter);

module.exports = { mainRouter };