var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var productSchema = new mongoose.Schema({
    title: String,
    imgSrc: String,
    description: String,
    serverHerf: String,
    localHerf: String,
    date: Date,
    statue: String
});

/**
 * 产品表 products
 */
productSchema.plugin(mongoosePaginate);
const product = mongoose.model('product', productSchema);


module.exports = product;