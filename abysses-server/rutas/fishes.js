const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const schema = mongoose.Schema;


const schemaSpecies = new schema({
    id: Number,
    nombre: String,
    name: String,
    latin: String,
    length: String,
    weight: String,
    depth: String,
    zone: String,
    range: String,
    distribution: String,
    iucn: String,
    url: String,
    page: Number
}, { versionKey: false });

schemaSpecies.plugin(AutoIncrement, { inc_field: 'id' });

const ModelFishes = mongoose.model('species', schemaSpecies);
// correr con esta linea para el reseteo del contador automatico de ID
// ModelFishes.counterReset("id", function(err) {
//     console.log(err)
// });
module.exports = router;

// Llamada Añadir Especie
router.post('/addspecie', async (req, res) => {
    const nuevaespecie = new ModelFishes({
        id: req.body.id,
        nombre: req.body.nombre,
        name: req.body.name,
        latin: req.body.latin,
        length: req.body.length,
        weight: req.body.weight,
        zone: req.body.zone,
        depth: req.body.depth,
        range: req.body.range,
        distribution: req.body.distribution,
        iucn: req.body.iucn,
        page: req.body.page,
    });

    // FOMA MONGOOSE V.6
    // nuevaespecie.save((err) => {
    //     if (!err) {
    //         res.send('USUARIO AGREGADO');
    //     } else {
    //         res.send('ERROR AL AGREGAR USUARIO: ', err)
    //     }
    // })

    // FOMA MONGOOSE V.7
    try {
        await nuevaespecie.save();
        res.send('USUARIO AGREGADO');
    } catch (err) {
        res.send('ERROR AL AGREGAR USUARIO: ', err)
    }
});

router.get('/getspecies', (req, res) => {
    ModelFishes.find().then(function(docs,err){
        if (!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})