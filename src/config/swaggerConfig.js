const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerConfig = (app) => {
    const swaggerDoc = swaggerJsdoc({
        swaggerDefinition: {
            openapi: "3.0.1",
            info: {
                title: "Divar",
                version: "1.0.0",
                description:
                    "This is a sample of divar backend project"
            },
        },
        apis: [process.cwd()+'/src/modules/**/*.swagger.js'],
    })
    const swagger = swaggerUi.setup(swaggerDoc, {})
    app.use("/api-doc", swaggerUi.serve, swagger)

}
module.exports = swaggerConfig