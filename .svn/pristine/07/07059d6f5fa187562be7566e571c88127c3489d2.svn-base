// Accessing the Service that we just created

var huatoService = require('../services/huato.service')

// Saving the context of this module inside the _the variable

_this = this


// Async Controller function to get the To do List


exports.getHuato = async function(req, res, next){

    // Check the existence of the query parameters, If the exists doesn't exists assign a default value
    var page = req.query.page ? Number(req.query.page) : 1
    var limit = req.query.limit ? Number(req.query.limit) : 10; 

    try{
    
        var huato = await huatoService.getHuato({}, page, limit)
        
        // Return the huato list with the appropriate HTTP Status Code and Message.
        
        return res.status(200).json({status: 200, data: huato, message: "Succesfully huato Recieved"});
        
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.createHuato = async function(req, res, next){

    // Req.Body contains the form submit values.
    var huato = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }
    try{
        
        // Calling the Service function with the new object from the Request Body
    
        var createdHuato = await huatoService.createHuato(huato)
        return res.status(201).json({status: 201, data: createdHuato, message: "Succesfully Created huato"})
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: "huato Creation was Unsuccesfull"})
    }
}

exports.updateHuato = async function(req, res, next){

    // Id is necessary for the update

    if(!req.body._id){
        return res.status(400).json({status: 400, message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body)

    var huato = {
        id,
        title: req.body.title ? req.body.title : null,
        description: req.body.description ? req.body.description : null,
        status: req.body.status ? req.body.status : null
    }

    try{
        var updatedHuato = await huatoService.updateHuato(huato)
        return res.status(200).json({status: 200, data: updatedHuato, message: "Succesfully Updated huato"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeHuato = async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await huatoService.deleteHuato(id)
        return res.status(204).json({status:204, message: "Succesfully huato Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}