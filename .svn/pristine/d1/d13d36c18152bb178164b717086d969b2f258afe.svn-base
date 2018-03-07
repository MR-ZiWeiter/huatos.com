// Gettign the Newly created Mongoose Model we just created 
var huato = require('../models/huato.model')

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the To do List
exports.getHuato = async function(query, page, limit){

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    
    // Try Catch the awaited promise to handle the error 
    
    try {
        var huatos = await huato.paginate(query, options)
        
        // Return the huatos list that was retured by the mongoose promise
        return huatos;

    } catch (e) {
        console.log(e)
        // return a Error message describing the reason 
        throw Error('Error while Paginating huatos')
    }
}

exports.createHuato = async function(huatos){
    
    // Creating a new Mongoose Object by using the new keyword
    var newHuato = new huato({
        title: huatos.title,
        description: huatos.description,
        date: new Date(),
        status: huatos.status
    })
    try{

        // Saving the huato 
        var savedHuato = await newHuato.save()

        return savedHuato;
    }catch(e){
        // return a Error message describing the reason     
        throw Error("Error while Creating Huato")
    }
}

exports.updateHuato = async function(huatos){
    var id = huatos.id

    try{
        //Find the old Todo Object by the Id
    
        var oldHuato = await huato.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Huato")
    }

    // If no old Todo Object exists return false
    if(!oldHuato){
        return false;
    }

    console.log(oldHuato)

    //Edit the Todo Object
    oldHuato.title = huatos.title
    oldHuato.description = huatos.description
    oldHuato.status = huatos.status


    console.log(oldHuato)

    try{
        var savedHuato = await oldHuato.save()
        return savedHuato;
    }catch(e){
        throw Error("And Error occured while updating the Huato");
    }
}

exports.deleteHuato = async function(id){
    
    // Delete the Todo
    try{
        var deleted = await huato.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Todo Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Huato")
    }
}