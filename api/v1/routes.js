var express = require('express');
var router = express.Router();


const miembros = [{
        id: 1,
        nombre: 'fernando',
        apellido: 'lovaton',
        sex: 'M',
        ahorro: 100
    },
    {
        id: 2,
        nombre: 'jose',
        apellido: 'lopez',
        sex: 'M',
        ahorro: 100
    },
    {
        id: 3,
        nombre: 'lourdes',
        apellido: 'lopez',
        sex: 'F',
        ahorro: 100
    },
    {
        id: 4,
        nombre: 'sofia',
        apellido: 'castillo',
        sex: 'F',
        ahorro: 100
    },

]






router.get('/miembros', function(req, res) {
    res.status(200).json({
        content: miembros
    });
});



module.exports = router;