const express = require('express');
const app = express();

//Importar conexion mongoDB
const connectionDB = require('./connection.js');

//Importación del archivo backend de modelos 
const rutaFishes = require('./rutas/fishes');

//Importacion de Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:'true'}));

app.use('/api/pruebas', rutaFishes);

app.get('/', (req, res) => {
    res.end('NODE.JS Server running...')
});
//Configurar server básico port 5000
app.listen(5000, function() {
    console.log("__SERVER RUNNING__");
})

