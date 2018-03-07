// Gettign the Newly created Mongoose Model we just created 
var product = require('../models/product.model')

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the To do List
exports.getProduct = async function(query, page, limit){

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    
    // Try Catch the awaited promise to handle the error 
    
    try {
        var products = await product.paginate(query, options)
        
        // Return the huatos list that was retured by the mongoose promise
        return products;

    } catch (e) {

        // return a Error message describing the reason 
        throw Error('Error while Paginating huatos')
    }
}

exports.createProduct = async function(products){
    
    // Creating a new Mongoose Object by using the new keyword
    var newProduct = new product({
        title: products.title,
        description: products.description,
        date: new Date(),
        status: products.status,
        imgSrc: products.imgSrc,
        serverHerf: products.serverHerf,
        localHerf: products.localHerf
    })
    try{

        // Saving the Product 
        var savedProduct = await newProduct.save()

        return savedProduct;
    }catch(e){
        // return a Error message describing the reason     
        throw Error("Error while Creating Product")
    }
}

exports.updateProduct = async function(products){
    var id = products.id

    try{
        //Find the old Todo Object by the Id
    
        var oldProduct = await product.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the product")
    }

    // If no old Todo Object exists return false
    if(!oldProduct){
        return false;
    }

    console.log(oldProduct)

    //Edit the Todo Object
    oldProduct.title = products.title
    oldProduct.description = products.description
    oldProduct.status = products.status


    console.log(oldProduct)

    try{
        var savedProduct = await oldProduct.save()
        return savedProduct;
    }catch(e){
        throw Error("And Error occured while updating the products");
    }
}

exports.deleteProduct = async function(id){
    
    // Delete the Product
    try{
        var deleted = await product.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Todo Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the product")
    }
}