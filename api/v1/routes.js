var express = require('express');
var router = express.Router();

const balance = [{
        monto: 0,
        montoNuevo: 0,
    },

]






router.get('/balance', function(req, res) {
    res.status(200).json({
        content: balance
    });
});



module.exports = router;