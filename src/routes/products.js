const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

/*** renteriza pagina con los distintos productos ***/

router.get('/', productsController.index);

/*** Obtener todos los productos categoria hamburguesa ***/
router.get('/burgers', productsController.burgers);

/*** Obtener un producto ***/
router.get('/detail/:id', productsController.detail);

/*** Crear un nuevo producto ***/
router.get('/create', productsController.create);
router.post('/create', productsController.store)

module.exports = router;