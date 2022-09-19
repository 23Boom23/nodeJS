// получаем модуль Express
const express = require("express");
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config();
// создаем приложение
const app = express();

const routes = require('./src/routes/index')

// const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use('/api', routes)

const port = process.env.PORT;
    
// начинаем прослушивание подключений на 3000 порту
app.listen(port, (() => {
    console.log('---Server restarted---');
}));
