// получаем модуль Express
const express = require("express");
const app = express();
require("dotenv").config();
const fs = require("fs");
const bodyParser = require('body-parser')
const Sentry = require("@sentry/node");
// const Sentry = require("@sentry/node");

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.errorHandler());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


const routes = require('./src/routes/index')


app.use('/api', routes)

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'User Api',
        description: 'User Api Documentation',
        contact: {
          name: 'Aleksei Harus'
        },
        servers: [ 'http://localhost:3000' ]
      }
    },

    apis: [`./src/routes/*.js` ]
  }

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs))

Sentry.init({
  dsn: "https://9f3f907e730a40788e52d416059cc163@o1403547.ingest.sentry.io/6736370",
  });

// начинаем прослушивание подключений на 3000 порту
app.listen(process.env.PORT, (() => {
    console.log('---Server restarted---');
}));
