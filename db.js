const { default: mongoose } = require("mongoose")
const model = require('./model')

const URL_BASE_DATOS = process.env.URL_BASE_DATOS

async function conectarDB(url) {
    await mongoose.connect(url, { useNewUrlParser: true})
}

async function guardarPelicula(data) {
    let pelicula = new model.peliculas(data)
    try {
        await pelicula.save()
        console.log('Se escribió correctamente en la DB')
    } catch (error) {
        console.log('Error al escribir en la DB', error)
    }

}

module.exports = {
    URL_BASE_DATOS,
    conectarDB,
    guardarPelicula
}