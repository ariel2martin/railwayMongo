// require de librerías/paquetes
const express = require('express')
const { engine } = require('express-handlebars')
require('dotenv').config()

const routes = require('./routes')
const db = require('./db')

// Setear puerto
const PORT = 8080

// llamo a express
const app = express()


// Configuraciones de Express

app.engine('.hbs', engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')

// Middleware de Express
// app.use(express.static(__dirname + '/views'))
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Ruteo
app.get('/', routes.getRoot)
app.post('/guardar', routes.postGuardar)

// CONEXIÓN BASE DE DATOS Y LISTEN DEL SERVIDOR
const arrancar = async () => {

    try {
        await db.conectarDB(db.URL_BASE_DATOS)
        console.log('Base de datos Conectada')
        await app.listen(PORT)
        console.log('Servidor funcionando en el puerto: ' + PORT)
    } catch (error) {
        console.log(error)
    }

}

arrancar()

