/*** MODULOS ***/
const express = require('express');
const methodOverride = require('method-override');
const multer = require('multer');
const fs = require('fs');

/*** modulos que contienen rutas ***/
const rutasMain = require('./routes/main');
const rutasProducts = require('./routes/products')

/*** guarda la ejecucion del metodo Router en la variable router***/
const router = express.Router();
/*** asigna a la variable app la ejecucion de express ***/
const app = express();

/*** aclara a express donde estan almacenados los recursos estaticos(cargados por el cliente) ***/
app.use(express.static('public'));
/*** configura la aplicacion para poder sobreescribir el metodo original y poder usar PUT o DELETE ***/
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/*** declara que va a usar ejs como motor de plantillas ***/
app.set('view engine', 'ejs');
/*** seteamos la nueva ruta hacia la carpeta views ***/
app.set('views', './src/views');

/*** Guarda en la variable PORT el puerto que utilize render o sino el puerto 3000. Variable de entorno***/
const PORT= process.env.PORT || 3000;
/*** Levanta el servidor ***/
app.listen(PORT, () => console.log(`Server up on port: http://localhost:${PORT}`));

/*** Con el metodo use, decimos que toda la plicacion va a usar un middleware ***/
/*** usa el motod use de express para implementar en el primer parametro la ruta base del recurso, como segundo parametro la constante que contiene al archivo de ruta ***/
app.use('/', rutasMain);
app.use('/products', rutasProducts);


