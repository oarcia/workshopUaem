const {Router } = require('express');//en el index de routes mandamos a llamar
//el metodo routes de express para crear las rutas que tendremos en nuestra api

const router = Router();//cuando ejecuta router nos devuelve un objeto del mismo nombre router

//ahorita no nos retorna nada ahora lo que hacemos es retonrar un JSON que diga respuesta del server
router.get('/',(req, res)=> res.json({message: 'Hello Uaemex'}))// a partir de aqui es como se generan las rutas de la rest API
module.exports = router;// aqui para que sea visible en el proyecto exportamos router