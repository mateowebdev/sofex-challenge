const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const setupDb = require('../db/db-setup');

// set up database with objection and knex
setupDb();

const empleadoRouter = require('./routes/empleado');
const jornadaRouter = require('./routes/jornada');
const pagosRouter = require('./routes/pagos');
const semanaRouter = require('./routes/semana');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/empleados', empleadoRouter);
app.use('/jornadas', jornadaRouter);
app.use('/pagos', pagosRouter);
app.use('/semana', semanaRouter);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
