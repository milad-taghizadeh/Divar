const NotFoundHandler = (app) => {
    app.use((req, res, next) => {
        res.status(404).json({ statusCode: 404, url: req.url,method : req.method, message: `Route not found , check url endpoint again !!!!` })
    })
}

module.exports = { NotFoundHandler }