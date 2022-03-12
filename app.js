// CARGAR .ENV
require('dotenv').config();

// MODULOS
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');

// RUTAS
const indexRouter = require('./routes/index');

// APP
const express = require('express');
const app = express();

// VISTAS
app.set('views', path.join(__dirname, 'views'));

// VIEWS handlebars
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'index',
    layoutsDir: app.get('views'),
  //  partialsDir: path.join(app.get('views'), 'Partials'),
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;