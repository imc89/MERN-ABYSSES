const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/abysse') 

const connection = mongoose.connection;


connection.once('open', () =>{
    console.log('__CONNECTION SUCCESS__');
});

connection.on('error', (err) =>{
    console.error('__DATA BASE ERROR:', err.message);
});
// ESTA LINEA ES NUEVA (V)
module.exports = mongoose

