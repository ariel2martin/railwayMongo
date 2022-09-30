const mongoose = require('mongoose')

let nombreCollection = 'peliculas'

/* ------------------------------------------ */
/* SCHEMA                                     */
/* ------------------------------------------ */

let peliculaSchema = mongoose.Schema({
    title: String,
    genre: String,
    year: Number
})

let peliculas = mongoose.model(nombreCollection, peliculaSchema)

module.exports = {
    peliculas
}