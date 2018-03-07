// Accessing the Service that we just created

var productService = require('../services/product.service');

// Saving the context of this module inside the _the variable

_this = this


// Async Controller function to get the To do List

exports.getProductList = async function(req, res, next){

    // Check the existence of the query parameters, If the exists doesn't exists assign a default value
    
    var page = req.query.page ? Number(req.query.page) : 1
    var limit = req.query.limit ? Number(req.query.limit) : 10; 

    try{
    
        var products = await productService.getProduct({}, page, limit)
        
        // Return the huato list with the appropriate HTTP Status Code and Message.
        
        return res.status(200).json({status: 200, data: products, message: "Succesfully products Recieved"});
        
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.createProduct = async function(req, res, next){

    // Req.Body contains the form submit values.
    var product = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        imgSrc: req.body.imgSrc,
        serverHerf: req.body.serverHerf,
        localHerf: req.body.localHerf
    }
    try{
        
        // Calling the Service function with the new object from the Request Body
    
        var createdProcuts = await productService.createProduct(product)
        return res.status(201).json({status: 201, data: createdProcuts, message: "Succesfully Created Products"})
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: "Products Creation was Unsuccesfull"})
    }
}

exports.updateProduct = async function(req, res, next){

    // Id is necessary for the update

    if(!req.body._id){
        return res.status(400).json({status: 400, message: "Id must be present"})
    }

    var id = req.body._id;

    var product = {
        id,
        title: req.body.title ? req.body.title : null,
        description: req.body.description ? req.body.description : null,
        status: req.body.status ? req.body.status : null,
        imgSrc: req.body.imgSrc ? req.body.imgSrc : null,
        serverHerf: req.body.serverHerf ? req.body.serverHerf : null,
        localHerf: req.body.localHerf ? req.body.localHerf : null
    }

    try{
        var updatedProduct = await productService.updateProduct(product)
        return res.status(200).json({status: 200, data: updatedProduct, message: "Succesfully Updated product"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeProduct = async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await productService.deleteProduct(id)
        return res.status(204).json({status:204, message: "Succesfully product Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}