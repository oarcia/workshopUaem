const express = require ('express');
const morgan = require('morgan');//requerimos morgan
const app = express();

app.use(morgan('dev'));//aqui utilizamos morgan con el metodo dev 
//hay varios metodos de morgan pero ahorita utilizaremos el metodo dev para peticiones HTTP

//utilizamos la ruta y desde la carpeta route requerimos router
app.use(require('./routes/index'));
module.exports = app;
