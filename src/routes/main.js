const express = require('express');
const controler = require('../controllers/mainController');
const mainController = require('../controllers/mainController');

/*** guarda la ejecucion del metodo Router en la variable router, que nos va a permitir modularizar el sistema de ruteo ***/
const router = express.Router();

router.get('/', mainController.index);

/*** exporta todo el contenido de router para hacerlo visible ***/
module.exports = router;