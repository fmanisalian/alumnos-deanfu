const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// Para acceder al directorio actual
const path = require('path');

const app = express();

// Conexión base de datos
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/alumnos-db';
const options = {useNewUrlParser: true, useCreateIndex: true};

// Or using promises
mongoose.connect(uri, options).then(
  /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
  () => { console.log('Conectado a DB') },
  /** handle initial connection error */
  err => { console.log(err) }
);

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', require('./routes/alumno'));

// Rutas
//app.get('/', function (req, res) {
//  res.send('Hello World!');
//});

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
  console.log('Example app listening on port'+ app.get('puerto'));
});


