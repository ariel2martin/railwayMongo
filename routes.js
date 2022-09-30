const db = require("./db")

function getRoot(req, res) {
    res.sendFile(__dirname + '/views/index.html')
}

async function postGuardar(req, res) {
    console.log('Guardando información')
    console.log(req.body)
    await db.guardarPelicula(req.body) // información formulario
    res.redirect('/')
}

module.exports = {
    getRoot,
    postGuardar
}