const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerConfig = (app) => {
    const swaggerDoc = swaggerJsdoc({
        swaggerDefinition: {
            info: {
                title: "Divar",
                version: "1.0.0",
                description:
                    "This is a sample of divar backend project"
            },
        },
        apis: [],
    })
    const swagger = swaggerUi.setup(swaggerDoc, {})
    app.use("/api-doc", swaggerUi.serve, swagger)

}
module.exports = swaggerConfig