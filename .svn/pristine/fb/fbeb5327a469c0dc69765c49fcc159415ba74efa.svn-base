var express = require('express')

var router = express.Router()

// Getting the Huato Controller that we just created

var HuatoController = require('../../controllers/huato.controller');

// Map each API to the Controller FUnctions

router.get('/', HuatoController.getHuato)

router.post('/', HuatoController.createHuato)

router.put('/', HuatoController.updateHuato)

router.delete('/:id',HuatoController.removeHuato)

// Export the Router

module.exports = router;