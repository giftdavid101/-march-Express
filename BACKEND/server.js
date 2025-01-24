const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const express = require("express")
const mongoose = require("mongoose")
const app = express()
require("dotenv").config()

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'My API Endpoints',
            version: '1.0.0',
            description: 'List of all API endpoints',
        },
    },
    apis: ['./routes/*.js'], // Replace with the path to your route files
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
// Swagger UI route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



//routes
app.get('/', (req, res) => {
    res.send("Welcome to MarchEx")
})

mongoose.set("strict", false)
mongoose.connect(process.env.MONGO_DB_URI).then(() => {
    console.log("Mongodb connected")
    app.listen(process.env.PORT || 3000, () => {
        console.log(" MarchEx Server running")
    })
   
}).catch((err) => {
    console.log(err)
})