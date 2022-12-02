const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Ciclo4');//Localhost 127.0.0.1

const objectbd = mongoose.connection

objectbd.on('connected', ()=>{console.log('conexion establecidad con la base de datos cilo 4')})
objectbd.on('error', ()=>{console.log('No se establecio conexion')})

module.exports = mongoose
