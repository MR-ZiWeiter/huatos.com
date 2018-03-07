var express = require('express')

var router = express.Router()

// Getting the ProductList Controller that we just created

var productController = require('../../controllers/product.controller');


// Map each API to the Controller FUnctions

router.get('/', productController.getProductList)

router.post('/', productController.createProduct)

router.put('/', productController.updateProduct)

router.delete('/:id',productController.removeProduct)


// Export the Router

module.exports = router;