const express=require('express')
const app = express()

//Utilizando conexion de la base de datos mongodb
const con = require('./conexion')

//Importar archivos de rutas y modelos
const rutaproducto = require('./rutasModelo/producto')

//Import Body-parser - serailizar datos de envio - post
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/producto', rutaproducto)


/*Iniciando el servidor*/
app.get('/',(req, res)=>{
    res.end('Nuestro servidor ya esta iniciado en el navegador')
})

app.listen(5000, function(){
    console.log('Nuestro servidor node esta en ejecucion')
})

